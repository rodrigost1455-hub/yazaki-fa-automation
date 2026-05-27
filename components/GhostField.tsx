"use client";

import { useEffect, useRef } from "react";
import type { TextField } from "@/lib/types";

interface Props {
  field: TextField;
  value: string;
  onChange: (value: string) => void;
}

export function GhostField({ field, value, onChange }: Props) {
  const ref = useRef<HTMLTextAreaElement | HTMLInputElement | null>(null);

  // Auto-resize textareas to fit content
  useEffect(() => {
    if (field.multiline && ref.current) {
      const el = ref.current as HTMLTextAreaElement;
      el.style.height = "auto";
      el.style.height = el.scrollHeight + "px";
    }
  }, [value, field.multiline]);

  const style: React.CSSProperties = {
    left: `${field.x}%`,
    top: `${field.y}%`,
    width: `${field.w}%`,
    height: `${field.h}%`,
    fontSize: field.size ? `${field.size}px` : undefined,
  };

  const classes = [
    "ghost-field",
    field.center ? "center" : "",
    field.bold ? "bold" : "",
    field.multiline ? "multiline" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (field.multiline) {
    return (
      <textarea
        ref={ref as React.RefObject<HTMLTextAreaElement>}
        className={classes}
        style={style}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    );
  }

  return (
    <input
      ref={ref as React.RefObject<HTMLInputElement>}
      type="text"
      className={classes}
      style={style}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      spellCheck={false}
    />
  );
}
