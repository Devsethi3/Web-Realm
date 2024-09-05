import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "@/components/Navbar";
import ToasterProvider from "@/lib/ToastProvider";

const font = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Realm - Premier Web Design & Development Agency",
  description:
    "Web Realm is a top-tier web design and development agency, crafting digital experiences that inspire and engage. We specialize in creating modern, responsive websites that help businesses thrive online.",
  keywords:
    "Web design, Web development, Digital agency, Web Realm, Responsive websites, UX/UI design, SEO, Next.js",
  openGraph: {
    title: "Web Realm - Premier Web Design & Development Agency",
    description: "Crafting digital experiences that inspire and engage.",
    url: "https://www.webrealm.com",
    images: [
      {
        url: "/logo.svg",
        width: 800,
        height: 600,
        alt: "Web Realm Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Web Realm" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={clsx(font.className, "antialiased")}>
        <ToasterProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
