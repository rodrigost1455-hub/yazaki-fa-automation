import type { TextField } from "@/lib/types";

/**
 * Editable text fields per page. Coordinates extracted directly from the
 * original PDF via PyMuPDF (text-span bounding boxes in % of page).
 * Single-line fields get a small vertical/horizontal padding so the white
 * box fully covers the underlying JPEG text. Multiline fields are sized
 * to span the body width and accommodate paragraph growth.
 */
export const TEXT_FIELDS: Record<number, TextField[]> = {
  // Page 1
  1: [
    { id: "date", x: 29.86, y: 15.42, w: 8.33, h: 2.2, value: "5/26/2026" },
    { id: "fa_number", x: 69.91, y: 15.42, w: 9.51, h: 2.2, value: "W2605-042" },
    { id: "customer_part", x: 29.86, y: 18.4, w: 14.04, h: 2.2, value: "L1M8 10C666 GF" },
    { id: "problem_number", x: 69.91, y: 18.4, w: 9.51, h: 2.2, value: "W2605-042" },
    { id: "yazaki_part", x: 29.86, y: 21.39, w: 11.86, h: 2.2, value: "7370-2573-8W" },
    { id: "prc", x: 69.91, y: 21.39, w: 5.6, h: 2.2, value: "18428" },
    { id: "return_tag", x: 29.86, y: 24.37, w: 9.51, h: 2.2, value: "W2605-042" },
    { id: "location", x: 69.91, y: 24.37, w: 7.78, h: 2.2, value: "Germany" },
    { id: "claim_number", x: 29.86, y: 27.54, w: 9.51, h: 2.2, value: "W2605-042" },
    { id: "vin", x: 69.91, y: 27.54, w: 18.23, h: 2.2, value: "6FPP2HMJ4PSR64463" },
    { id: "analysis_by", x: 29.86, y: 30.53, w: 11.74, h: 2.2, value: "Gerardo Nunez" },
    { id: "defect_location", x: 29.86, y: 33.42, w: 7.68, h: 2.2, value: "Warranty" },
    { id: "failure_symptom", x: 11.77, y: 38.82, w: 78.0, h: 2.5, value: "No information.", multiline: true },
    { id: "ext_visual", x: 11.77, y: 46.14, w: 78.0, h: 9.5, value: "Upon receipt, the unit was inspected for any external anomalies that could cause or contribute to any problems. All terminals were inspected, and no anomalies were found in them. All components were present. Tag was present (manufacturing date code: 25053; manufacturing date: February 22, 2025). Approved brands such as EOL tester, Hi-pot test and component crimping machine were present.", multiline: true },
    { id: "func_verification", x: 11.77, y: 56.39, w: 78.0, h: 7.2, value: "The unit was tested on the EOL tester and the result was OK. Furthermore, it was tested by manual testing and the result was correct. Then, to confirm the correct behavior of all the components, this part was tested with a power supply and multimeter, everything was in correct behavior.", multiline: true },
    { id: "failure_description", x: 11.77, y: 66.74, w: 78.0, h: 2.5, value: "NTF.", multiline: true },
    { id: "root_cause", x: 11.77, y: 72.42, w: 78.0, h: 2.5, value: "Not Trouble Found.", multiline: true },
    { id: "conclusion", x: 11.77, y: 78.95, w: 78.0, h: 5.0, value: "The problem was not found in this part L1M8 10C666 GF. After several tests & visual inspections performed on the part, nothing was found that could cause the failure mode.", multiline: true },
  ],
  // Page 2
  2: [
    { id: "date_req_p2", x: 60.59, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p2", x: 74.32, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p2", x: 86.81, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "part_name", x: 23.23, y: 21.02, w: 13.54, h: 2.14, value: "PHEV BEC GEN 4", center: true },
    { id: "prc_p2", x: 61.46, y: 21.02, w: 4.91, h: 2.14, value: "18428", center: true },
    { id: "location_p2", x: 79.85, y: 21.02, w: 6.95, h: 2.14, value: "Germany", center: true },
    { id: "part_num_p2", x: 10.94, y: 25.47, w: 12.9, h: 2.14, value: "L1M8 10C666 GF", center: true },
    { id: "yazaki_num_p2", x: 45.83, y: 25.47, w: 10.85, h: 2.14, value: "7370-2573-8W", center: true },
    { id: "vin_p2", x: 74.87, y: 25.47, w: 16.89, h: 2.14, value: "6FPP2HMJ4PSR64463", center: true },
    { id: "mfg_date", x: 75.97, y: 43.48, w: 13.3, h: 2.13, value: "February 22, 2025", center: true },
    { id: "serial_num", x: 79.7, y: 46.23, w: 5.81, h: 2.13, value: "000552", center: true },
    { id: "arrival_notes", x: 65.0, y: 76.5, w: 30.0, h: 4.0, value: "There were not observed anomalies in the piece.", center: true, multiline: true },
    { id: "approved_by_p2", x: 33.69, y: 91.09, w: 9.37, h: 1.8, value: "Horacio Martinez", center: true },
    { id: "checked_by_p2", x: 47.24, y: 91.09, w: 7.5, h: 1.8, value: "Juan Barraza", center: true },
    { id: "prepared_by_p2", x: 59.65, y: 91.09, w: 8.55, h: 1.8, value: "Gerardo Nunez", center: true },
    { id: "requestor_p2", x: 78.54, y: 91.03, w: 9.53, h: 1.8, value: "Chandni Bhavsar", center: true },
  ],
  // Page 3
  3: [
    { id: "date_req_p3", x: 60.04, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p3", x: 72.09, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p3", x: 85.54, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "terminals_note", x: 32.86, y: 86.52, w: 31.49, h: 2.0, value: "No anomalies were observed at the terminals.", center: true, multiline: true },
  ],
  // Page 4
  4: [
    { id: "date_req_p4", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p4", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p4", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "eol_result", x: 36.52, y: 86.62, w: 28.3, h: 2.8, value: "EOL tester judged product as OK", center: true, bold: true },
  ],
  // Page 5
  5: [
    { id: "date_req_p5", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p5", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p5", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p5", x: 30.92, y: 88.12, w: 38.59, h: 2.0, value: "No anomalies were observed in the manual test.", center: true, multiline: true },
  ],
  // Page 6
  6: [
    { id: "date_req_p6", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p6", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p6", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p6", x: 32.74, y: 90.57, w: 38.7, h: 2.0, value: "No anomalies were observed in the manual test.", center: true, multiline: true },
  ],
  // Page 7
  7: [
    { id: "date_req_p7", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p7", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p7", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p7", x: 32.71, y: 89.57, w: 33.22, h: 2.0, value: "No anomalies were observed in the manual test.", center: true, multiline: true },
  ],
  // Page 8
  8: [
    { id: "date_req_p8", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p8", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p8", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p8", x: 33.15, y: 90.53, w: 33.11, h: 2.0, value: "No anomalies were observed in the manual test.", center: true, multiline: true },
  ],
  // Page 9
  9: [
    { id: "date_req_p9", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p9", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p9", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p9", x: 51.8, y: 83.76, w: 38.68, h: 2.0, value: "No anomalies were observed in the manual test.", center: true, multiline: true },
  ],
  // Page 10
  10: [
    { id: "date_req_p10", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p10", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p10", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p10", x: 29.69, y: 89.44, w: 37.99, h: 2.0, value: "No anomalies was observed in the manual test", center: true, multiline: true },
  ],
  // Page 11
  11: [
    { id: "date_req_p11", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p11", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p11", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p11", x: 29.77, y: 92.16, w: 38.22, h: 2.0, value: "No anomalies were observed in the manual test", center: true, multiline: true },
  ],
  // Page 12
  12: [
    { id: "date_req_p12", x: 63.48, y: 7.42, w: 6.64, h: 1.9, value: "20-May-26", center: true },
    { id: "report_num_p12", x: 75.25, y: 7.42, w: 7.23, h: 1.9, value: "W2605-042", center: true },
    { id: "comp_date_p12", x: 86.09, y: 7.42, w: 6.64, h: 1.9, value: "26-May-26", center: true },
    { id: "manual_note_p12", x: 29.55, y: 89.49, w: 38.26, h: 2.0, value: "No anomalies were observed in the manual test", center: true, multiline: true },
  ],
  // Page 13
  13: [
    { id: "date_req_p13", x: 64.26, y: 7.47, w: 6.77, h: 1.92, value: "20-May-26", center: true },
    { id: "report_num_p13", x: 76.17, y: 7.47, w: 7.4, h: 1.92, value: "W2605-042", center: true },
    { id: "comp_date_p13", x: 87.17, y: 7.47, w: 6.77, h: 1.92, value: "26-May-26", center: true },
    { id: "manual_note_p13", x: 52.66, y: 83.76, w: 38.77, h: 2.0, value: "No anomalies were observed in the manual test.", center: true, multiline: true },
  ],
};

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