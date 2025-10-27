"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ValueProps() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("valueProps.title")}
            </h2>
          </div>

          {/* 2x2 Grid on tablet, 4-in-a-row on desktop */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Card 1: Speed */}
            <article
              className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              data-aos="fade-up"
              data-aos-delay={0}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 6 10-12h-9l1-6z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("valueProps.speed")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("valueProps.speedDesc")}
              </p>
            </article>

            {/* Card 2: Quality */}
            <article
              className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("valueProps.quality")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("valueProps.qualityDesc")}
              </p>
            </article>

            {/* Card 3: Security */}
            <article
              className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("valueProps.security")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("valueProps.securityDesc")}
              </p>
            </article>

            {/* Card 4: Scale */}
            <article
              className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-indigo-200"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1={12} y1={22.08} x2={12} y2={12} />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {t("valueProps.scale")}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t("valueProps.scaleDesc")}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
