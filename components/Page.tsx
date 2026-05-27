"use client";

import Image from "next/image";
import { GhostField } from "./GhostField";
import { PhotoZone } from "./PhotoZone";
import { photoSlotsFor } from "@/data/photoSlots";
import { textFieldsFor } from "@/data/textFields";

interface Props {
  pageNumber: number;
  textValues: Record<string, string>;
  imageValues: Record<string, string | null>;
  onTextChange: (id: string, value: string) => void;
  onImageUpload: (id: string, base64: string) => void;
  onUseDefault: (id: string, defaultSrc: string) => void;
  onImageRemove: (id: string) => void;
}

export function Page({
  pageNumber,
  textValues,
  imageValues,
  onTextChange,
  onImageUpload,
  onUseDefault,
  onImageRemove,
}: Props) {
  const slots = photoSlotsFor(pageNumber);
  const fields = textFieldsFor(pageNumber);
  const pageStr = String(pageNumber).padStart(2, "0");

  return (
    <div className="page" data-page={pageNumber}>
      <span className="page-label">Page {pageNumber}</span>

      <Image
        className="page-bg"
        src={`/pages/page-${pageStr}.jpg`}
        alt={`Page ${pageNumber} background`}
        fill
        sizes="(max-width: 900px) 100vw, 850px"
        priority={pageNumber <= 2}
      />

      {fields.map((field) => (
        <GhostField
          key={field.id}
          field={field}
          value={textValues[field.id] ?? ""}
          onChange={(v) => onTextChange(field.id, v)}
        />
      ))}

      {slots.map((slot) => (
        <PhotoZone
          key={slot.id}
          slot={slot}
          value={imageValues[slot.id] ?? null}
          defaultSrc={`/defaults/${slot.id}.jpg`}
          onUpload={onImageUpload}
          onUseDefault={onUseDefault}
          onRemove={onImageRemove}
        />
      ))}
    </div>
  );
}
