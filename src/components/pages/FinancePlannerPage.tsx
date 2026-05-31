import { Suspense, lazy, useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/lib/auth';
import supabase from '@/lib/supabase';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { 
  ArrowRight, Check, Sparkles, Shield, Zap, BarChart3, PieChart, Calendar,
  Download, Clock, Star, Users, BadgeCheck, ArrowUpRight, Calculator, FileText,
  TrendingUp, Receipt, Target, Car, Loader2, CreditCard, ChevronDown, MousePointerClick,
  DollarSign, Landmark, Percent, Wallet, Building2, Globe,
} from 'lucide-react';

// Lazy load the finance planner app
const FinanceApp = lazy(() => import('@/adi-finance-planner/App').then(m => ({ default: m.default })));

// ─── COMPONENTS ─────────────────────────────────────────────

// Floating orb background decoration
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="orb orb-1" style={{ top: '10%', left: '5%' }} />
      <div className="orb orb-2" style={{ top: '50%', right: '10%' }} />
      <div className="orb orb-3" style={{ bottom: '20%', left: '20%' }} />
    </div>
  );
}

// Glass stat card component
function GlassStatCard({ icon: Icon, value, label, trend, delay = 0 }: { 
  icon: any; value: string; label: string; trend?: string; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: '-50px' }}
      className="glass-card p-6 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#ffd700]/10 to-transparent rounded-bl-full" />
      <div className="relative z-10">
        <Icon className="w-5 h-5 text-[#ffd700]/60 mb-3" />
        <p className="text-2xl sm:text-3xl font-bold text-white tabular-nums">{value}</p>
        <p className="text-gray-400 text-sm mt-1">{label}</p>
        {trend && <p className="text-[#4ade80] text-xs mt-2 flex items-center gap-1"><ArrowUpRight className="w-3 h-3" />{trend}</p>}
      </div>
    </motion.div>
  );
}

// Glass feature card
function GlassFeatureCard({ icon: Icon, title, desc, index = 0 }: { icon: any; title: string; desc: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: '-50px' }}
      className="glass group glass-hover rounded-2xl p-6 cursor-default relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-11 h-11 rounded-xl bg-[#ffd700]/10 flex items-center justify-center mb-4 group-hover:bg-[#ffd700]/20 transition-colors">
          <Icon className="w-5 h-5 text-[#ffd700]" />
        </div>
        <h3 className="text-white font-semibold text-base mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

// Magnetic button component
function MagneticButton({ children, className, onClick, disabled }: {
  children: React.ReactNode; className?: string; onClick?: () => void; disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </motion.button>
  );
}

// Scroll progress bar
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ffd700] via-[#fbbf24] to-[#ff6b35] origin-left z-50"
      style={{ scaleX }}
    />
  );
}

interface FinancePlannerPageProps {
  price?: number;
}

export default function FinancePlannerPage({ price = 29 }: FinancePlannerPageProps) {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [hasAccess, setHasAccess] = useState(false);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  // Check access
  useEffect(() => {
    const checkAccess = async () => {
      if (!user) { setCheckingAccess(false); return; }
      try {
        const { data: profile } = await supabase
          .from('profiles')
          .select('has_finance_access, subscription_status')
          .eq('id', user.id)
          .single();
        const hasIt = profile?.has_finance_access || profile?.subscription_status === 'trialing' || profile?.subscription_status === 'active';
        setHasAccess(!!hasIt);
      } catch { /* ignore */ }
      finally { setCheckingAccess(false); }
    };
    checkAccess();
  }, [user]);

  const handleCTA = useCallback(() => {
    if (!user) { navigate('/login?redirect=/finance-planner'); return; }
    navigate('/subscribe');
  }, [user, navigate]);

  // Loading
  if (authLoading || checkingAccess) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center gap-4">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-2 border-[#ffd700]/20 border-t-[#ffd700] animate-spin" />
          <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-[#ffd700]" />
        </div>
        <p className="text-gray-500 text-sm animate-pulse">Loading your dashboard...</p>
      </div>
    );
  }

  // Authenticated with access — render the app
  if (user && hasAccess) {
    return (
      <Suspense fallback={
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
          <Loader2 className="w-8 h-8 text-[#ffd700] animate-spin" />
        </div>
      }>
        <FinanceApp />
      </Suspense>
    );
  }

  // ═══════════════════════════════════════════════════════════
  // LANDING PAGE
  // ═══════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-[#ffd700]/30">
      <ScrollProgress />
      <FloatingOrbs />

      {/* ─── HERO ──────────────────────────────────────────── */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 pb-16"
      >
        {/* Background grid */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-[#ffd700]" />
            <span className="text-[#ffd700] text-sm font-semibold tracking-wide">The UK's #1 Finance Tool for ADIs</span>
            <div className="glass-dot" />
            <span className="text-gray-400 text-xs flex items-center gap-1"><Star className="w-3 h-3 fill-[#ffd700] text-[#ffd700]" /> 4.9</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] mb-6"
          >
            <span className="text-white">Your Driving School</span>
            <br />
            <span className="text-gold-gradient">Deserves Better </span>
            <span className="text-white">Numbers</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            Most driving instructors overpay tax by <span className="text-[#ffd700] font-semibold">£2,000–£5,000/year</span> — 
            simply because they don't track properly. Our intelligent finance tracker automates HMRC deductions, forecasts your tax bill, 
            and shows exactly where every pound goes.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="text-sm text-gray-500 mb-10"
          >
            Join <span className="text-white font-medium">200+ ADIs</span> saving an average of{" "}
            <span className="text-[#4ade80] font-semibold">£2,847/year</span> in unnecessary tax
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <MagneticButton
              onClick={handleCTA}
              className="btn-glow group relative px-10 py-5 bg-gradient-to-r from-[#ffd700] to-[#fbbf24] text-[#0a0a0a] font-bold text-lg rounded-2xl glow-gold flex items-center gap-3 transition-all duration-300"
            >
              <Zap className="w-5 h-5" />
              Start Your Free 7-Day Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>

            <button
              onClick={() => navigate('/login?redirect=/finance-planner')}
              className="glass px-10 py-5 text-white font-semibold text-lg rounded-2xl glass-hover transition-all duration-300"
            >
              I Already Have Access
            </button>
          </motion.div>

          {/* Trust row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500"
          >
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-blue-400" /> Bank-Level Security</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#4ade80]" /> HMRC Compliant</span>
            <span className="w-1 h-1 bg-gray-700 rounded-full" />
            <span className="flex items-center gap-1.5"><CreditCard className="w-4 h-4 text-gray-400" /> Powered by Stripe</span>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown className="w-6 h-6 text-gray-600" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ─── STATS STRIP ───────────────────────────────────── */}
      <section className="relative py-16 border-y border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '200+', label: 'Active Instructors' },
              { icon: DollarSign, value: '£2,847', label: 'Avg. Tax Saved/Year', trend: 'per instructor' },
              { icon: BarChart3, value: '£5M+', label: 'Revenue Tracked' },
              { icon: Star, value: '4.9/5', label: 'User Rating', trend: '200+ reviews' },
            ].map((s, i) => (
              <GlassStatCard key={i} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROBLEM / SOLUTION ────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block glass rounded-full px-4 py-1.5 text-[#ffd700] text-xs font-semibold tracking-wider mb-4">
              THE PROBLEM
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              You're Overpaying Tax Right Now
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              And you probably don't even know how much. Let's fix that.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Without */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <span className="text-red-400 text-lg">✕</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-300">Without ADI Finance</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Forgetting cash lessons — losing hundreds a month',
                    'Missing mileage deductions (45p/mile adds up fast)',
                    'No idea what your hourly profit actually is',
                    'Last-minute tax return panic every January',
                    'Can\'t prove expenses when HMRC asks',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-400 text-[10px]">✕</span>
                      </span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* With */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass-highlight rounded-3xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd700]/5 rounded-full blur-[60px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#4ade80]/15 flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#4ade80]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#4ade80]">With ADI Finance</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    'Every lesson & expense tracked in seconds',
                    'Real-time HMRC mileage at 45p/25p rates',
                    'Live profit dashboard — know your numbers cold',
                    'Tax-ready reports generated in one click',
                    'HMRC-compliant records that protect you',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ─────────────────────────────────── */}
      <section className="relative py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block glass rounded-full px-4 py-1.5 text-[#ffd700] text-xs font-semibold tracking-wider mb-4">
              <Zap className="w-3 h-3 inline mr-1" />
              POWERFUL FEATURES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Built for the Road,<br />Not the Office
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Log lessons between pickups. Snap receipts at the pump. Your finances, on your terms.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Car, title: 'Lesson Logger', desc: 'Hourly, block, intensive & Pass Plus — all auto-calculated at your rates' },
              { icon: Receipt, title: 'Expense Tracker', desc: 'Snap receipts. Categorise everything. Business-use % for dual-purpose items' },
              { icon: Calculator, title: 'Mileage Calculator', desc: 'Enter odometer readings. We apply 45p/25p HMRC rates in real-time' },
              { icon: PieChart, title: 'Profit Dashboard', desc: 'Real-time P&L with monthly trends, YOY comparisons & projections' },
              { icon: FileText, title: 'Tax-Ready Reports', desc: 'Generate HMRC-compliant reports for calendar or UK tax year in 1 click' },
              { icon: Target, title: 'Savings Goals', desc: 'Set targets for a new car, franchise fee, or holiday — track automatically' },
              { icon: Download, title: 'Data Export', desc: 'CSV export for your accountant. Your data, your rules, no lock-in' },
              { icon: Shield, title: 'Enterprise Security', desc: 'Supabase RLS — you are the only person who can see your financial data' },
              { icon: Calendar, title: 'Dual Tax Years', desc: 'Switch between calendar year and UK tax year (Apr 6–Apr 5) instantly' },
            ].map((f, i) => (
              <GlassFeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ──────────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block glass rounded-full px-4 py-1.5 text-blue-400 text-xs font-semibold tracking-wider mb-4">
              <Users className="w-3 h-3 inline mr-1" />
              TRUSTED BY ADIs
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Users Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I saved £3,200 in tax last year just by tracking my mileage properly. The HMRC calc is spot on and my accountant was impressed.", name: "Sarah M.", role: "ADI, Manchester" },
              { quote: "Finally a tool built for driving instructors! I log lessons on my phone between pickups. Dead simple and it just works.", name: "James R.", role: "Franchise ADI, London" },
              { quote: "The tax year view saved me hours of spreadsheet hell. My accountant actually complimented my records for the first time ever.", name: "Priya K.", role: "Independent ADI, Birmingham" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 flex flex-col h-full"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-[#ffd700] text-[#ffd700]" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1 italic">"{t.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DASHBOARD PREVIEW ─────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Dashboard, <span className="text-gold-gradient">Reimagined</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Clean. Powerful. Built to give you clarity in seconds.
            </p>
          </motion.div>

          {/* Mock dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl"
          >
            {/* Titlebar */}
            <div className="flex items-center gap-3 px-6 py-4 bg-black/30 border-b border-white/[0.04]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-gray-600 text-xs ml-3 font-mono">ADI Finance — Dashboard</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
              {[
                { label: 'Monthly Revenue', value: '£4,280', change: '+12%', positive: true },
                { label: 'Est. Tax Due', value: '£856', change: 'Q1', positive: false },
                { label: 'Deductible Expenses', value: '£1,340', change: '+8%', positive: true },
                { label: 'Net Profit', value: '£3,424', change: '+15%', positive: true },
              ].map((s, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/[0.04] rounded-2xl p-5">
                  <p className="text-gray-600 text-[11px] uppercase tracking-wider mb-1">{s.label}</p>
                  <p className="text-white text-2xl font-bold tracking-tight">{s.value}</p>
                  <p className={`text-xs mt-1.5 ${s.positive ? 'text-[#4ade80]' : 'text-[#ffd700]'}`}>{s.change}</p>
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="px-6 pb-6">
              <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-5">
                <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-3">Revenue · Last 12 Months</p>
                <div className="h-40 flex items-end gap-1.5">
                  {[45, 68, 52, 85, 60, 92, 75, 88, 65, 98, 80, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ delay: 0.3 + i * 0.04, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex-1 bg-gradient-to-t from-[#ffd700]/30 to-[#ffd700] rounded-sm origin-bottom"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-3 text-gray-600 text-[10px]">
                  {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING ───────────────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block glass rounded-full px-4 py-1.5 text-[#4ade80] text-xs font-semibold tracking-wider mb-4">
              <BadgeCheck className="w-3 h-3 inline mr-1" />
              SIMPLE PRICING
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              One Payment. Lifetime Access.
            </h2>
            <p className="text-gray-400">
              No subscriptions. No per-lesson fees. No hidden costs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
            className="relative glass-highlight rounded-3xl p-8 sm:p-10 text-center glow-gold"
          >
            {/* Best value */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="px-4 py-1.5 bg-[#4ade80] text-black text-xs font-bold rounded-full tracking-wider">
                BEST VALUE
              </span>
            </div>

            <div className="mt-4 mb-3">
              <span className="text-gray-500 line-through text-lg">£49</span>
              <span className="ml-2 text-[#4ade80] text-sm font-semibold bg-green-500/10 px-2 py-0.5 rounded-full">40% OFF</span>
            </div>

            <div className="flex items-baseline justify-center gap-1.5 mb-1">
              <span className="text-gray-500 text-2xl">£</span>
              <span className="text-6xl sm:text-7xl font-black text-gold-gradient">{price}</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">one-time payment · lifetime access · all future updates</p>

            <ul className="space-y-3 mb-8 text-left max-w-xs mx-auto">
              {[
                'Unlimited lessons, expenses & mileage',
                'Real-time HMRC mileage calculations',
                'Profit & Loss dashboard with charts',
                'Calendar & UK Tax Year views',
                'Goal tracking & savings targets',
                'One-click CSV data export',
                'All future features & updates',
                '30-day money-back guarantee',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                  <Check className="w-4 h-4 text-[#4ade80] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <MagneticButton
              onClick={handleCTA}
              className="btn-glow w-full px-10 py-5 bg-gradient-to-r from-[#ffd700] to-[#fbbf24] text-[#0a0a0a] font-bold text-lg rounded-2xl glow-gold flex items-center justify-center gap-3 transition-all duration-300"
            >
              Start 7-Day Free Trial
              <ArrowRight className="w-5 h-5" />
            </MagneticButton>

            <div className="mt-6 flex items-center justify-center gap-5 text-[11px] text-gray-600">
              <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> SSL Encrypted</span>
              <span className="flex items-center gap-1"><CreditCard className="w-3 h-3" /> Stripe</span>
              <span className="flex items-center gap-1"><BadgeCheck className="w-3 h-3" /> 30-Day Refund</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────── */}
      <section className="relative py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-3">
            {[
              { q: 'Is this HMRC compliant?', a: 'Yes. Our mileage rates use official HMRC figures (45p for first 10,000 miles, 25p thereafter). All calculations follow HMRC guidelines for self-employed driving instructors. Your accountant will thank you.' },
              { q: 'Can I use it on my phone?', a: 'Absolutely. ADI Finance is fully responsive — log lessons, snap receipts, and track mileage right from your phone between pickups. No app download needed.' },
              { q: 'What happens after the free trial?', a: 'You keep full access. The trial lets you use everything for 7 days. After that, it\'s a one-time payment of £29 for lifetime access. No auto-charge, no subscription.' },
              { q: 'What if I\'m not satisfied?', a: 'We offer a 30-day no-questions-asked money-back guarantee. If ADI Finance doesn\'t save you money, we don\'t want your money. Simple as that.' },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-white font-medium text-sm">{faq.q}</span>
                  <motion.div animate={{ rotate: activeFaq === i ? 45 : 0 }} transition={{ duration: 0.2 }}>
                    <span className="text-gray-500 text-xl leading-none">+</span>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────────────── */}
      <section className="relative py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="glass rounded-3xl p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffd700]/5 rounded-full blur-[80px]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Stop Guessing. <span className="text-gold-gradient">Start Growing.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                Your first 7 days are free. See the difference proper tracking makes — risk free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagneticButton
                  onClick={handleCTA}
                  className="btn-glow px-10 py-5 bg-gradient-to-r from-[#ffd700] to-[#fbbf24] text-[#0a0a0a] font-bold text-lg rounded-2xl glow-gold flex items-center gap-3"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
                {!user && (
                  <button
                    onClick={() => navigate('/login?redirect=/finance-planner')}
                    className="glass px-10 py-5 text-white font-semibold rounded-2xl glass-hover"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── FOOTER ────────────────────────────────────────── */}
      <footer className="border-t border-white/[0.04] py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
          <p>© 2024 Drive Dojo. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/terms" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="/terms" className="hover:text-gray-400 transition-colors">Privacy</a>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" /> Secured by Stripe
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
