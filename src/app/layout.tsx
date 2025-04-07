import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "0x_ - An indie game shop",
  description: "An indie game shop to find and download the greatest games out there",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pointer-events-none">{children}</body>
    </html>
  );
}
