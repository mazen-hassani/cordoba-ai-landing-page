"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      title: t("process.discover"),
      description: t("process.discoverDesc"),
      icon: "1",
    },
    {
      title: t("process.design"),
      description: t("process.designDesc"),
      icon: "2",
    },
    {
      title: t("process.build"),
      description: t("process.buildDesc"),
      icon: "3",
    },
    {
      title: t("process.assure"),
      description: t("process.assureDesc"),
      icon: "4",
    },
    {
      title: t("process.launch"),
      description: t("process.launchDesc"),
      icon: "5",
    },
    {
      title: t("process.evolve"),
      description: t("process.evolveDesc"),
      icon: "6",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("process.title")}
            </h2>
          </div>

          {/* Desktop: Horizontal stepper, Mobile: Vertical */}
          <div className="relative">
            {/* Mobile/Tablet: Vertical layout */}
            <div className="lg:hidden space-y-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  role="listitem"
                  aria-label={`Step ${index + 1}: ${step.title}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-sm shadow-lg">
                      {step.icon}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="mt-2 h-full w-0.5 bg-gradient-to-b from-blue-200 to-purple-200" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal layout */}
            <div className="hidden lg:block" role="list" aria-label="Process steps">
              <div className="grid grid-cols-6 gap-4">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="relative"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    role="listitem"
                    aria-label={`Step ${index + 1}: ${step.title}`}
                  >
                    {/* Connector line */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-5 h-0.5 w-full bg-gradient-to-r from-blue-200 to-purple-200 -z-10" />
                    )}

                    {/* Step card */}
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-sm shadow-lg">
                        {step.icon}
                      </div>
                      <h3 className="mb-2 text-base font-bold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
