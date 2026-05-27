"use client";

import { useRef, useState } from "react";
import type { PhotoSlot } from "@/lib/types";

interface Props {
  slot: PhotoSlot;
  value: string | null;
  /** Path to the original photo from the W2605-042 report (under /public/defaults) */
  defaultSrc: string;
  onUpload: (slotId: string, base64: string) => void;
  onUseDefault: (slotId: string, defaultSrc: string) => void;
  onRemove: (slotId: string) => void;
}

export function PhotoZone({
  slot,
  value,
  defaultSrc,
  onUpload,
  onUseDefault,
  onRemove,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    menuOpen ? "menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const handleZoneClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".photo-remove")) return;
    if ((e.target as HTMLElement).closest(".photo-menu")) return;
    if (!value) setMenuOpen(true);
  };

  const handleUseDefault = (e: React.MouseEvent) => {
    e.stopPropagation();
    onUseDefault(slot.id, defaultSrc);
    setMenuOpen(false);
  };

  const handleUploadNew = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
    fileRef.current?.click();
  };

  const handleCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(false);
  };

  return (
    <div className={classes} style={style} onClick={handleZoneClick}>
      {value ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={value} alt={slot.label} />
      ) : (
        <div className="photo-placeholder">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
        onChange={handleFileChange}
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

      {menuOpen && !value && (
        <div className="photo-menu" onClick={(e) => e.stopPropagation()}>
          <div className="photo-menu-title">{slot.label}</div>
          <button
            type="button"
            className="photo-menu-btn primary"
            onClick={handleUseDefault}
          >
            Use original photo
          </button>
          <button
            type="button"
            className="photo-menu-btn"
            onClick={handleUploadNew}
          >
            Upload new
          </button>
          <button
            type="button"
            className="photo-menu-btn ghost"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
