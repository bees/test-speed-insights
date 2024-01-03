import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Speed Insights",
  description: "Testing Vercel speed insights",
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
