import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://rsroff.dev"),
  title: "Rohan Singh Rawat — Senior Software Engineer",
  description:
    "Portfolio of Rohan Singh Rawat, Senior Software Engineer with 5+ years building production web applications across hospitality, blockchain, and e-commerce.",
  keywords: [
    "Senior Software Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "Web3",
    "Blockchain",
    "Node.js",
  ],
  authors: [{ name: "Rohan Singh Rawat", url: "https://linkedin.com/in/rsroff" }],
  openGraph: {
    type: "website",
    title: "Rohan Singh Rawat — Senior Software Engineer",
    description:
      "Senior software engineer building production apps at scale — hospitality platforms, crypto dashboards, and more.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rohan Singh Rawat Portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Singh Rawat — Senior Software Engineer",
    description:
      "Senior software engineer building production apps at scale — hospitality platforms, crypto dashboards, and more.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
