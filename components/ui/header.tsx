"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1"
              >
                {t("engagements.title")}
                <svg
                  className={`h-4 w-4 transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                  className="absolute top-full mt-2 w-64 rounded-xl bg-white shadow-xl border border-gray-100 py-2"
                >
                  <Link
                    href="/portfolio-manager"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-semibold">{t("engagements.portfolio")}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {t("engagements.portfolioDesc").substring(0, 50)}...
                    </div>
                  </Link>
                  <Link
                    href="/ticketing-system"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-semibold">{t("engagements.ticketing")}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {t("engagements.ticketingDesc").substring(0, 50)}...
                    </div>
                  </Link>
                  <Link
                    href="/ai-cms"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                  >
                    <div className="font-semibold">{t("engagements.cms")}</div>
                    <div className="text-xs text-gray-500 mt-0.5">
                      {t("engagements.cmsDesc").substring(0, 50)}...
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Desktop CTA */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:scale-105 font-semibold transition-all duration-300"
              >
                {t("header.cta")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
