import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Fusion - Recruiting Consultancy",
  description: "Expert recruitment solutions connecting talented professionals with leading companies",
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
