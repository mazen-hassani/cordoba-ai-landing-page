"use client";

import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import { useLanguage } from "@/lib/LanguageContext";

export default function Cta() {
  const { t } = useLanguage();
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-3xl text-center shadow-2xl border border-gray-200 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30"
          data-aos="zoom-y-out"
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>

          {/* Glow effects */}
          <div
            className="absolute top-0 left-1/4 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="px-4 py-16 md:px-12 md:py-24">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              {t("cta.title")}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 leading-relaxed md:text-xl">
              {t("cta.description")}
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                className="btn group w-full bg-gradient-to-r from-blue-600 to-purple-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105 sm:w-auto font-semibold transition-all duration-300"
                href="/contact"
              >
                <span className="relative inline-flex items-center">
                  {t("cta.button")}
                  <span className="ml-2 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
