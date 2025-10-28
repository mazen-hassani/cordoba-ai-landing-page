"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ProductHero from "@/components/products/product-hero";
import PillarsGrid from "@/components/products/pillars-grid";
import FeatureList from "@/components/products/feature-list";
import StatsStrip from "@/components/products/stats-strip";
import CtaBand from "@/components/products/cta-band";
import FaqList from "@/components/products/faq-list";

export default function AICMSPage() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("cms.pillars.title1"),
      description: t("cms.pillars.desc1"),
    },
    {
      title: t("cms.pillars.title2"),
      description: t("cms.pillars.desc2"),
    },
    {
      title: t("cms.pillars.title3"),
      description: t("cms.pillars.desc3"),
    },
    {
      title: t("cms.pillars.title4"),
      description: t("cms.pillars.desc4"),
    },
  ];

  const capabilities = [
    {
      title: t("cms.capabilities.ai"),
      description: t("cms.capabilities.aiDesc"),
    },
    {
      title: t("cms.capabilities.components"),
      description: t("cms.capabilities.componentsDesc"),
    },
    {
      title: t("cms.capabilities.media"),
      description: t("cms.capabilities.mediaDesc"),
    },
    {
      title: t("cms.capabilities.seo"),
      description: t("cms.capabilities.seoDesc"),
    },
    {
      title: t("cms.capabilities.localization"),
      description: t("cms.capabilities.localizationDesc"),
    },
    {
      title: t("cms.capabilities.publishing"),
      description: t("cms.capabilities.publishingDesc"),
    },
  ];

  const stats = [
    {
      value: t("cms.outcomes.stat1"),
      label: t("cms.outcomes.stat1Desc"),
    },
    {
      value: t("cms.outcomes.stat2"),
      label: t("cms.outcomes.stat2Desc"),
    },
    {
      value: t("cms.outcomes.stat3"),
      label: t("cms.outcomes.stat3Desc"),
    },
  ];

  const faqs = [
    {
      question: t("cms.faq.q1"),
      answer: t("cms.faq.a1"),
    },
    {
      question: t("cms.faq.q2"),
      answer: t("cms.faq.a2"),
    },
    {
      question: t("cms.faq.q3"),
      answer: t("cms.faq.a3"),
    },
    {
      question: t("cms.faq.q4"),
      answer: t("cms.faq.a4"),
    },
    {
      question: t("cms.faq.q5"),
      answer: t("cms.faq.a5"),
    },
  ];

  return (
    <>
      <ProductHero
        title={t("cms.hero.title")}
        subtitle={t("cms.hero.subtitle")}
        cta1Text={t("cms.hero.cta1")}
        cta2Text={t("cms.hero.cta2")}
        productId="ai-cms"
      />
      <PillarsGrid pillars={pillars} />
      <FeatureList
        title={t("cms.capabilities.title")}
        features={capabilities}
      />

      {/* Templates */}
      <section className="relative bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("cms.templates.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("cms.templates.gov")}
                </h3>
              </div>
              <div className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("cms.templates.corporate")}
                </h3>
              </div>
              <div className="group rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <svg
                    className="h-12 w-12 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t("cms.templates.campaign")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("cms.security.title")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
                <p className="text-gray-700">{t("cms.security.item1")}</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
                <p className="text-gray-700">{t("cms.security.item2")}</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
                <p className="text-gray-700">{t("cms.security.item3")}</p>
              </div>
              <div className="rounded-xl bg-gray-50 p-4 shadow-sm">
                <p className="text-gray-700">{t("cms.security.item4")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip title={t("cms.outcomes.title")} stats={stats} />
      <CtaBand
        title={t("cms.cta.title")}
        buttonText={t("cms.cta.button")}
        productId="ai-cms"
      />
      <FaqList faqs={faqs} />
    </>
  );
}
