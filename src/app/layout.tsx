import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "@/components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "../components/footer";
import { baseUrl } from "./sitemap";
import BlackHoleBackground from "@/components/BlackHoleBackground";

const meta = {
  title: "Eliude Francisco",
  description: "",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: meta.title,
    template: "%s | Eliude Francisco",
  },
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: baseUrl,
    siteName: meta.title,
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Eliude Francisco",
    "Eliude",
    "Francisco",
    "eliudefrancisco.com",
    "Back-End Developer",
    "Back-End",
    "Developer",
    "Software",
    "Engineer",
    "Angola",
    "Luanda",
    "Vercel",
    "Next.js",
    "TailwindCSS",
    "Blog",
  ],
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

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <BlackHoleBackground />
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <div className="mt-10">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
