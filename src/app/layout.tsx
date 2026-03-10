import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yijian Huang | 黄一健 - Economics & Policy Research",
  description: "Personal portfolio of Yijian Huang - Economics student at CUHK-Shenzhen, with experience in policy research, international organizations, and data-driven analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
