import "./css/style.css";

import { Inter, Cairo } from "next/font/google";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata = {
  title: "Cordoba AI — AI-Powered Software. Enterprise-Grade Delivery.",
  description: "Production-ready software at record speed. We combine AI agents, expert engineers, and proven processes to deliver secure, scalable solutions—from idea to launch in weeks, not months.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cairo.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
