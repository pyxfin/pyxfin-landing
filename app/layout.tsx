// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pyxfin — Decode the markets.",
  description:
    "Pyxfin is an AI-powered investment intelligence platform that helps you decode the markets through smart analytics, pattern detection, and portfolio optimization.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0A1A33] text-white antialiased">
        {children}
      </body>
    </html>
  );
}