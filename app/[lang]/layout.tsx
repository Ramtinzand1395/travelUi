import type { Metadata } from "next";

import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import localFont from "next/font/local";

const vazir = localFont({
  src: "../Vazir.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={params.lang === "fa" ? vazir.className : ""}
      lang={params.lang}
      dir={params.lang === "en-us" ? "ltr" : "rtl"}
    >
      <body>
        <Navbar lang={params.lang }/>
        <main className="relative overflow-hidden">{children}</main>
        <Footer lang={params.lang } />
      </body>
    </html>
  );
}
