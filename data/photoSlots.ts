import type { PhotoSlot } from "@/lib/types";

/**
 * Photo dropzones per page.
 * Coordinates are percentages relative to each page's bounding box.
 * Extracted from the original PDF via PyMuPDF + manual review of orange/green
 * markings supplied by the user (Yazaki F.A. lab).
 *
 * action:
 *   - "replace_dropzone": semi-transparent overlay (kept photos — user can swap)
 *   - "blank_dropzone":   opaque white overlay (removed photos per markings)
 */
export const PHOTO_SLOTS: Record<number, PhotoSlot[]> = {
  // Page 2 — Arrival Condition
  2: [
    { id: "p2_top_left_big",    x: 3.5,  y: 32.4, w: 44.8, h: 15.5, action: "blank_dropzone",   label: "Top view" },
    { id: "p2_perspective",     x: 49.5, y: 35.6, w: 22.5, h: 10.2, action: "replace_dropzone", label: "Perspective" },
    { id: "p2_tag",             x: 74.9, y: 32.3, w: 16.4, h: 9.6,  action: "replace_dropzone", label: "Tag" },
    { id: "p2_panorama_middle", x: 4.1,  y: 48.3, w: 68.5, h: 9.9,  action: "blank_dropzone",   label: "Side panorama" },
    { id: "p2_side_small",      x: 73.7, y: 49.8, w: 21.0, h: 8.4,  action: "replace_dropzone", label: "Side view" },
    { id: "p2_panorama_bottom", x: 3.9,  y: 58.9, w: 90.2, h: 13.7, action: "blank_dropzone",   label: "Bottom panorama" },
    { id: "p2_fomoco",          x: 7.5,  y: 74.5, w: 19.2, h: 11.0, action: "replace_dropzone", label: "FoMoCo marks" },
  ],

  // Page 3 — Terminals Inspection
  3: [
    { id: "p3_t_topleft",   x: 4.5,  y: 26.2, w: 14.2, h: 12.8, action: "replace_dropzone", label: "Term 1" },
    { id: "p3_t_top2",      x: 21.6, y: 25.8, w: 14.3, h: 12.1, action: "replace_dropzone", label: "Term 2" },
    { id: "p3_t_top3",      x: 42.2, y: 25.6, w: 17.7, h: 12.1, action: "replace_dropzone", label: "Term 3" },
    { id: "p3_t_top4",      x: 64.2, y: 28.0, w: 20.3, h: 8.1,  action: "replace_dropzone", label: "Term 4" },
    { id: "p3_board",       x: 18.7, y: 40.3, w: 63.6, h: 19.6, action: "replace_dropzone", label: "Full board" },
    { id: "p3_t_leftside",  x: 4.5,  y: 44.2, w: 9.5,  h: 12.1, action: "replace_dropzone", label: "Side L" },
    { id: "p3_t_rightside", x: 84.7, y: 41.7, w: 8.1,  h: 10.6, action: "replace_dropzone", label: "Side R" },
    { id: "p3_t_bot1",      x: 5.2,  y: 61.4, w: 27.6, h: 14.9, action: "replace_dropzone", label: "Term 5" },
    { id: "p3_t_bot2",      x: 39.6, y: 61.4, w: 19.6, h: 13.7, action: "replace_dropzone", label: "Term 6" },
    { id: "p3_t_bot3",      x: 62.9, y: 61.4, w: 21.1, h: 14.1, action: "replace_dropzone", label: "Term 7" },
  ],

  // Page 4 — EOL Tester
  4: [
    { id: "p4_unit",     x: 4.0,  y: 23.4, w: 67.7, h: 21.5, action: "replace_dropzone", label: "Unit" },
    { id: "p4_tag1",     x: 76.7, y: 31.4, w: 13.2, h: 7.8,  action: "replace_dropzone", label: "Tag 1" },
    { id: "p4_software", x: 4.3,  y: 50.5, w: 67.7, h: 32.6, action: "replace_dropzone", label: "Software screen" },
    { id: "p4_tag2",     x: 77.8, y: 63.0, w: 13.2, h: 7.8,  action: "replace_dropzone", label: "Tag 2" },
  ],

  // Page 5 — 5.1.1 + 5.1.2
  5: [
    { id: "p5_test_511", x: 3.9,  y: 55.4, w: 42.8, h: 24.4, action: "replace_dropzone", label: "5.1.1" },
    { id: "p5_test_512", x: 48.4, y: 60.1, w: 43.8, h: 24.6, action: "replace_dropzone", label: "5.1.2" },
  ],

  // Page 6 — 5.1.3 + 5.1.4
  6: [
    { id: "p6_test_513", x: 3.9,  y: 61.5, w: 43.5, h: 25.6, action: "replace_dropzone", label: "5.1.3" },
    { id: "p6_test_514", x: 49.1, y: 61.5, w: 44.8, h: 25.7, action: "replace_dropzone", label: "5.1.4" },
  ],

  // Page 7 — 5.1.5 + 5.1.6
  7: [
    { id: "p7_test_515", x: 3.7,  y: 60.3, w: 41.7, h: 25.2, action: "replace_dropzone", label: "5.1.5" },
    { id: "p7_test_516", x: 46.7, y: 60.3, w: 45.0, h: 25.2, action: "replace_dropzone", label: "5.1.6" },
  ],

  // Page 8 — 5.2.1 + 5.2.2
  8: [
    { id: "p8_test_521", x: 3.9,  y: 59.9, w: 43.1, h: 25.3, action: "replace_dropzone", label: "5.2.1" },
    { id: "p8_test_522", x: 47.8, y: 59.8, w: 45.1, h: 25.3, action: "replace_dropzone", label: "5.2.2" },
  ],

  // Page 9 — 5.2.3, 5.2.4, 5.2.5
  9: [
    { id: "p9_test_523", x: 3.9,  y: 47.5, w: 37.2, h: 21.3, action: "replace_dropzone", label: "5.2.3" },
    { id: "p9_test_524", x: 49.9, y: 54.9, w: 43.2, h: 24.7, action: "replace_dropzone", label: "5.2.4" },
    { id: "p9_test_525", x: 4.1,  y: 73.7, w: 37.3, h: 20.6, action: "replace_dropzone", label: "5.2.5" },
  ],

  // Page 10 — 5.3.1 + 5.3.2
  10: [
    { id: "p10_test_531", x: 3.9,  y: 59.8, w: 43.2, h: 25.3, action: "replace_dropzone", label: "5.3.1" },
    { id: "p10_test_532", x: 48.2, y: 59.8, w: 43.9, h: 25.3, action: "replace_dropzone", label: "5.3.2" },
  ],

  // Page 11 — 5.3.3 + 5.3.4
  11: [
    { id: "p11_test_533", x: 4.8,  y: 55.2, w: 43.7, h: 25.4, action: "replace_dropzone", label: "5.3.3" },
    { id: "p11_test_534", x: 50.1, y: 55.2, w: 44.1, h: 25.4, action: "replace_dropzone", label: "5.3.4" },
  ],

  // Page 12 — 5.4.1 + 5.4.2
  12: [
    { id: "p12_test_541", x: 3.8,  y: 60.7, w: 43.7, h: 25.1, action: "replace_dropzone", label: "5.4.1" },
    { id: "p12_test_542", x: 48.8, y: 60.7, w: 44.2, h: 25.1, action: "replace_dropzone", label: "5.4.2" },
  ],

  // Page 13 — 5.4.3, 5.4.4, 5.4.5
  13: [
    { id: "p13_test_543", x: 3.8,  y: 49.1, w: 44.0, h: 19.8, action: "replace_dropzone", label: "5.4.3" },
    { id: "p13_test_544", x: 50.0, y: 54.8, w: 44.3, h: 24.7, action: "replace_dropzone", label: "5.4.4" },
    { id: "p13_test_545", x: 3.9,  y: 73.7, w: 44.3, h: 20.8, action: "replace_dropzone", label: "5.4.5" },
  ],
};

/** Pages with no photo slots (e.g. page 1 cover) get an empty list */
export function photoSlotsFor(page: number): PhotoSlot[] {
  return PHOTO_SLOTS[page] ?? [];
}
