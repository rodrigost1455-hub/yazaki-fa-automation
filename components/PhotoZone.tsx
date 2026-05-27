"use client";

import { useRef } from "react";
import type { PhotoSlot } from "@/lib/types";

interface Props {
  slot: PhotoSlot;
  value: string | null;
  onUpload: (slotId: string, base64: string) => void;
  onRemove: (slotId: string) => void;
}

export function PhotoZone({ slot, value, onUpload, onRemove }: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result;
      if (typeof result === "string") onUpload(slot.id, result);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const style: React.CSSProperties = {
    left: `${slot.x}%`,
    top: `${slot.y}%`,
    width: `${slot.w}%`,
    height: `${slot.h}%`,
  };

  const classes = [
    "photo-zone",
    slot.action === "blank_dropzone" ? "mask" : "",
    value ? "has-image" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent) => {
    // Don't open file picker if remove button is clicked
    if ((e.target as HTMLElement).classList.contains("photo-remove")) return;
    if (!value) fileRef.current?.click();
  };

  return (
    <div className={classes} style={style} onClick={handleClick}>
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt={slot.label} />
      ) : (
        <div className="photo-placeholder">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          <span>{slot.label}</span>
        </div>
      )}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        capture="environment"
        hidden
        onChange={handleFile}
      />
      {value && (
        <button
          type="button"
          className="photo-remove"
          title="Remove image"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(slot.id);
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}
