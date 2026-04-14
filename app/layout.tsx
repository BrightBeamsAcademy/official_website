import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home - BRIGHT BEAMS ACADEMY",
  description: "Bright Beams Academy is a premier bilingual kindergarten located in Redmond, Washington, dedicated to nurturing the growth and development of children aged 0 to 5 years.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
