import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  Send,
  Car,
  Calendar,
  Clock,
  Hash,
  UserCheck,
  CloudSun,
  Gauge,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  RotateCcw,
  ShieldCheck,
  Ruler,
  Settings2,
  MessageSquareText,
  Eye,
  Sparkles,
  ArrowRight,
  Zap,
} from "lucide-react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import SEO from "../ui/SEO";
import {
  DL25_CATEGORIES,
  DL25_SEGMENTS,
  WEATHER_CONDITIONS,
  getCategoriesForSegment,
  type FaultType,
  type DL25Segment,
} from "../../data/dl25Categories";
import {
  generateDL25PDF,
  countDrivingFaults,
  countSeriousFaults,
  countDangerousFaults,
  type DL25ReportData,
} from "../../lib/dl25Pdf";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormState {
  testDate: string;
  testTime: string;
  applicationRef: string;
  vehicleReg: string;
  candidateName: string;
  drivingLicenceNo: string;
  instructorName: string;
  insurance: boolean;
  residency: boolean;
  weather: string[];
  vehicleLength: string;
  vehicleWidth: string;
  vehicleHeight: string;
  transmission: "Manual" | "Auto" | "";
  result: "Pass" | "Fail" | "None";
  debriefNotes: string;
}

const INITIAL_FORM: FormState = {
  testDate: "",
  testTime: "",
  applicationRef: "",
  vehicleReg: "",
  candidateName: "",
  drivingLicenceNo: "",
  instructorName: "",
  insurance: false,
  residency: false,
  weather: [],
  vehicleLength: "",
  vehicleWidth: "",
  vehicleHeight: "",
  transmission: "",
  result: "None",
  debriefNotes: "",
};

// ─── Sub-component: Chunky Fault Toggle ──────────────────────────────────────

const FAULT_OPTIONS: {
  type: FaultType;
  label: string;
  shortLabel: string;
  activeClass: string;
  inactiveClass: string;
}[] = [
  {
    type: "none",
    label: "No fault",
    shortLabel: "—",
    activeClass: "bg-white/[0.06] border-white/20 text-gray-300",
    inactiveClass: "bg-transparent border-transparent text-gray-600",
  },
  {
    type: "driver",
    label: "Driving fault",
    shortLabel: "DF",
    activeClass: "bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.15)]",
    inactiveClass: "bg-transparent border-transparent text-gray-600 hover:text-amber-400/60",
  },
  {
    type: "serious",
    label: "Serious fault",
    shortLabel: "S",
    activeClass: "bg-red-500/20 border-red-500/50 text-red-300 shadow-[0_0_12px_rgba(239,68,68,0.15)]",
    inactiveClass: "bg-transparent border-transparent text-gray-600 hover:text-red-400/60",
  },
  {
    type: "dangerous",
    label: "Dangerous fault",
    shortLabel: "D",
    activeClass: "bg-red-700/30 border-red-600/60 text-red-400 shadow-[0_0_12px_rgba(220,38,38,0.2)]",
    inactiveClass: "bg-transparent border-transparent text-gray-600 hover:text-red-400/60",
  },
];

interface FaultToggleProps {
  value: FaultType;
  onChange: (val: FaultType) => void;
}

function FaultToggle({ value, onChange }: FaultToggleProps) {
  return (
    <div className="flex items-center gap-1.5">
      {FAULT_OPTIONS.map((opt) => {
        const isActive = value === opt.type;
        return (
          <button
            key={opt.type}
            type="button"
            onClick={() => onChange(opt.type)}
            className={`
              min-w-[44px] h-10 px-3 rounded-xl text-xs font-bold transition-all duration-200
              flex items-center justify-center border
              ${isActive ? opt.activeClass : opt.inactiveClass}
              active:scale-95
            `}
            title={opt.label}
          >
            {opt.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

// ─── Sub-component: Weather Chip ─────────────────────────────────────────────

function WeatherChip({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`
        px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border min-w-[100px]
        ${checked
          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-500/10"
          : "bg-white/[0.03] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-gray-300"
        }
        active:scale-95
      `}
    >
      {label}
    </button>
  );
}

// ─── Sub-component: Collapsible Section ──────────────────────────────────────

function CollapsibleSection({
  icon,
  title,
  subtitle,
  children,
  defaultOpen = true,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/[0.03] border border-white/[0.08] rounded-2xl overflow-hidden backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            {icon}
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold text-sm">{title}</h3>
            {subtitle && (
              <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>
            )}
          </div>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500" />
        )}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Sub-component: Stat Pill ────────────────────────────────────────────────

function StatPill({
  label,
  count,
  colorClass,
}: {
  label: string;
  count: number;
  colorClass: string;
}) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
      <span className="text-xs text-gray-400 font-medium">{label}</span>
      <span className={`text-xl font-black ${colorClass}`}>{count}</span>
    </div>
  );
}

// ─── Sub-component: Result Toggle ────────────────────────────────────────────

function ResultToggle({
  value,
  onChange,
}: {
  value: "Pass" | "Fail" | "None";
  onChange: (v: "Pass" | "Fail" | "None") => void;
}) {
  const options: {
    value: "Pass" | "Fail" | "None";
    label: string;
    icon: React.ReactNode;
    activeClass: string;
  }[] = [
    {
      value: "None",
      label: "Not set",
      icon: <HelpCircle className="w-5 h-5" />,
      activeClass: "bg-white/[0.08] border-white/20 text-gray-300",
    },
    {
      value: "Pass",
      label: "PASS",
      icon: <CheckCircle2 className="w-5 h-5" />,
      activeClass: "bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    },
    {
      value: "Fail",
      label: "FAIL",
      icon: <XCircle className="w-5 h-5" />,
      activeClass: "bg-red-500/20 border-red-500/50 text-red-300 shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {options.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`
              flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-200 border
              ${isActive
                ? opt.activeClass
                : "bg-transparent border-white/[0.06] text-gray-500 hover:border-white/20 hover:text-gray-300"
              }
              active:scale-95
            `}
          >
            {opt.icon}
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function DL25ReportGenerator() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [faults, setFaults] = useState<Record<string, FaultType>>({});
  const [generating, setGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState(DL25_SEGMENTS[0].id);
  const [detailsOpen, setDetailsOpen] = useState(true);

  // ── Derived totals ────────────────────────────────────────────────────────
  const drivingFaults = useMemo(() => countDrivingFaults(faults), [faults]);
  const seriousFaults = useMemo(() => countSeriousFaults(faults), [faults]);
  const dangerousFaults = useMemo(() => countDangerousFaults(faults), [faults]);

  // ── Helpers ────────────────────────────────────────────────────────────────
  const updateForm = useCallback(
    <K extends keyof FormState>(key: K, value: FormState[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const toggleWeather = useCallback((condition: string) => {
    setForm((prev) => ({
      ...prev,
      weather: prev.weather.includes(condition)
        ? prev.weather.filter((w) => w !== condition)
        : [...prev.weather, condition],
    }));
  }, []);

  const setFault = useCallback((key: string, value: FaultType) => {
    setFaults((prev) => {
      const next = { ...prev };
      if (value === "none") {
        delete next[key];
      } else {
        next[key] = value;
      }
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    setForm(INITIAL_FORM);
    setFaults({});
    setActiveTab(DL25_SEGMENTS[0].id);
  }, []);

  // ── Generate PDF ───────────────────────────────────────────────────────────
  const handleGenerate = useCallback(
    async (action: "download" | "email") => {
      setGenerating(true);
      try {
        const data: DL25ReportData = {
          testDate: form.testDate,
          testTime: form.testTime,
          applicationRef: form.applicationRef,
          vehicleReg: form.vehicleReg,
          candidateName: form.candidateName,
          drivingLicenceNo: form.drivingLicenceNo,
          instructorName: form.instructorName,
          insurance: form.insurance,
          residency: form.residency,
          weather: form.weather,
          vehicleLength: form.vehicleLength,
          vehicleWidth: form.vehicleWidth,
          vehicleHeight: form.vehicleHeight,
          transmission: form.transmission,
          faults,
          result: form.result,
          debriefNotes: form.debriefNotes,
        };

        const doc = await generateDL25PDF(data);

        if (action === "download") {
          doc.save(`DL25-Mock-Report-${form.vehicleReg || "unknown"}.pdf`);
        } else {
          doc.save(`DL25-Mock-Report-${form.vehicleReg || "unknown"}.pdf`);
        }
      } catch (err) {
        console.error("PDF generation failed:", err);
      } finally {
        setGenerating(false);
      }
    },
    [form, faults],
  );

  // ── Current segment categories ─────────────────────────────────────────────
  const currentSegment = DL25_SEGMENTS.find((s) => s.id === activeTab);
  const currentCategories = useMemo(
    () => getCategoriesForSegment(activeTab),
    [activeTab],
  );

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <SEO
        title="DL25 Mock Test Report Generator | Drive Dojo"
        description="Generate professional mock driving test reports that mirror the official DVSA DL25 examiner sheet. Perfect for driving instructors to provide structured feedback."
      />

      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* ── Header ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">
                DVSA DL25 Examiner Sheet — Mock Report
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
              Mock Test{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Report Generator
              </span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Record driving test faults across all 33 DVSA assessment categories
              and generate a professional PDF report that mirrors the official DL25
              examiner sheet.
            </p>
          </motion.div>

          {/* ── Live Stats Bar ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-8"
          >
            <StatPill label="Driving Faults" count={drivingFaults} colorClass="text-amber-400" />
            <StatPill label="Serious" count={seriousFaults} colorClass="text-red-400" />
            <StatPill label="Dangerous" count={dangerousFaults} colorClass="text-red-500" />
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <span className="text-xs text-emerald-300 font-medium">Result</span>
              <span
                className={`text-xl font-black ${
                  form.result === "Pass"
                    ? "text-emerald-400"
                    : form.result === "Fail"
                      ? "text-red-400"
                      : "text-gray-500"
                }`}
              >
                {form.result === "None" ? "—" : form.result}
              </span>
            </div>
          </motion.div>

          {/* ── Test Details (collapsible) ─────────────────── */}
          <CollapsibleSection
            icon={<Calendar className="w-5 h-5" />}
            title="Test Details & Setup"
            subtitle="Date, time, candidate info, declarations, weather & vehicle"
            defaultOpen={detailsOpen}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> Test Date
                </label>
                <input
                  type="date"
                  value={form.testDate}
                  onChange={(e) => updateForm("testDate", e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> Test Time
                </label>
                <input
                  type="time"
                  value={form.testTime}
                  onChange={(e) => updateForm("testTime", e.target.value)}
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5" /> Application Ref
                </label>
                <input
                  type="text"
                  value={form.applicationRef}
                  onChange={(e) => updateForm("applicationRef", e.target.value)}
                  placeholder="e.g. 123456789012"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5" /> Vehicle Reg
                </label>
                <input
                  type="text"
                  value={form.vehicleReg}
                  onChange={(e) => updateForm("vehicleReg", e.target.value.toUpperCase())}
                  placeholder="e.g. AB12 CDE"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" /> Candidate Name
                </label>
                <input
                  type="text"
                  value={form.candidateName}
                  onChange={(e) => updateForm("candidateName", e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Driving Licence No.
                </label>
                <input
                  type="text"
                  value={form.drivingLicenceNo}
                  onChange={(e) => updateForm("drivingLicenceNo", e.target.value)}
                  placeholder="e.g. SMITH809112AB9CD"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-1.5 flex items-center gap-1.5">
                  <UserCheck className="w-3.5 h-3.5" /> Instructor Name
                </label>
                <input
                  type="text"
                  value={form.instructorName}
                  onChange={(e) => updateForm("instructorName", e.target.value)}
                  placeholder="Your name"
                  className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>

            {/* Declarations */}
            <div className="mt-5 pt-5 border-t border-white/[0.06]">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5" /> Candidate Declaration
              </h4>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      form.insurance
                        ? "bg-emerald-500 border-emerald-500"
                        : "border-white/20 group-hover:border-white/40"
                    }`}
                    onClick={() => updateForm("insurance", !form.insurance)}
                  >
                    {form.insurance && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-sm text-white">Valid insurance cover</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
                      form.residency
                        ? "bg-emerald-500 border-emerald-500"
                        : "border-white/20 group-hover:border-white/40"
                    }`}
                    onClick={() => updateForm("residency", !form.residency)}
                  >
                    {form.residency && <CheckCircle2 className="w-4 h-4 text-white" />}
                  </div>
                  <span className="text-sm text-white">UK residency ≥ 185 days</span>
                </label>
              </div>
            </div>

            {/* Weather */}
            <div className="mt-4">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CloudSun className="w-3.5 h-3.5" /> Weather Conditions
              </h4>
              <div className="flex flex-wrap gap-2">
                {WEATHER_CONDITIONS.map((condition) => (
                  <WeatherChip
                    key={condition}
                    label={condition}
                    checked={form.weather.includes(condition)}
                    onChange={() => toggleWeather(condition)}
                  />
                ))}
              </div>
            </div>

            {/* Vehicle */}
            <div className="mt-4">
              <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Settings2 className="w-3.5 h-3.5" /> Vehicle Details (optional)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Length (m)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={form.vehicleLength}
                    onChange={(e) => updateForm("vehicleLength", e.target.value)}
                    placeholder="4.5"
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Width (m)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={form.vehicleWidth}
                    onChange={(e) => updateForm("vehicleWidth", e.target.value)}
                    placeholder="1.8"
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Height (m)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={form.vehicleHeight}
                    onChange={(e) => updateForm("vehicleHeight", e.target.value)}
                    placeholder="1.5"
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Transmission</label>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => updateForm("transmission", "Manual")}
                      className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${
                        form.transmission === "Manual"
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                          : "bg-white/[0.05] border-white/[0.1] text-gray-400 hover:border-white/20"
                      }`}
                    >
                      Manual
                    </button>
                    <button
                      type="button"
                      onClick={() => updateForm("transmission", "Auto")}
                      className={`flex-1 px-3 py-2 rounded-lg text-xs font-semibold transition-all border ${
                        form.transmission === "Auto"
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300"
                          : "bg-white/[0.05] border-white/[0.1] text-gray-400 hover:border-white/20"
                      }`}
                    >
                      Auto
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          {/* ── Tabbed Fault Assessment ────────────────────── */}
          <div className="mt-6">
            {/* Tab bar */}
            <div className="flex items-center gap-1 p-1 bg-white/[0.03] border border-white/[0.06] rounded-2xl mb-5 overflow-x-auto">
              {DL25_SEGMENTS.map((seg) => {
                const isActive = activeTab === seg.id;
                // Count faults in this segment
                const segCats = getCategoriesForSegment(seg.id);
                const segFaultCount = segCats.reduce((acc, cat) => {
                  if (faults[cat.id] && faults[cat.id] !== "none") acc++;
                  if (cat.subFields) {
                    cat.subFields.forEach((sf) => {
                      const key = `${cat.id}.${sf.id}`;
                      if (faults[key] && faults[key] !== "none") acc++;
                    });
                  }
                  return acc;
                }, 0);

                return (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => setActiveTab(seg.id)}
                    className={`
                      flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap
                      ${isActive
                        ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm"
                        : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]"
                      }
                    `}
                  >
                    <span className="hidden sm:inline">{seg.label}</span>
                    <span className="sm:hidden">{seg.shortLabel}</span>
                    {segFaultCount > 0 && (
                      <span className={`
                        text-[10px] font-bold px-1.5 py-0.5 rounded-full
                        ${isActive ? "bg-emerald-500/20 text-emerald-300" : "bg-white/[0.06] text-gray-400"}
                      `}>
                        {segFaultCount}
                      </span>
                    )}
                  </button>
                );
              })}
              {/* Final Debrief tab */}
              <button
                type="button"
                onClick={() => setActiveTab("debrief")}
                className={`
                  flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 whitespace-nowrap
                  ${activeTab === "debrief"
                    ? "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-sm"
                    : "text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]"
                  }
                `}
              >
                <MessageSquareText className="w-4 h-4" />
                <span className="hidden sm:inline">Final Debrief</span>
                <span className="sm:hidden">Debrief</span>
              </button>
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              {activeTab === "debrief" ? (
                /* ── Final Debrief Tab ─────────────────────── */
                <motion.div
                  key="debrief"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-5"
                >
                  {/* Result */}
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <ClipboardCheck className="w-4 h-4 text-emerald-400" />
                      Test Result
                    </h3>
                    <ResultToggle
                      value={form.result}
                      onChange={(v) => updateForm("result", v)}
                    />
                  </div>

                  {/* Debrief Notes */}
                  <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6">
                    <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                      <MessageSquareText className="w-4 h-4 text-emerald-400" />
                      Instructor Debrief Notes
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">
                      Write a custom summary of the candidate's performance. This will appear in the PDF report.
                    </p>
                    <textarea
                      value={form.debriefNotes}
                      onChange={(e) => updateForm("debriefNotes", e.target.value)}
                      placeholder="Enter your debrief notes here... e.g. 'Good overall control. Needs more practice with roundabout observations and mirror checks before changing speed. Show me / Tell me questions answered correctly.'"
                      rows={6}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/20 transition-all resize-y"
                    />
                  </div>

                  {/* Generate buttons */}
                  <div className="bg-gradient-to-br from-emerald-500/5 to-green-500/10 border border-emerald-500/20 rounded-2xl p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-sm font-semibold text-white">Generate Report</h3>
                        <p className="text-xs text-gray-500 mt-1">
                          Compile the assessment into a branded PDF report
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-black text-amber-400">{drivingFaults}</div>
                          <div className="text-[10px] text-gray-500 uppercase">Driving</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                          <div className="text-2xl font-black text-red-400">{seriousFaults}</div>
                          <div className="text-[10px] text-gray-500 uppercase">Serious</div>
                        </div>
                        <div className="w-px h-10 bg-white/10" />
                        <div className="text-center">
                          <div className="text-2xl font-black text-red-500">{dangerousFaults}</div>
                          <div className="text-[10px] text-gray-500 uppercase">Dangerous</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleGenerate("download")}
                        disabled={generating}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-600/20 hover:shadow-emerald-500/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        {generating ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <Download className="w-4 h-4" />
                            Download PDF Report
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleGenerate("email")}
                        disabled={generating}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                      >
                        <Send className="w-4 h-4" />
                        Save for Email
                      </button>

                      <button
                        type="button"
                        onClick={resetAll}
                        className="inline-flex items-center gap-2 px-4 py-3.5 text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        <RotateCcw className="w-4 h-4" />
                        Reset All
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* ── Fault Assessment Tab ──────────────────── */
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {currentSegment && (
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-white">{currentSegment.label}</h3>
                      <p className="text-sm text-gray-500 mt-1">{currentSegment.description}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    {currentCategories.map((cat) => (
                      <div key={cat.id}>
                        {/* Category row */}
                        <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.1] transition-colors">
                          <div className="flex-1 min-w-0">
                            <span className="text-sm font-semibold text-white">
                              {cat.label}
                            </span>
                            {cat.hint && (
                              <span className="text-[11px] text-gray-500 ml-2 hidden md:inline">
                                — {cat.hint}
                              </span>
                            )}
                          </div>
                          <div className="flex-shrink-0">
                            <FaultToggle
                              value={faults[cat.id] || "none"}
                              onChange={(val) => setFault(cat.id, val)}
                            />
                          </div>
                        </div>

                        {/* Sub-fields */}
                        {cat.subFields && (
                          <div className="ml-4 mt-1 space-y-1">
                            {cat.subFields.map((sf) => {
                              const key = `${cat.id}.${sf.id}`;
                              return (
                                <div
                                  key={key}
                                  className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors"
                                >
                                  <span className="text-sm text-gray-400">
                                    — {sf.label}
                                  </span>
                                  <div className="flex-shrink-0">
                                    <FaultToggle
                                      value={faults[key] || "none"}
                                      onChange={(val) => setFault(key, val)}
                                    />
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Next tab button */}
                  <div className="mt-6 flex justify-end">
                    {activeTab !== "debrief" && (
                      <button
                        type="button"
                        onClick={() => {
                          const currentIdx = DL25_SEGMENTS.findIndex((s) => s.id === activeTab);
                          if (currentIdx < DL25_SEGMENTS.length - 1) {
                            setActiveTab(DL25_SEGMENTS[currentIdx + 1].id);
                          } else {
                            setActiveTab("debrief");
                          }
                        }}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white font-semibold rounded-xl transition-all"
                      >
                        Next: {activeTab === DL25_SEGMENTS[DL25_SEGMENTS.length - 1]?.id ? "Final Debrief" : DL25_SEGMENTS[DL25_SEGMENTS.findIndex((s) => s.id === activeTab) + 1]?.label}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Footer note ─────────────────────────────────── */}
          <p className="text-center text-xs text-gray-600 mt-10">
            This is a training aid and mock report generator. It is not an official
            DVSA document and should not be submitted as one. The DL25 is a
            trademark of the Driver and Vehicle Standards Agency.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
