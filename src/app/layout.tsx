import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sih-guide-india.vercel.app"),
  title: {
    default: "SIH Guide India | Smart India Hackathon Roadmaps",
    template: "%s",
  },
  description:
    "Master the Smart India Hackathon with step-by-step guides, problem statement vetting, PPT templates, tech stack roadmaps, and insider finalist tips.",
  applicationName: "SIH Guide India",
  authors: [{ name: "SIH Guide India Mentors & Finalists" }],
  generator: "Next.js",
  keywords: [
    "Smart India Hackathon",
    "SIH preparation",
    "how to choose problem statement in sih",
    "how to clear internal college hackathon round",
    "smart india hackathon team roles",
    "sih idea presentation ppt format",
    "best tech stack for hackathon prototype",
    "how to prepare for hackathon as a beginner",
  ],
  referrer: "origin-when-cross-origin",
  creator: "SIH Guide India Team",
  publisher: "SIH Guide India",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sih-guide-india.vercel.app",
    siteName: "SIH Guide India",
    title: "SIH Guide India | Smart India Hackathon Preparation & Roadmaps",
    description:
      "Master the Smart India Hackathon with step-by-step guides, problem statement vetting, PPT templates, tech stack roadmaps, and insider finalist tips.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SIH Guide India | Smart India Hackathon Preparation & Roadmaps",
    description:
      "Master the Smart India Hackathon with step-by-step guides, problem statement vetting, PPT templates, tech stack roadmaps, and insider finalist tips.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-amber-500/20 selection:text-amber-300">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
