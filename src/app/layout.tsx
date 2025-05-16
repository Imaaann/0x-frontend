import Footer from "@/components/Footer";
import "./globals.css";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";

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
      <body className="pointer-events-none" cz-shortcut-listen="false">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
