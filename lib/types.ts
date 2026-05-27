export type PhotoAction = "replace_dropzone" | "blank_dropzone";

export interface PhotoSlot {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  action: PhotoAction;
  label: string;
}

export interface TextField {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  value: string;
  center?: boolean;
  bold?: boolean;
  multiline?: boolean;
  size?: number;
}

export interface PageDefinition {
  page: number;
  photoSlots: PhotoSlot[];
  textFields: TextField[];
}

export interface FormState {
  text: Record<string, string>;
  images: Record<string, string | null>;
}
