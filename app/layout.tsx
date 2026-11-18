import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tether USDT — Official Token",
  description:
    "Tether USDT (USDT) is an ERC-20 token built on Ethereum. Max supply 560,015,276, 6 decimals, verified source code.",
  keywords: [
    "Tether USDT",
    "USDT",
    "ERC-20",
    "Ethereum",
    "token",
    "stablecoin",
    "0x6988D3cdDBB6Bd695D5c01d5229B1628B94E1FEB",
  ],
  authors: [{ name: "Tether" }],
  openGraph: {
    title: "Tether USDT — Official Token",
    description:
      "ERC-20 token on Ethereum. Max supply 560,015,276 · 6 decimals · verified source.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tether USDT — Official Token",
    description:
      "ERC-20 token on Ethereum. Max supply 560,015,276 · 6 decimals · verified source.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${mono.variable} h-full`}
    >
      <head>
        {/* Apply the saved theme before paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}",
          }}
        />
      </head>
      <body className="min-h-full bg-bg text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
