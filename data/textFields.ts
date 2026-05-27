import type { TextField } from "@/lib/types";

/**
 * Editable text fields per page. Coordinates are percentages of page box.
 * Initial `value` reflects the original W2605-042 report content; templates
 * can later swap defaults.
 */
export const TEXT_FIELDS: Record<number, TextField[]> = {
  // Page 1 — Cover
  1: [
    { id: "date",                x: 25.0, y: 17.6, w: 25.0, h: 1.8, value: "5/26/2026" },
    { id: "fa_number",           x: 65.0, y: 17.6, w: 25.0, h: 1.8, value: "W2605-042" },
    { id: "customer_part",       x: 25.0, y: 20.8, w: 25.0, h: 1.8, value: "L1M8 10C666 GF" },
    { id: "problem_number",      x: 65.0, y: 20.8, w: 25.0, h: 1.8, value: "W2605-042" },
    { id: "yazaki_part",         x: 25.0, y: 22.7, w: 25.0, h: 1.8, value: "7370-2573-8W" },
    { id: "prc",                 x: 65.0, y: 22.7, w: 25.0, h: 1.8, value: "18428" },
    { id: "return_tag",          x: 25.0, y: 25.9, w: 25.0, h: 1.8, value: "W2605-042" },
    { id: "location",            x: 65.0, y: 25.9, w: 25.0, h: 1.8, value: "Germany" },
    { id: "claim_number",        x: 25.0, y: 29.1, w: 25.0, h: 1.8, value: "W2605-042" },
    { id: "vin",                 x: 65.0, y: 29.1, w: 25.0, h: 1.8, value: "6FPP2HMJ4PSR64463" },
    { id: "analysis_by",         x: 25.0, y: 33.2, w: 25.0, h: 1.8, value: "Gerardo Nunez" },
    { id: "defect_location",     x: 25.0, y: 35.5, w: 25.0, h: 1.8, value: "Warranty" },
    { id: "failure_symptom",     x: 9.0,  y: 41.5, w: 82.0, h: 2.0, value: "No information.", multiline: true },
    {
      id: "ext_visual", x: 9.0, y: 49.0, w: 82.0, h: 6.5, multiline: true,
      value: "Upon receipt, the unit was inspected for any external anomalies that could cause or contribute to any problems. All terminals were inspected, and no anomalies were found in them. All components were present. Tag was present (manufacturing date code: 25053; manufacturing date: February 22, 2025). Approved brands such as EOL tester, Hi-pot test and component crimping machine were present.",
    },
    {
      id: "func_verification", x: 9.0, y: 58.5, w: 82.0, h: 5.0, multiline: true,
      value: "The unit was tested on the EOL tester and the result was OK. Furthermore, it was tested by manual testing and the result was correct. Then, to confirm the correct behavior of all the components, this part was tested with a power supply and multimeter, everything was in correct behavior.",
    },
    { id: "failure_description", x: 9.0, y: 68.5, w: 82.0, h: 2.0, value: "NTF.", multiline: true },
    { id: "root_cause",          x: 9.0, y: 73.5, w: 82.0, h: 2.0, value: "Not Trouble Found.", multiline: true },
    {
      id: "conclusion", x: 9.0, y: 79.5, w: 82.0, h: 3.5, multiline: true,
      value: "The problem was not found in this part L1M8 10C666 GF. After several tests & visual inspections performed on the part, nothing was found that could cause the failure mode.",
    },
  ],

  // Page 2 — Arrival Condition (cover-photo page)
  2: [
    { id: "date_req_p2",     x: 53.0, y: 5.8,  w: 14.0, h: 1.6, value: "20-May-26",        center: true },
    { id: "report_num_p2",   x: 67.0, y: 5.8,  w: 11.0, h: 1.6, value: "W2605-042",        center: true },
    { id: "comp_date_p2",    x: 78.0, y: 5.8,  w: 14.0, h: 1.6, value: "26-May-26",        center: true },
    { id: "warranty_mark",   x: 60.0, y: 12.5, w: 10.0, h: 2.5, value: "X",                center: true, bold: true, size: 16 },
    { id: "plant_return",    x: 76.0, y: 12.5, w: 10.0, h: 2.5, value: "",                 center: true, bold: true, size: 16 },
    { id: "part_name",       x: 8.0,  y: 17.0, w: 36.0, h: 1.6, value: "PHEV BEC GEN 4",   center: true },
    { id: "prc_p2",          x: 53.0, y: 17.0, w: 17.0, h: 1.6, value: "18428",            center: true },
    { id: "location_p2",     x: 73.0, y: 17.0, w: 18.0, h: 1.6, value: "Germany",          center: true },
    { id: "part_num_p2",     x: 8.0,  y: 21.0, w: 25.0, h: 1.6, value: "L1M8 10C666 GF",   center: true },
    { id: "yazaki_num_p2",   x: 35.0, y: 21.0, w: 35.0, h: 1.6, value: "7370-2573-8W",     center: true },
    { id: "vin_p2",          x: 72.0, y: 21.0, w: 19.0, h: 1.6, value: "6FPP2HMJ4PSR64463",center: true },
    { id: "mfg_date",        x: 73.0, y: 41.0, w: 21.0, h: 1.6, value: "February 22, 2025",center: true },
    { id: "serial_num",      x: 73.0, y: 44.5, w: 21.0, h: 1.6, value: "000552",           center: true },
    {
      id: "arrival_notes", x: 64.0, y: 75.5, w: 30.0, h: 4.5,
      value: "There were not observed anomalies in the piece.",
      center: true, multiline: true,
    },
    { id: "approved_by_p2",  x: 33.0, y: 89.4, w: 12.0, h: 1.5, value: "Horacio Martinez", center: true },
    { id: "checked_by_p2",   x: 45.5, y: 89.4, w: 11.0, h: 1.5, value: "Juan Barraza",     center: true },
    { id: "prepared_by_p2",  x: 57.0, y: 89.4, w: 13.0, h: 1.5, value: "Gerardo Nunez",    center: true },
    { id: "requestor_p2",    x: 71.0, y: 89.4, w: 21.0, h: 1.5, value: "Chandni Bhavsar",  center: true },
  ],

  // Page 3 — Terminals Inspection
  3: [
    { id: "date_req_p3",     x: 53.0, y: 5.8, w: 14.0, h: 1.6, value: "20-May-26",  center: true },
    { id: "report_num_p3",   x: 67.0, y: 5.8, w: 11.0, h: 1.6, value: "W2605-042",  center: true },
    { id: "comp_date_p3",    x: 78.0, y: 5.8, w: 14.0, h: 1.6, value: "26-May-26",  center: true },
    {
      id: "terminals_note", x: 27.0, y: 79.5, w: 46.0, h: 2.5,
      value: "No anomalies were observed at the terminals.",
      center: true, multiline: true,
    },
  ],

  // Page 4 — EOL Tester
  4: [
    { id: "date_req_p4",     x: 53.0, y: 5.8,  w: 14.0, h: 1.6, value: "20-May-26", center: true },
    { id: "report_num_p4",   x: 67.0, y: 5.8,  w: 11.0, h: 1.6, value: "W2605-042", center: true },
    { id: "comp_date_p4",    x: 78.0, y: 5.8,  w: 14.0, h: 1.6, value: "26-May-26", center: true },
    {
      id: "eol_result", x: 27.0, y: 88.5, w: 46.0, h: 2.5,
      value: "EOL tester judged product as OK",
      center: true, bold: true,
    },
  ],
};

// Pages 5-13 share the same header + green-note layout — generate programmatically
const NOTE_POSITIONS: Record<number, { y: number; value: string }> = {
  5:  { y: 86.0, value: "No anomalies were observed in the manual test." },
  6:  { y: 92.5, value: "No anomalies were observed in the manual test." },
  7:  { y: 91.0, value: "No anomalies were observed in the manual test." },
  8:  { y: 91.0, value: "No anomalies were observed in the manual test." },
  9:  { y: 75.5, value: "No anomalies were observed in the manual test." },
  10: { y: 91.5, value: "No anomalies was observed in the manual test" },
  11: { y: 89.0, value: "No anomalies were observed in the manual test" },
  12: { y: 91.5, value: "No anomalies were observed in the manual test" },
  13: { y: 80.5, value: "No anomalies were observed in the manual test." },
};

for (const [pgStr, info] of Object.entries(NOTE_POSITIONS)) {
  const pg = Number(pgStr);
  TEXT_FIELDS[pg] = [
    { id: `date_req_p${pg}`,   x: 53.0, y: 5.8, w: 14.0, h: 1.6, value: "20-May-26", center: true },
    { id: `report_num_p${pg}`, x: 67.0, y: 5.8, w: 11.0, h: 1.6, value: "W2605-042", center: true },
    { id: `comp_date_p${pg}`,  x: 78.0, y: 5.8, w: 14.0, h: 1.6, value: "26-May-26", center: true },
    {
      id: `manual_note_p${pg}`, x: 27.0, y: info.y, w: 46.0, h: 3.0,
      value: info.value, center: true, multiline: true,
    },
  ];
}

export function textFieldsFor(page: number): TextField[] {
  return TEXT_FIELDS[page] ?? [];
}

/** Flat map of {fieldId: defaultValue} for building initial state */
export function initialTextValues(): Record<string, string> {
  const out: Record<string, string> = {};
  for (const fields of Object.values(TEXT_FIELDS)) {
    for (const f of fields) out[f.id] = f.value;
  }
  return out;
}
