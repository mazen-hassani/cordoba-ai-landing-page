"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Capabilities() {
  const { t } = useLanguage();

  const capabilities = [
    {
      title: t("capabilities.digitalServices"),
      description: t("capabilities.digitalServicesDesc"),
      icon: (
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
          <rect x={3} y={3} width={18} height={18} rx={2} />
          <path d="M3 9h18M9 21V9" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "hover:border-blue-200",
    },
    {
      title: t("capabilities.internalPlatforms"),
      description: t("capabilities.internalPlatformsDesc"),
      icon: (
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
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      gradient: "from-purple-500 to-indigo-500",
      borderColor: "hover:border-purple-200",
    },
    {
      title: t("capabilities.dataAI"),
      description: t("capabilities.dataAIDesc"),
      icon: (
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
          <polyline points="7.5 4.21 12 6.81 16.5 4.21" />
          <polyline points="7.5 19.79 7.5 14.6 3 12" />
          <polyline points="21 12 16.5 14.6 16.5 19.79" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1={12} y1={22.08} x2={12} y2={12} />
        </svg>
      ),
      gradient: "from-orange-500 to-red-500",
      borderColor: "hover:border-orange-200",
    },
    {
      title: t("capabilities.integrations"),
      description: t("capabilities.integrationsDesc"),
      icon: (
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
          <path d="M21 12a9 9 0 11-6.219-8.56" />
          <path d="M15 2h6v6M9 15l12-12" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500",
      borderColor: "hover:border-green-200",
    },
    {
      title: t("capabilities.mobileWeb"),
      description: t("capabilities.mobileWebDesc"),
      icon: (
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
          <rect x={5} y={2} width={14} height={20} rx={2} ry={2} />
          <path d="M12 18h.01" />
        </svg>
      ),
      gradient: "from-pink-500 to-rose-500",
      borderColor: "hover:border-pink-200",
    },
  ];

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("capabilities.title")}
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, index) => (
              <article
                key={index}
                className={`group rounded-2xl bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${capability.borderColor}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${capability.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {capability.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {capability.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
