"use client";

import { useCallback, useMemo, useState } from "react";
import { Page } from "./Page";
import { PHOTO_SLOTS } from "@/data/photoSlots";
import { initialTextValues } from "@/data/textFields";
import type { FormState } from "@/lib/types";

const TOTAL_PAGES = 13;

/** Empty image map */
function emptyImages(): Record<string, string | null> {
  const out: Record<string, string | null> = {};
  for (const slots of Object.values(PHOTO_SLOTS)) {
    for (const s of slots) out[s.id] = null;
  }
  return out;
}

/** Image map prefilled with original /defaults paths */
function defaultImages(): Record<string, string | null> {
  const out: Record<string, string | null> = {};
  for (const slots of Object.values(PHOTO_SLOTS)) {
    for (const s of slots) out[s.id] = `/defaults/${s.id}.jpg`;
  }
  return out;
}

function buildInitialState(withDefaults: boolean): FormState {
  return {
    text: initialTextValues(),
    images: withDefaults ? defaultImages() : emptyImages(),
  };
}

export function ReportEditor() {
  // First-load modal: ask whether to prefill all photos with the W2605-042
  // originals, or start with empty dropzones (per-photo choice still available).
  const [intro, setIntro] = useState<"asking" | "decided">("asking");
  const [state, setState] = useState<FormState>(() =>
    buildInitialState(false)
  );
  const [toast, setToast] = useState<{ msg: string; bg: string } | null>(null);

  // Memoized initial template (always blank) for reset behavior
  const blankTemplate = useMemo(() => buildInitialState(false), []);

  const showToast = useCallback((msg: string, bg: string = "#2e7d32") => {
    setToast({ msg, bg });
    setTimeout(() => setToast(null), 2600);
  }, []);

  const handleChooseDefaults = (useAll: boolean) => {
    setState(buildInitialState(useAll));
    setIntro("decided");
  };

  const handleTextChange = useCallback((id: string, value: string) => {
    setState((prev) => ({ ...prev, text: { ...prev.text, [id]: value } }));
  }, []);

  const handleImageUpload = useCallback((id: string, base64: string) => {
    setState((prev) => ({
      ...prev,
      images: { ...prev.images, [id]: base64 },
    }));
  }, []);

  const handleUseDefault = useCallback((id: string, defaultSrc: string) => {
    setState((prev) => ({
      ...prev,
      images: { ...prev.images, [id]: defaultSrc },
    }));
  }, []);

  const handleImageRemove = useCallback((id: string) => {
    setState((prev) => ({ ...prev, images: { ...prev.images, [id]: null } }));
  }, []);

  const handleSubmit = () => {
    const summary = {
      text: state.text,
      images: Object.fromEntries(
        Object.entries(state.images).map(([k, v]) => {
          if (!v) return [k, null];
          if (v.startsWith("data:")) {
            return [k, `[uploaded base64, ${v.length} chars]`];
          }
          return [k, `[original: ${v}]`];
        })
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
    setState(blankTemplate);
    setIntro("asking");
    showToast("Form reset ✓", "#555");
  };

  return (
    <>
      <header className="app-header">
        <strong>W2605-042 · Failure Analysis</strong>
        <div className="app-sub">
          Click any text to edit · Click any red-bordered box to upload or use
          the original photo
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
          onUseDefault={handleUseDefault}
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

      {intro === "asking" && (
        <div className="intro-backdrop">
          <div className="intro-modal">
            <h2>Start a new report</h2>
            <p>
              Do you want to start with the <strong>original photos</strong>{" "}
              from the W2605-042 report, or with all photo slots{" "}
              <strong>empty</strong>?
            </p>
            <p className="intro-note">
              You can still swap any individual photo later — clicking an empty
              slot will let you choose between the original and uploading a new
              one.
            </p>
            <div className="intro-actions">
              <button
                className="intro-btn primary"
                onClick={() => handleChooseDefaults(true)}
              >
                Use original photos
              </button>
              <button
                className="intro-btn"
                onClick={() => handleChooseDefaults(false)}
              >
                Start empty
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
