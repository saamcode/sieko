import type { Metadata } from "next";
import { Brico, Aeonik } from "@/utils/customFonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sieko",
  description: "Bantu UMKM kembangin bisnisnya sampe sukses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${Brico.variable} ${Aeonik.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
