"use client";

import { useCallback, useMemo, useState } from "react";
import { Page } from "./Page";
import { PHOTO_SLOTS } from "@/data/photoSlots";
import { initialTextValues } from "@/data/textFields";
import type { FormState } from "@/lib/types";

const TOTAL_PAGES = 13;

function buildInitialState(): FormState {
  const text = initialTextValues();
  const images: Record<string, string | null> = {};
  for (const slots of Object.values(PHOTO_SLOTS)) {
    for (const s of slots) images[s.id] = null;
  }
  return { text, images };
}

export function ReportEditor() {
  const initial = useMemo(buildInitialState, []);
  const [state, setState] = useState<FormState>(initial);
  const [toast, setToast] = useState<{ msg: string; bg: string } | null>(null);

  const showToast = useCallback((msg: string, bg: string = "#2e7d32") => {
    setToast({ msg, bg });
    setTimeout(() => setToast(null), 2600);
  }, []);

  const handleTextChange = useCallback((id: string, value: string) => {
    setState((prev) => ({ ...prev, text: { ...prev.text, [id]: value } }));
  }, []);

  const handleImageUpload = useCallback((id: string, base64: string) => {
    setState((prev) => ({ ...prev, images: { ...prev.images, [id]: base64 } }));
  }, []);

  const handleImageRemove = useCallback((id: string) => {
    setState((prev) => ({ ...prev, images: { ...prev.images, [id]: null } }));
  }, []);

  const handleSubmit = () => {
    const summary = {
      text: state.text,
      images: Object.fromEntries(
        Object.entries(state.images).map(([k, v]) => [
          k,
          v ? `[base64 image, ${v.length} chars]` : null,
        ])
      ),
    };
    console.log(
      "%c=== FAILURE ANALYSIS — PAYLOAD (preview) ===",
      "color:#c00000;font-weight:bold;"
    );
    console.log(JSON.stringify(summary, null, 2));
    console.log("%c=== Full payload (with image data) ===", "color:#666;");
    console.log(state);
    showToast("Payload logged to console ✓");
  };

  const handleReset = () => {
    if (!confirm("Reset all fields? Uploaded images will be lost.")) return;
    setState(buildInitialState());
    showToast("Form reset ✓", "#555");
  };

  return (
    <>
      <header className="app-header">
        <strong>W2605-042 · Failure Analysis</strong>
        <div className="app-sub">
          Click any text to edit · Click any red-bordered box to upload a photo
        </div>
      </header>

      {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((pg) => (
        <Page
          key={pg}
          pageNumber={pg}
          textValues={state.text}
          imageValues={state.images}
          onTextChange={handleTextChange}
          onImageUpload={handleImageUpload}
          onImageRemove={handleImageRemove}
        />
      ))}

      <div className="submit-bar">
        <button className="btn-reset" onClick={handleReset} type="button">
          Reset
        </button>
        <button className="btn-submit" onClick={handleSubmit} type="button">
          Submit / Generate PDF
        </button>
      </div>

      {toast && (
        <div className="toast show" style={{ background: toast.bg }}>
          {toast.msg}
        </div>
      )}
    </>
  );
}
