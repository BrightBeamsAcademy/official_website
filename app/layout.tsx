import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

// Latin files only. next/font/google pulls the full CJK face for this family
// (hundreds of preloads), which is larger than the render-blocking stylesheet it replaces.
const mPlusRounded = localFont({
  src: [
    { path: "./fonts/m-plus-rounded-1c-latin-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/m-plus-rounded-1c-latin-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/m-plus-rounded-1c-latin-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/m-plus-rounded-1c-latin-800.woff2", weight: "800", style: "normal" },
  ],
  display: "swap",
  variable: "--font-mplus",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={mPlusRounded.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
