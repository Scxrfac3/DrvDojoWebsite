/**
 * DL25 Mock Driving Test Report — category definitions.
 * Mirrors the official DVSA DL25 examiner sheet (33 assessment categories).
 *
 * Each category has an id (matching the DL25 numbering), a label, and an
 * optional list of sub-fields. When `subFields` is omitted the category is
 * graded as a single row. When present, each sub-field is graded individually.
 */

export type FaultType = "none" | "driver" | "serious" | "dangerous";

export interface DL25SubField {
  id: string;
  label: string;
}

export interface DL25Category {
  id: string;
  label: string;
  /** Optional helper shown beneath the label. */
  hint?: string;
  subFields?: DL25SubField[];
}

export const DL25_CATEGORIES: DL25Category[] = [
  {
    id: "1a",
    label: "1a. Eyesight test",
    hint: "Read a number plate from 20.5m (old style) / 20m (new style).",
  },
  {
    id: "1b",
    label: "1b. Highway Code / Safety questions",
    hint: "Tell me / Show me vehicle safety questions.",
  },
  { id: "2", label: "2. Controlled stop" },
  { id: "3", label: "3. Reverse / Left (reverse park)" },
  { id: "4", label: "4. Reverse park (road)" },
  { id: "5", label: "5. Reverse park (car park)" },
  { id: "6", label: "6. Reverse to the right" },
  { id: "7", label: "7. Turn in the road" },
  { id: "8", label: "8. Vehicle checks" },
  { id: "9", label: "9. Vehicle checks (Tell me)" },
  { id: "10", label: "10. Vehicle checks (Show me)" },
  { id: "11", label: "11. Precautions" },
  {
    id: "12",
    label: "12. Control",
    subFields: [
      { id: "accelerator", label: "Accelerator" },
      { id: "clutch", label: "Clutch" },
      { id: "gears", label: "Gears" },
      { id: "footbrake", label: "Footbrake" },
      { id: "parkingBrake", label: "Parking brake" },
      { id: "steering", label: "Steering" },
    ],
  },
  {
    id: "13",
    label: "13. Move off",
    subFields: [
      { id: "safety", label: "Safety" },
      { id: "control", label: "Control" },
    ],
  },
  {
    id: "14",
    label: "14. Use of mirrors — well before",
    subFields: [
      { id: "signalling", label: "Signalling" },
      { id: "changeDirection", label: "Change direction" },
      { id: "changeSpeed", label: "Change speed" },
    ],
  },
  { id: "15", label: "15. Give way" },
  { id: "16", label: "16. Reversing" },
  {
    id: "17",
    label: "17. Response to signs / signals",
    subFields: [
      { id: "trafficSigns", label: "Traffic signs" },
      { id: "roadMarkings", label: "Road markings" },
      { id: "trafficLights", label: "Traffic lights" },
      { id: "trafficControllers", label: "Traffic controllers" },
      { id: "otherRoadUsers", label: "Other road users" },
    ],
  },
  { id: "18", label: "18. Use of speed" },
  { id: "19", label: "19. Following distance" },
  { id: "20", label: "20. Maintain progress" },
  {
    id: "21",
    label: "21. Junctions",
    subFields: [
      { id: "approachSpeed", label: "Approach speed" },
      { id: "observation", label: "Observation" },
      { id: "turningRight", label: "Turning right" },
      { id: "turningLeft", label: "Turning left" },
      { id: "cuttingCorners", label: "Cutting corners" },
    ],
  },
  { id: "22a", label: "22a. Junctions — crossroads" },
  { id: "22b", label: "22b. Junctions — roundabouts" },
  {
    id: "22",
    label: "22. Judgement",
    subFields: [
      { id: "overtaking", label: "Overtaking" },
      { id: "meeting", label: "Meeting" },
      { id: "crossing", label: "Crossing" },
    ],
  },
  { id: "23", label: "23. Positioning" },
  { id: "24", label: "24. Pedestrian crossings" },
  { id: "25", label: "25. Position / normal stops" },
  { id: "26", label: "26. Awareness / planning" },
  { id: "27", label: "27. Ancillary controls" },
  { id: "28", label: "28. Eco-safe driving" },
];

export const WEATHER_CONDITIONS = [
  "Bright / dry",
  "Bright / wet",
  "Raining",
  "Showers",
  "Foggy / misty",
  "Dull / wet",
  "Dull / dry",
  "Snowing",
  "Icy",
  "Windy",
] as const;

export type WeatherCondition = (typeof WEATHER_CONDITIONS)[number];

/**
 * Logical segments for the tabbed "quiz" UX.
 * Each segment groups related DL25 categories so the instructor can work
 * through the test in a natural order without scrolling through 33 rows.
 */
export interface DL25Segment {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  categoryIds: string[];
}

export const DL25_SEGMENTS: DL25Segment[] = [
  {
    id: "pre-drive",
    label: "Pre-Drive & Checks",
    shortLabel: "Checks",
    description: "Eyesight, safety questions, vehicle checks & precautions",
    categoryIds: ["1a", "1b", "8", "9", "10", "11"],
  },
  {
    id: "manoeuvres",
    label: "Manoeuvres",
    shortLabel: "Manoeuvres",
    description: "Controlled stop, reverse park, turn in road & reversing",
    categoryIds: ["2", "3", "4", "5", "6", "7", "16"],
  },
  {
    id: "general-driving",
    label: "General Driving",
    shortLabel: "Driving",
    description: "Control, mirrors, junctions, judgement & positioning",
    categoryIds: [
      "12", "13", "14", "15", "17", "18", "19", "20",
      "21", "22a", "22b", "22", "23", "24", "25", "26", "27", "28",
    ],
  },
];

/** Helper: get categories belonging to a segment, preserving DL25_CATEGORIES order. */
export function getCategoriesForSegment(segmentId: string): DL25Category[] {
  const seg = DL25_SEGMENTS.find((s) => s.id === segmentId);
  if (!seg) return [];
  return DL25_CATEGORIES.filter((c) => seg.categoryIds.includes(c.id));
}
