import {  Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const heading = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-head",
});

export const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "BlackGold Advisory | Financial & Business Advisory Firm in Ghana",
  description:
    "BlackGold Advisory helps startups, SMEs, corporations, and institutions achieve sustainable growth through accounting, financial advisory, tax, compliance, financial modeling, and investment readiness services.",
  keywords: [
    "Financial advisory Ghana",
    "Business advisory Ghana",
    "Accounting services",
    "Tax consulting",
    "Financial modeling",
    "Investment advisory",
    "Business consultants Ghana",
    "Corporate finance",
    "SME consulting",
    "Financial planning",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Financial Clarity. Strategic Growth. Sustainable Success.",
    description:
      "Expert accounting, financial advisory, compliance, financial modeling, and investment support for growing businesses.",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} h-full antialiased`}
    >
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
