"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Outcomes() {
  const { t } = useLanguage();

  const kpis = [
    {
      value: t("outcomes.kpi1"),
      label: t("outcomes.kpi1Desc"),
    },
    {
      value: t("outcomes.kpi2"),
      label: t("outcomes.kpi2Desc"),
    },
    {
      value: t("outcomes.kpi3"),
      label: t("outcomes.kpi3Desc"),
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("outcomes.title")}
            </h2>
          </div>

          {/* KPIs */}
          <dl className="grid gap-8 sm:grid-cols-3 mb-16" role="list">
            {kpis.map((kpi, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                role="listitem"
              >
                <dt className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent md:text-5xl">
                  {kpi.value}
                </dt>
                <dd className="mt-2 text-sm text-gray-600 font-medium">
                  {kpi.label}
                </dd>
              </div>
            ))}
          </dl>

          {/* Testimonial */}
          <div
            className="relative mx-auto max-w-3xl"
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
