"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

interface CtaBandProps {
  title: string;
  buttonText: string;
  productId: string;
}

export default function CtaBand({
  title,
  buttonText,
  productId,
}: CtaBandProps) {
  const { language } = useLanguage();

  const handleCtaClick = () => {
    if (typeof window !== "undefined" && (window as any).analytics?.track) {
      (window as any).analytics.track("product_cta_clicked", {
        product: productId,
        cta: "cta_band",
        lang: document?.documentElement?.lang || language,
      });
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 md:p-12 text-center shadow-2xl">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>
            <Link
              href={{
                pathname: "/contact",
                query: { product: productId, cta: "cta_band" },
              }}
              onClick={handleCtaClick}
              className="btn group inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:scale-105 font-semibold transition-all duration-300"
            >
              {buttonText}
              <svg
                className={`size-4 ${language === "ar" ? "rotate-180" : ""} transition-transform group-hover:translate-x-0.5`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
