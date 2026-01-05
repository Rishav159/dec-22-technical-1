import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Site Builder Assessment",
  description: "A technical assessment for React state management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
