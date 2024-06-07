import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/shadcn/theme/provider";
import Header from "@/components/layout/header";
import "./globals.css";

import { cn } from "@/lib/utils";
import GoogleApi from "@/components/layout/google-api";
import Footer from "@/components/layout/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Surge Rankings with AlphaRank: One-Click SEO Mastery with Unique Algorithm & GPT-4 TURBO Synergy",
  description:
    "Elevate your SEO game with AlphaRank – the ultimate tool blending our proprietary algorithms with GPT-4 TURBO enhancements for unmatched performance. 100M+ keyword insights, and one-click SEO enhancements. Experience a 50%+ traffic surge, top-10 ranking assurance, and hassle-free SEO management that pushes you ahead of the competition.",
  keywords:
    "AlphaRank SEO, SEO Optimization Software, SEO Score Improvement, SEO Content Creation, AI SEO, SEO Audit Tool, Technical SEO, SEO Hosting Service, On-Page SEO Optimization, Content SEO Enhancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleApi />
      </head>
      <body
        className={cn(
          "bg-background font-sans antialiased flex flex-col pb-56",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
