import {
  DL25_CATEGORIES,
  type FaultType,
} from "../data/dl25Categories";
import { countDrivingFaults, countSeriousFaults, countDangerousFaults } from "./dl25Pdf";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DebriefInput {
  faults: Record<string, FaultType>;
  result: "Pass" | "Fail" | "None";
  candidateName: string;
  weather: string[];
  transmission: string;
}

interface FaultGroup {
  label: string;
  categoryIds: string[];
  driving: string[];
  serious: string[];
  dangerous: string[];
}

// ─── Fault grouping rules ────────────────────────────────────────────────────

/**
 * Groups related DL25 categories into thematic areas so the AI can produce
 * coherent, actionable feedback instead of listing every individual fault.
 */
function buildFaultGroups(faults: Record<string, FaultType>): FaultGroup[] {
  const groups: FaultGroup[] = [
    { label: "Mirror Use & Observation", categoryIds: ["14", "14.signalling", "14.changeDirection", "14.changeSpeed"], driving: [], serious: [], dangerous: [] },
    { label: "Junctions & Turning", categoryIds: ["21", "21.approachSpeed", "21.observation", "21.turningRight", "21.turningLeft", "21.cuttingCorners", "22a", "22b"], driving: [], serious: [], dangerous: [] },
    { label: "Vehicle Control", categoryIds: ["12", "12.accelerator", "12.clutch", "12.gears", "12.footbrake", "12.parkingBrake", "12.steering", "13", "13.safety", "13.control"], driving: [], serious: [], dangerous: [] },
    { label: "Signs, Signals & Road Markings", categoryIds: ["17", "17.trafficSigns", "17.roadMarkings", "17.trafficLights", "17.trafficControllers", "17.otherRoadUsers"], driving: [], serious: [], dangerous: [] },
    { label: "Judgement & Positioning", categoryIds: ["22", "22.overtaking", "22.meeting", "22.crossing", "23", "25"], driving: [], serious: [], dangerous: [] },
    { label: "Speed & Progress", categoryIds: ["18", "19", "20"], driving: [], serious: [], dangerous: [] },
    { label: "Manoeuvres & Reversing", categoryIds: ["2", "3", "4", "5", "6", "7", "16"], driving: [], serious: [], dangerous: [] },
    { label: "Pedestrian Crossings & Awareness", categoryIds: ["15", "24", "26"], driving: [], serious: [], dangerous: [] },
    { label: "Vehicle Checks & Safety", categoryIds: ["1a", "1b", "8", "9", "10", "11"], driving: [], serious: [], dangerous: [] },
    { label: "Ancillary & Eco Driving", categoryIds: ["27", "28"], driving: [], serious: [], dangerous: [] },
  ];

  // Populate groups from actual faults
  for (const [key, faultType] of Object.entries(faults)) {
    if (faultType === "none") continue;
    for (const group of groups) {
      if (group.categoryIds.includes(key)) {
        if (faultType === "driver") group.driving.push(key);
        else if (faultType === "serious") group.serious.push(key);
        else if (faultType === "dangerous") group.dangerous.push(key);
        break;
      }
    }
  }

  // Only return groups that have faults
  return groups.filter(
    (g) => g.driving.length > 0 || g.serious.length > 0 || g.dangerous.length > 0,
  );
}

/**
 * Get a human-readable label for a fault key (e.g. "14.changeDirection" -> "Mirrors - Change direction").
 */
function getFaultLabel(key: string): string {
  // Check sub-fields first
  for (const cat of DL25_CATEGORIES) {
    if (cat.subFields) {
      for (const sf of cat.subFields) {
        if (`${cat.id}.${sf.id}` === key) {
          return `${cat.label.split(".")[0] || cat.label} - ${sf.label}`;
        }
      }
    }
    if (cat.id === key) return cat.label;
  }
  return key;
}

// ─── Template-based generation ───────────────────────────────────────────────

/**
 * CRITICAL: Output strictly in plain text. Do not use any emojis, unicode
 * drawing characters, or special symbols. Use standard ASCII characters only:
 * asterisks (*) for bullet points, equals signs (===) for section dividers,
 * and standard capitalized text for headings.
 *
 * Generate a professional, actionable debrief summary from the DL25 fault data.
 *
 * Uses a rule-based expert system - no external API calls, zero cost,
 * instant results. The output reads like a human instructor's notes.
 */
export function generateAIDebrief(input: DebriefInput): string {
  const { faults, result, candidateName, weather, transmission } = input;
  const driving = countDrivingFaults(faults);
  const serious = countSeriousFaults(faults);
  const dangerous = countDangerousFaults(faults);
  const totalFaults = driving + serious + dangerous;

  const groups = buildFaultGroups(faults);
  const hasSeriousOrDangerous = serious > 0 || dangerous > 0;
  const name = candidateName?.trim() || "The candidate";

  const lines: string[] = [];

  // ── 1. Overall Assessment ──────────────────────────────────────────────────
  lines.push("=== OVERALL ASSESSMENT ===");
  lines.push("");

  if (totalFaults === 0) {
    lines.push(
      `${name} delivered a flawless drive with zero recorded faults across all 33 DVSA assessment categories.`,
    );
    lines.push("This is an exceptional standard of driving.");
  } else if (result === "Pass" || (!hasSeriousOrDangerous && driving <= 5)) {
    lines.push(
      `${name} demonstrated a competent standard of driving with ${driving} driving fault${driving !== 1 ? "s" : ""} recorded.`,
    );
    if (serious > 0 || dangerous > 0) {
      lines.push(
        `However, ${serious} serious and ${dangerous} dangerous fault${serious + dangerous !== 1 ? "s were" : " was"} noted - these must be addressed before attempting the official DVSA practical test.`,
      );
    } else {
      lines.push(
        "The overall control, awareness, and decision-making were at a level consistent with the DVSA driving test standard.",
      );
    }
  } else if (hasSeriousOrDangerous) {
    lines.push(
      `${name} recorded ${driving} driving fault${driving !== 1 ? "s" : ""}, ${serious} serious fault${serious !== 1 ? "s" : ""}, and ${dangerous} dangerous fault${dangerous !== 1 ? "s" : ""}.`,
    );
    lines.push(
      "The presence of serious and/or dangerous faults indicates areas requiring focused remedial training before a test attempt.",
    );
  } else {
    lines.push(
      `${name} accumulated ${driving} driving fault${driving !== 1 ? "s" : ""} across multiple categories.`,
    );
    lines.push(
      "While no serious or dangerous faults were recorded, the volume of driving faults suggests the need for consolidation before test readiness.",
    );
  }

  // ── 2. Weather / conditions note ───────────────────────────────────────────
  if (weather.length > 0) {
    const adverseWeather = weather.filter((w) =>
      ["Raining", "Showers", "Foggy / misty", "Snowing", "Icy", "Windy"].includes(w),
    );
    if (adverseWeather.length > 0) {
      lines.push("");
      lines.push(
        `[!] Weather note: The test was conducted in ${adverseWeather.join(", ").toLowerCase()} conditions. Some faults may be attributable to reduced visibility or slippery surfaces - however, the DVSA expects candidates to adjust their driving accordingly.`,
      );
    }
  }

  // ── 3. Key Findings by Area ────────────────────────────────────────────────
  if (groups.length > 0) {
    lines.push("");
    lines.push("=== KEY FINDINGS BY AREA ===");
    lines.push("");

    for (const group of groups) {
      const allFaults = [...group.driving, ...group.serious, ...group.dangerous];
      if (allFaults.length === 0) continue;

      const hasSerious = group.serious.length > 0;
      const hasDangerous = group.dangerous.length > 0;
      const severityTag = hasDangerous ? "[DANGER]" : hasSerious ? "[SERIOUS]" : "[DRIVING]";

      lines.push(`${severityTag} ${group.label}:`);

      // List specific faults
      const listFaults = (keys: string[], prefix: string) => {
        if (keys.length === 0) return;
        const labels = keys.map(getFaultLabel);
        lines.push(`   ${prefix} ${labels.join(", ")}`);
      };

      listFaults(group.dangerous, "* DANGEROUS -");
      listFaults(group.serious, "* SERIOUS -");
      if (group.driving.length > 0 && group.driving.length <= 3) {
        listFaults(group.driving, "* Driving fault -");
      } else if (group.driving.length > 3) {
        lines.push(`   * ${group.driving.length} driving faults across this area`);
      }

      lines.push("");
    }
  }

  // ── 4. Prioritised Recommendations ─────────────────────────────────────────
  lines.push("=== PRIORITISED RECOMMENDATIONS ===");
  lines.push("");

  let recNum = 1;

  // Dangerous faults first
  const dangerousGroups = groups.filter((g) => g.dangerous.length > 0);
  for (const group of dangerousGroups) {
    lines.push(
      `${recNum}. URGENT - ${group.label}: Address dangerous fault${group.dangerous.length > 1 ? "s" : ""} immediately. These represent a direct risk to road safety. Book at least 2-3 focused lessons on ${group.label.toLowerCase()} before any mock or real test.`,
    );
    recNum++;
  }

  // Serious faults
  const seriousGroups = groups.filter((g) => g.serious.length > 0 && g.dangerous.length === 0);
  for (const group of seriousGroups) {
    lines.push(
      `${recNum}. HIGH PRIORITY - ${group.label}: The serious fault${group.serious.length > 1 ? "s" : ""} recorded indicate${group.serious.length === 1 ? "s" : ""} a significant gap in competence. Dedicate at least 1-2 lessons to targeted practice in this area.`,
    );
    recNum++;
  }

  // Driving fault patterns
  const drivingGroups = groups.filter(
    (g) => g.driving.length >= 2 && g.serious.length === 0 && g.dangerous.length === 0,
  );
  for (const group of drivingGroups.slice(0, 3)) {
    lines.push(
      `${recNum}. ${group.label}: ${group.driving.length} driving fault${group.driving.length > 1 ? "s" : ""} recorded. While not test-critical individually, the pattern suggests this is a weaker area. Incorporate focused drills into regular lessons.`,
    );
    recNum++;
  }

  // If no specific recommendations
  if (recNum === 1 && totalFaults === 0) {
    lines.push(
      "1. Maintain current standard - continue with regular lessons to keep skills sharp ahead of the official test.",
    );
    lines.push(
      "2. Consider booking a mock test closer to the real test date to simulate exam conditions.",
    );
  } else if (recNum === 1) {
    lines.push(
      "1. Review the driving faults noted above with your instructor and practise the specific manoeuvres or scenarios where faults occurred.",
    );
  }

  // ── 5. Suggested Follow-Up Actions ─────────────────────────────────────────
  lines.push("");
  lines.push("=== SUGGESTED FOLLOW-UP ACTIONS ===");
  lines.push("");

  const actions: string[] = [];

  if (hasSeriousOrDangerous) {
    actions.push(
      `* Book a remedial lesson package focusing on ${groups.filter((g) => g.serious.length > 0 || g.dangerous.length > 0).map((g) => g.label.toLowerCase()).join(" and ")}.`,
    );
    actions.push(
      "* Schedule a follow-up mock test in 2-4 weeks to reassess progress before booking the DVSA practical test.",
    );
  } else if (driving > 5) {
    actions.push(
      "* Consolidate learning with 2-3 additional lessons targeting the areas with multiple driving faults.",
    );
    actions.push(
      "* Consider a follow-up mock test in 1-2 weeks to confirm readiness.",
    );
  } else if (driving > 0) {
    actions.push(
      "* Address the specific driving faults in your next 1-2 lessons.",
    );
    actions.push(
      "* You are on track - continue with your current lesson plan and consider a mock test 1 week before your DVSA test date.",
    );
  } else {
    actions.push(
      "* Book your DVSA practical test with confidence - your driving is at test standard.",
    );
    actions.push(
      "* Schedule one refresher lesson 2-3 days before the test to stay sharp.",
    );
  }

  // Transmission-specific advice
  if (transmission === "Manual") {
    actions.push(
      "* Manual transmission note: Continue practising clutch control, hill starts, and smooth gear changes - these are common fault areas on test day.",
    );
  }

  for (const action of actions) {
    lines.push(action);
  }

  // ── 6. Closing ─────────────────────────────────────────────────────────────
  lines.push("");
  lines.push("---");
  lines.push(
    `This debrief was auto-generated by the Drive Dojo DL25 Report system based on the fault data recorded during the mock test. It is intended as a training aid to guide further instruction.`,
  );

  return lines.join("\n");
}