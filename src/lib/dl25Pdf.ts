import { jsPDF } from "jspdf";
import {
  DL25_CATEGORIES,
  type FaultType,
} from "../data/dl25Categories";

export interface DL25ReportData {
  testDate: string;
  testTime: string;
  applicationRef: string;
  vehicleReg: string;
  candidateName: string;
  drivingLicenceNo: string;
  // declarations
  insurance: boolean;
  residency: boolean;
  // weather
  weather: string[];
  // vehicle
  vehicleLength: string;
  vehicleWidth: string;
  vehicleHeight: string;
  transmission: "Manual" | "Auto" | "";
  // faults: keyed by `${categoryId}` or `${categoryId}.${subFieldId}`
  faults: Record<string, FaultType>;
  // outcome
  result: "Pass" | "Fail" | "None";
  instructorName: string;
  // instructor debrief
  debriefNotes: string;
}

// ── Colour palette ───────────────────────────────────────────────────────────
const C = {
  black: [8, 12, 10] as [number, number, number],
  ink: [20, 30, 25] as [number, number, number],
  emerald: [16, 185, 129] as [number, number, number],
  emeraldLight: [167, 243, 208] as [number, number, number],
  white: [255, 255, 255] as [number, number, number],
  rowZebra: [245, 250, 248] as [number, number, number],
  rowPlain: [255, 255, 255] as [number, number, number],
  // fault colours
  amberBg: [253, 224, 71] as [number, number, number],     // driving fault
  amberText: [120, 53, 15] as [number, number, number],
  redBg: [239, 68, 68] as [number, number, number],         // serious
  redDarkBg: [185, 28, 28] as [number, number, number],     // dangerous
  redText: [255, 255, 255] as [number, number, number],
  passBg: [16, 185, 129] as [number, number, number],
  failBg: [220, 38, 38] as [number, number, number],
  noneBg: [75, 85, 99] as [number, number, number],
  muted: [120, 130, 125] as [number, number, number],
  panelBg: [248, 252, 250] as [number, number, number],
};

/** Count driving (minor) faults across all entries. */
export function countDrivingFaults(faults: Record<string, FaultType>): number {
  return Object.values(faults).filter((f) => f === "driver").length;
}

export function countSeriousFaults(faults: Record<string, FaultType>): number {
  return Object.values(faults).filter((f) => f === "serious").length;
}

export function countDangerousFaults(faults: Record<string, FaultType>): number {
  return Object.values(faults).filter((f) => f === "dangerous").length;
}

/**
 * Fetch the Drive Dojo logo and return a data URL suitable for jsPDF.
 * Falls back gracefully if the image cannot be loaded.
 */
async function loadLogoDataUrl(): Promise<string | null> {
  try {
    const response = await fetch("/images/certifications/DDojo.png");
    if (!response.ok) return null;
    const blob = await response.blob();
    return await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = () => resolve("");
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

/**
 * Generate a branded DL25-style PDF report.
 *
 * Layout mirrors the official DVSA DL25 examiner sheet:
 *  • Premium dark header with logo + massive result badge (top-right)
 *  • Compact test-details / declarations / weather strip
 *  • Two-column fault grid with traffic-light colour coding
 *  • Instructor debrief notes box at the bottom
 *
 * @returns the jsPDF instance so callers can save or email it.
 */
export async function generateDL25PDF(data: DL25ReportData): Promise<jsPDF> {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();   // 210
  const pageHeight = doc.internal.pageSize.getHeight(); // 297
  const margin = 8;
  let y = margin;

  // ── Pre-load logo ──────────────────────────────────────────────────────────
  const logoDataUrl = await loadLogoDataUrl();

  // ═══════════════════════════════════════════════════════════════════════════
  //  PREMIUM HEADER BAR  (dark, with logo + result badge)
  // ═══════════════════════════════════════════════════════════════════════════
  const headerH = 30;
  doc.setFillColor(...C.black);
  doc.rect(0, 0, pageWidth, headerH, "F");

  // emerald accent line under header
  doc.setFillColor(...C.emerald);
  doc.rect(0, headerH, pageWidth, 1.5, "F");

  // Logo (left side)
  if (logoDataUrl) {
    try {
      doc.addImage(logoDataUrl, "PNG", margin, 5, 34, 20);
    } catch {
      /* ignore */
    }
  }
  // Fallback text logo
  if (!logoDataUrl) {
    doc.setTextColor(...C.white);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("DRIVE DOJO", margin, 16);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(...C.emeraldLight);
    doc.text("Driving School", margin, 21);
  }

  // Subtitle
  doc.setTextColor(...C.emeraldLight);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.text("Mock Driving Test Report  ·  DL25 Examiner Sheet (Mock)", margin, 27);

  // ── Massive result badge (top-right) ───────────────────────────────────────
  const badgeW = 42;
  const badgeH = 20;
  const badgeX = pageWidth - margin - badgeW;
  const badgeY = 5;
  const badgeColor =
    data.result === "Pass" ? C.passBg : data.result === "Fail" ? C.failBg : C.noneBg;

  // badge shadow
  doc.setFillColor(0, 0, 0);
  doc.roundedRect(badgeX + 0.5, badgeY + 0.5, badgeW, badgeH, 3, 3, "F");
  // badge body
  doc.setFillColor(...badgeColor);
  doc.roundedRect(badgeX, badgeY, badgeW, badgeH, 3, 3, "F");

  doc.setTextColor(...C.white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7);
  doc.text("RESULT", badgeX + badgeW / 2, badgeY + 6, { align: "center" });
  doc.setFontSize(16);
  doc.text(
    data.result === "None" ? "—" : data.result.toUpperCase(),
    badgeX + badgeW / 2,
    badgeY + 15,
    { align: "center" },
  );

  // generated timestamp (right, below badge)
  doc.setTextColor(120, 130, 125);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(6.5);
  doc.text(
    `Generated ${new Date().toLocaleString("en-GB")}`,
    pageWidth - margin,
    badgeY + badgeH + 4,
    { align: "right" },
  );

  y = headerH + 5;

  // ═══════════════════════════════════════════════════════════════════════════
  //  TEST DETAILS STRIP
  // ═══════════════════════════════════════════════════════════════════════════
  const detailsH = 16;
  doc.setFillColor(...C.panelBg);
  doc.setDrawColor(...C.emerald);
  doc.setLineWidth(0.2);
  doc.roundedRect(margin, y, pageWidth - margin * 2, detailsH, 1.5, 1.5, "FD");

  doc.setTextColor(...C.ink);
  doc.setFontSize(6.5);
  const colW = (pageWidth - margin * 2) / 4;
  const details = [
    ["Date", data.testDate || "—"],
    ["Time", data.testTime || "—"],
    ["App Ref", data.applicationRef || "—"],
    ["Vehicle Reg", data.vehicleReg || "—"],
    ["Candidate", data.candidateName || "—"],
    ["Licence No.", data.drivingLicenceNo || "—"],
    ["Instructor", data.instructorName || "—"],
    ["Transmission", data.transmission || "—"],
  ];
  details.forEach((row, i) => {
    const col = i % 4;
    const rowIdx = Math.floor(i / 4);
    const x = margin + 2 + col * colW;
    const yy = y + 5 + rowIdx * 5.5;
    doc.setFont("helvetica", "bold");
    doc.text(`${row[0]}:`, x, yy);
    doc.setFont("helvetica", "normal");
    doc.text(String(row[1]).slice(0, 24), x + 16, yy);
  });
  y += detailsH + 2;

  // ── Declarations + Weather + Vehicle (single compact strip) ────────────────
  const stripH = 14;
  doc.setFillColor(...C.panelBg);
  doc.roundedRect(margin, y, pageWidth - margin * 2, stripH, 1.5, 1.5, "FD");
  doc.setFontSize(6.5);
  doc.setTextColor(...C.ink);

  doc.setFont("helvetica", "bold");
  doc.text("Declarations:", margin + 2, y + 5);
  doc.setFont("helvetica", "normal");
  doc.text(
    `Insurance ${data.insurance ? "Yes" : "No"}   ·   UK Residency ≥185d ${data.residency ? "Yes" : "No"}`,
    margin + 22,
    y + 5,
  );

  doc.setFont("helvetica", "bold");
  doc.text("Weather:", margin + 2, y + 10);
  doc.setFont("helvetica", "normal");
  const weatherStr = data.weather.length ? data.weather.join(", ") : "—";
  doc.text(weatherStr.slice(0, 80), margin + 18, y + 10);

  if (data.vehicleLength || data.vehicleWidth || data.vehicleHeight) {
    doc.setFont("helvetica", "bold");
    doc.text("Vehicle:", pageWidth - margin - 60, y + 10);
    doc.setFont("helvetica", "normal");
    doc.text(
      `L ${data.vehicleLength || "—"}  W ${data.vehicleWidth || "—"}  H ${data.vehicleHeight || "—"} m`,
      pageWidth - margin - 48,
      y + 10,
    );
  }
  y += stripH + 3;

  // ═══════════════════════════════════════════════════════════════════════════
  //  TWO-COLUMN FAULT GRID  (mirrors the real DL25 sheet)
  // ═══════════════════════════════════════════════════════════════════════════

  // Build a flat list of rows: { label, key, indent }
  interface GridRow {
    label: string;
    key: string;
    indent: number;
  }
  const rows: GridRow[] = [];
  DL25_CATEGORIES.forEach((cat) => {
    rows.push({ label: cat.label, key: cat.id, indent: 0 });
    if (cat.subFields) {
      cat.subFields.forEach((sf) => {
        rows.push({ label: `— ${sf.label}`, key: `${cat.id}.${sf.id}`, indent: 1 });
      });
    }
  });

  // Split into two columns
  const midPoint = Math.ceil(rows.length / 2);
  const col1Rows = rows.slice(0, midPoint);
  const col2Rows = rows.slice(midPoint);

  const gridTop = y;
  const colGap = 4;
  const colWidth = (pageWidth - margin * 2 - colGap) / 2;
  const col1X = margin;
  const col2X = margin + colWidth + colGap;
  const rowH = 4.3;

  // Column header bars
  const drawColHeader = (x: number) => {
    doc.setFillColor(...C.black);
    doc.rect(x, gridTop, colWidth, 5, "F");
    doc.setTextColor(...C.white);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(6.5);
    doc.text("Category", x + 1.5, gridTop + 3.5);
    // fault column headers — use small coloured legend squares
    const fcW = 7;
    const fcStart = x + colWidth - fcW * 3 - 1;
    const sq = 2.2; // legend square size
    // Driving fault legend (amber square)
    doc.setFillColor(...C.amberBg);
    doc.rect(fcStart + (fcW - sq) / 2, gridTop + 1.4, sq, sq, "F");
    // Serious legend (red square)
    doc.setFillColor(...C.redBg);
    doc.rect(fcStart + fcW + (fcW - sq) / 2, gridTop + 1.4, sq, sq, "F");
    // Dangerous legend (dark red square)
    doc.setFillColor(...C.redDarkBg);
    doc.rect(fcStart + fcW * 2 + (fcW - sq) / 2, gridTop + 1.4, sq, sq, "F");
  };
  drawColHeader(col1X);
  drawColHeader(col2X);

  // Render a single fault row with colour-coded cells
  const drawFaultRow = (
    row: GridRow,
    x: number,
    rowY: number,
    idx: number,
  ) => {
    const zebra = idx % 2 === 0;
    doc.setFillColor(...(zebra ? C.rowZebra : C.rowPlain));
    doc.rect(x, rowY, colWidth, rowH, "F");

    // label
    doc.setTextColor(...C.ink);
    doc.setFont("helvetica", row.indent ? "normal" : "bold");
    doc.setFontSize(6);
    const indentPx = row.indent ? 3 : 1.5;
    doc.text(row.label.slice(0, 38), x + indentPx, rowY + 2.9);

    // fault cells — use filled rectangles instead of text for reliable rendering
    const fcW = 7;
    const fcStart = x + colWidth - fcW * 3 - 1;
    const fault = data.faults[row.key] || "none";
    const sqPad = 1.2;  // padding inside cell
    const sqH = rowH - sqPad * 2;

    const drawCell = (
      cx: number,
      active: boolean,
      bg: [number, number, number],
    ) => {
      if (active) {
        // filled coloured rectangle
        doc.setFillColor(...bg);
        doc.rect(cx + sqPad, rowY + sqPad, fcW - sqPad * 2, sqH, "F");
      } else {
        // empty outline
        doc.setDrawColor(200, 205, 200);
        doc.setLineWidth(0.15);
        doc.rect(cx + sqPad, rowY + sqPad, fcW - sqPad * 2, sqH, "S");
      }
    };

    drawCell(fcStart, fault === "driver", C.amberBg);
    drawCell(fcStart + fcW, fault === "serious", C.redBg);
    drawCell(fcStart + fcW * 2, fault === "dangerous", C.redDarkBg);
  };

  // Column 1
  col1Rows.forEach((row, i) => {
    drawFaultRow(row, col1X, gridTop + 5 + i * rowH, i);
  });
  // Column 2
  col2Rows.forEach((row, i) => {
    drawFaultRow(row, col2X, gridTop + 5 + i * rowH, i);
  });

  // grid border
  const gridH = 5 + Math.max(col1Rows.length, col2Rows.length) * rowH;
  doc.setDrawColor(200, 205, 200);
  doc.setLineWidth(0.2);
  doc.rect(col1X, gridTop, colWidth, gridH, "S");
  doc.rect(col2X, gridTop, colWidth, gridH, "S");

  y = gridTop + gridH + 4;

  // ═══════════════════════════════════════════════════════════════════════════
  //  FAULT TOTALS BAR
  // ═══════════════════════════════════════════════════════════════════════════
  const driving = countDrivingFaults(data.faults);
  const serious = countSeriousFaults(data.faults);
  const dangerous = countDangerousFaults(data.faults);

  const totalsH = 8;
  doc.setFillColor(...C.black);
  doc.roundedRect(margin, y, pageWidth - margin * 2, totalsH, 1.5, 1.5, "F");
  doc.setTextColor(...C.white);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  doc.text("FAULT TOTALS", margin + 3, y + 5.5);

  const totW = (pageWidth - margin * 2) / 3;
  const drawTotal = (
    label: string,
    count: number,
    col: [number, number, number],
    i: number,
  ) => {
    const tx = margin + totW * (i + 1) - 5;
    doc.setTextColor(160, 165, 160);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(6.5);
    doc.text(label, tx - 8, y + 5.5, { align: "right" });
    doc.setTextColor(...col);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text(String(count), tx, y + 5.5, { align: "right" });
  };
  drawTotal("Driving", driving, C.amberBg, 0);
  drawTotal("Serious", serious, [255, 120, 120], 1);
  drawTotal("Dangerous", dangerous, [255, 80, 80], 2);
  y += totalsH + 4;

  // ═══════════════════════════════════════════════════════════════════════════
  //  INSTRUCTOR DEBRIEF NOTES  (with auto-pagination)
  // ═══════════════════════════════════════════════════════════════════════════
  const notes = data.debriefNotes?.trim()
    ? data.debriefNotes
    : "— No debrief notes recorded —";
  const textWidth = pageWidth - margin * 2 - 8;
  const allLines: string[] = doc.splitTextToSize(notes, textWidth) as string[];
  const lineH = 3.8; // mm per line of text
  const debriefHeaderH = 10; // mm for the "INSTRUCTOR DEBRIEF NOTES" header + divider
  const footerPad = 10; // mm reserved for footer at bottom

  let pageNum = 1;
  let lineIdx = 0;

  while (lineIdx < allLines.length) {
    // How much space is left on this page?
    const availableH = pageHeight - margin - y - footerPad;
    // First chunk on a page needs the header; subsequent chunks don't
    const isFirstChunkOnPage = lineIdx === 0 || (lineIdx > 0 && y <= margin + 5);
    const contentStartY = isFirstChunkOnPage ? y + debriefHeaderH : y;
    const maxLinesOnPage = Math.floor((availableH - (isFirstChunkOnPage ? debriefHeaderH : 0)) / lineH);

    if (maxLinesOnPage <= 0) {
      // Not enough room — force a new page
      doc.addPage();
      y = margin;
      pageNum++;
      continue;
    }

    const linesToRender = Math.min(maxLinesOnPage, allLines.length - lineIdx);
    const boxH = (isFirstChunkOnPage ? debriefHeaderH : 0) + linesToRender * lineH + 4;

    // Draw the panel background
    doc.setFillColor(...C.panelBg);
    doc.setDrawColor(...C.emerald);
    doc.setLineWidth(0.3);
    doc.roundedRect(margin, y, pageWidth - margin * 2, boxH, 1.5, 1.5, "FD");

    if (isFirstChunkOnPage) {
      // Section header
      doc.setTextColor(...C.ink);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(7.5);
      doc.text("INSTRUCTOR DEBRIEF NOTES", margin + 3, y + 5);

      // divider
      doc.setDrawColor(200, 205, 200);
      doc.setLineWidth(0.2);
      doc.line(margin + 3, y + 7, pageWidth - margin - 3, y + 7);
    }

    // Render text lines
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7);
    doc.setTextColor(40, 50, 45);
    const textStartY = isFirstChunkOnPage ? y + debriefHeaderH + 1 : y + 2;
    for (let i = 0; i < linesToRender; i++) {
      doc.text(allLines[lineIdx + i], margin + 3, textStartY + i * lineH);
    }

    lineIdx += linesToRender;
    y += boxH + 3;

    // If more lines remain, add a new page
    if (lineIdx < allLines.length) {
      doc.addPage();
      y = margin;
      pageNum++;
    }
  }

  // ═══════════════════════════════════════════════════════════════════════════
  //  FOOTER  (on every page)
  // ═══════════════════════════════════════════════════════════════════════════
  const totalPages = pageNum;
  for (let p = 1; p <= totalPages; p++) {
    doc.setPage(p);
    doc.setFontSize(6);
    doc.setTextColor(...C.muted);
    doc.text(
      "Drive Dojo — Mock test report. This is a training aid and not an official DVSA DL25 document.",
      margin,
      pageHeight - 5,
    );
    doc.text(`Page ${p} of ${totalPages}`, pageWidth - margin, pageHeight - 5, { align: "right" });
  }

  return doc;
}
