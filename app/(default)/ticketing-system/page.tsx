"use client";

import { useLanguage } from "@/lib/LanguageContext";
import ProductHero from "@/components/products/product-hero";
import PillarsGrid from "@/components/products/pillars-grid";
import FeatureList from "@/components/products/feature-list";
import StatsStrip from "@/components/products/stats-strip";
import CtaBand from "@/components/products/cta-band";
import FaqList from "@/components/products/faq-list";

export default function TicketingSystemPage() {
  const { t } = useLanguage();

  const pillars = [
    {
      title: t("ticketing.pillars.title1"),
      description: t("ticketing.pillars.desc1"),
    },
    {
      title: t("ticketing.pillars.title2"),
      description: t("ticketing.pillars.desc2"),
    },
    {
      title: t("ticketing.pillars.title3"),
      description: t("ticketing.pillars.desc3"),
    },
    {
      title: t("ticketing.pillars.title4"),
      description: t("ticketing.pillars.desc4"),
    },
  ];

  const capabilities = [
    {
      title: t("ticketing.capabilities.types"),
      description: t("ticketing.capabilities.typesDesc"),
    },
    {
      title: t("ticketing.capabilities.workflows"),
      description: t("ticketing.capabilities.workflowsDesc"),
    },
    {
      title: t("ticketing.capabilities.slas"),
      description: t("ticketing.capabilities.slasDesc"),
    },
    {
      title: t("ticketing.capabilities.channels"),
      description: t("ticketing.capabilities.channelsDesc"),
    },
    {
      title: t("ticketing.capabilities.kb"),
      description: t("ticketing.capabilities.kbDesc"),
    },
    {
      title: t("ticketing.capabilities.analytics"),
      description: t("ticketing.capabilities.analyticsDesc"),
    },
  ];

  const stats = [
    {
      value: t("ticketing.outcomes.stat1"),
      label: t("ticketing.outcomes.stat1Desc"),
    },
    {
      value: t("ticketing.outcomes.stat2"),
      label: t("ticketing.outcomes.stat2Desc"),
    },
    {
      value: t("ticketing.outcomes.stat3"),
      label: t("ticketing.outcomes.stat3Desc"),
    },
  ];

  const faqs = [
    {
      question: t("ticketing.faq.q1"),
      answer: t("ticketing.faq.a1"),
    },
    {
      question: t("ticketing.faq.q2"),
      answer: t("ticketing.faq.a2"),
    },
    {
      question: t("ticketing.faq.q3"),
      answer: t("ticketing.faq.a3"),
    },
    {
      question: t("ticketing.faq.q4"),
      answer: t("ticketing.faq.a4"),
    },
    {
      question: t("ticketing.faq.q5"),
      answer: t("ticketing.faq.a5"),
    },
  ];

  return (
    <>
      <ProductHero
        title={t("ticketing.hero.title")}
        subtitle={t("ticketing.hero.subtitle")}
        cta1Text={t("ticketing.hero.cta1")}
        cta2Text={t("ticketing.hero.cta2")}
        productId="ticketing-system"
      />
      <PillarsGrid pillars={pillars} />
      <FeatureList
        title={t("ticketing.capabilities.title")}
        features={capabilities}
      />

      {/* Automation Examples */}
      <section className="relative bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("ticketing.automation.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{t("ticketing.automation.ex1")}</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{t("ticketing.automation.ex2")}</p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="text-gray-700">{t("ticketing.automation.ex3")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="relative bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-16">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
              {t("ticketing.integrations.title")}
            </h2>
            <p className="text-center text-gray-600">
              {t("ticketing.integrations.list")}
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-16 md:py-20">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
              {t("ticketing.timeline.title")}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">
                  {t("ticketing.timeline.week1")}
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">
                  {t("ticketing.timeline.week2")}
                </p>
              </div>
              <div className="rounded-xl bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold text-blue-600">
                  {t("ticketing.timeline.week3")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsStrip title={t("ticketing.outcomes.title")} stats={stats} />
      <CtaBand
        title={t("ticketing.cta.title")}
        buttonText={t("ticketing.cta.button")}
        productId="ticketing-system"
      />
      <FaqList faqs={faqs} />
    </>
  );
}
