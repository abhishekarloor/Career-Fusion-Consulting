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
      <head>
        <link rel="preload" as="image" href="/images/hero-bg.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
