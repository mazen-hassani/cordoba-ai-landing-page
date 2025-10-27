"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Outcomes() {
  const { t } = useLanguage();

  const kpis = [
    {
      value: t("outcomes.kpi1"),
      label: t("outcomes.kpi1Desc"),
      icon: (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={12} cy={12} r={10} />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      srLabel: "Time to first release",
    },
    {
      value: t("outcomes.kpi2"),
      label: t("outcomes.kpi2Desc"),
      icon: (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      srLabel: "Uptime targets",
    },
    {
      value: t("outcomes.kpi3"),
      label: t("outcomes.kpi3Desc"),
      icon: (
        <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 6 10-12h-9l1-6z" />
        </svg>
      ),
      srLabel: "Delivery speed",
    },
  ];

  return (
    <section id="outcomes" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-3">
              {t("outcomes.title")}
            </h2>
            <p className="text-lg text-gray-600">
              Proven delivery windows, reliability targets, and real speed gains—without compromising quality.
            </p>
          </div>

          {/* KPI Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Gradient border wrapper */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 blur transition duration-300 group-hover:opacity-20" />

                {/* Card */}
                <div className="relative rounded-2xl border border-gray-200 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
                  {/* Icon badge */}
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/30">
                    {kpi.icon}
                  </div>

                  {/* KPI data */}
                  <dl>
                    <dt className="sr-only">{kpi.srLabel}</dt>
                    <dd className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {kpi.value}
                    </dd>
                    <dd className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {kpi.label}
                    </dd>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div
            className="relative mx-auto max-w-3xl mt-16 md:mt-24"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 md:p-12 border border-blue-100 shadow-xl">
              <div className="mb-6">
                <svg
                  className="h-8 w-8 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote>
                <p className="text-xl text-gray-900 font-medium leading-relaxed mb-6">
                  {t("outcomes.quote")}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {t("outcomes.quoteAuthor").charAt(0)}
                  </div>
                  <div>
                    <cite className="block text-sm font-semibold text-gray-900 not-italic">
                      {t("outcomes.quoteAuthor")}
                    </cite>
                    <p className="text-sm text-gray-600">
                      {t("outcomes.quoteCompany")}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
