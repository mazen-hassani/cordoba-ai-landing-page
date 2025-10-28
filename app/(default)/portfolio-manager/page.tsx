"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ProductHero from "@/components/products/product-hero";
import PillarsGrid from "@/components/products/pillars-grid";
import FeatureList from "@/components/products/feature-list";
import StatsStrip from "@/components/products/stats-strip";
import CtaBand from "@/components/products/cta-band";
import FaqList from "@/components/products/faq-list";

export default function PortfolioManagerPage() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("portfolio.pillars.title1"),
      description: t("portfolio.pillars.desc1"),
    },
    {
      title: t("portfolio.pillars.title2"),
      description: t("portfolio.pillars.desc2"),
    },
    {
      title: t("portfolio.pillars.title3"),
      description: t("portfolio.pillars.desc3"),
    },
    {
      title: t("portfolio.pillars.title4"),
      description: t("portfolio.pillars.desc4"),
    },
  ];

  const features = [
    {
      title: t("portfolio.features.planning"),
      description: t("portfolio.features.planningDesc"),
    },
    {
      title: t("portfolio.features.control"),
      description: t("portfolio.features.controlDesc"),
    },
    {
      title: t("portfolio.features.financials"),
      description: t("portfolio.features.financialsDesc"),
    },
    {
      title: t("portfolio.features.benefits"),
      description: t("portfolio.features.benefitsDesc"),
    },
    {
      title: t("portfolio.features.resources"),
      description: t("portfolio.features.resourcesDesc"),
    },
    {
      title: t("portfolio.features.reporting"),
      description: t("portfolio.features.reportingDesc"),
    },
  ];

  const stats = [
    {
      value: t("portfolio.outcomes.stat1"),
      label: t("portfolio.outcomes.stat1Desc"),
    },
    {
      value: t("portfolio.outcomes.stat2"),
      label: t("portfolio.outcomes.stat2Desc"),
    },
    {
      value: t("portfolio.outcomes.stat3"),
      label: t("portfolio.outcomes.stat3Desc"),
    },
  ];

  const faqs = [
    {
      question: t("portfolio.faq.q1"),
      answer: t("portfolio.faq.a1"),
    },
    {
      question: t("portfolio.faq.q2"),
      answer: t("portfolio.faq.a2"),
    },
    {
      question: t("portfolio.faq.q3"),
      answer: t("portfolio.faq.a3"),
    },
    {
      question: t("portfolio.faq.q4"),
      answer: t("portfolio.faq.a4"),
    },
    {
      question: t("portfolio.faq.q5"),
      answer: t("portfolio.faq.a5"),
    },
  ];

  return (
    <>
      <ProductHero
        title={t("portfolio.hero.title")}
        subtitle={t("portfolio.hero.subtitle")}
        cta1Text={t("portfolio.hero.cta1")}
        cta2Text={t("portfolio.hero.cta2")}
        productId="portfolio-manager"
      />
      <PillarsGrid pillars={pillars} />
      <FeatureList title={t("portfolio.features.title")} features={features} />

      {/* Integrations */}
      <section className="relative bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
              {t("portfolio.integrations.title")}
            </h2>
            <p className="text-center text-gray-600">
              {t("portfolio.integrations.list")}
            </p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("portfolio.howItWorks.title")}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                  1
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t("portfolio.howItWorks.step1")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("portfolio.howItWorks.step1Desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                  2
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t("portfolio.howItWorks.step2")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("portfolio.howItWorks.step2Desc")}
                </p>
              </div>
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-bold text-lg">
                  3
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {t("portfolio.howItWorks.step3")}
                </h3>
                <p className="text-sm text-gray-600">
                  {t("portfolio.howItWorks.step3Desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip title={t("portfolio.outcomes.title")} stats={stats} />

      {/* Use Cases */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("portfolio.useCases.title")}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                {t("portfolio.useCases.gov")}
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                {t("portfolio.useCases.strategy")}
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                {t("portfolio.useCases.it")}
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                {t("portfolio.useCases.capital")}
              </span>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                {t("portfolio.useCases.transformation")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="relative bg-gray-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("portfolio.security.title")}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-gray-700">{t("portfolio.security.item1")}</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-gray-700">{t("portfolio.security.item2")}</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-gray-700">{t("portfolio.security.item3")}</p>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm">
                <p className="text-gray-700">{t("portfolio.security.item4")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title={t("portfolio.cta.title")}
        buttonText={t("portfolio.cta.button")}
        productId="portfolio-manager"
      />
      <FaqList faqs={faqs} />
    </>
  );
}
