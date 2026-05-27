import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yazaki Failure Analysis Report",
  description:
    "Editable W2605-042 Failure Analysis report — Yazaki Electronics Durango",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
