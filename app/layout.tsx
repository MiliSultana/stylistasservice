import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sevora | Login & Registration",
  description: "Customer login and registration for Sevora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
