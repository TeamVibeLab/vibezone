import type { Metadata } from "next";
import "../styles/globals.css";

import Footer from "@/components/Footer/Footer"

export const metadata: Metadata = {
  title: "VibeZone",
  description: "Знаходь найкращі місця для відпочинку, натхнення та розваг у Львові",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}