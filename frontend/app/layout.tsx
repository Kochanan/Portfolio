import type { Metadata } from "next";
import { Manrope, Noto_Sans_Thai, Syne } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoThai = Noto_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "M.6 University Portfolio",
  description:
    "A cool blue portfolio template for M.6 students applying to university. Edit data/contact.json and data/projects.json.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${manrope.variable} ${notoThai.variable} h-full antialiased`}
    >
      <body className="bg-atmosphere min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
