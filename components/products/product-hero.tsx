"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

interface ProductHeroProps {
  title: string;
  subtitle: string;
  cta1Text: string;
  cta2Text: string;
  productId: string;
}

export default function ProductHero({
  title,
  subtitle,
  cta1Text,
  cta2Text,
  productId,
}: ProductHeroProps) {
  const { language } = useLanguage();

  const handleCtaClick = (ctaSlot: string) => {
    if (typeof window !== "undefined" && (window as any).analytics?.track) {
      (window as any).analytics.track("product_cta_clicked", {
        product: productId,
        cta: ctaSlot,
        lang: document?.documentElement?.lang || language,
      });
    }
  };

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              {title}
            </h1>
            <p className="mb-8 text-xl text-gray-600 leading-relaxed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={{
                  pathname: "/contact",
                  query: { product: productId, cta: "hero_primary" },
                }}
                onClick={() => handleCtaClick("hero_primary")}
                className="btn group bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:scale-105 font-semibold transition-all duration-300"
              >
                <span className="inline-flex items-center gap-2">
                  {cta1Text}
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
                </span>
              </Link>
              <Link
                href={{
                  pathname: "/contact",
                  query: { product: productId, cta: "hero_secondary" },
                }}
                onClick={() => handleCtaClick("hero_secondary")}
                className="btn bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:scale-105 border border-gray-200 transition-all duration-300"
              >
                {cta2Text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
