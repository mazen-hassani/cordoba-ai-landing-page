"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Engagements() {
  const { t, language } = useLanguage();

  const projects = [
    {
      title: t("engagements.portfolio"),
      description: t("engagements.portfolioDesc"),
      bullets: [
        t("engagements.portfolioBullet1"),
        t("engagements.portfolioBullet2"),
        t("engagements.portfolioBullet3"),
      ],
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-500 to-cyan-600",
      borderColor: "hover:border-blue-200",
    },
    {
      title: t("engagements.ticketing"),
      description: t("engagements.ticketingDesc"),
      bullets: [
        t("engagements.ticketingBullet1"),
        t("engagements.ticketingBullet2"),
        t("engagements.ticketingBullet3"),
      ],
      gradient: "from-purple-500 to-pink-500",
      iconBg: "from-purple-500 to-pink-600",
      borderColor: "hover:border-purple-200",
    },
    {
      title: t("engagements.cms"),
      description: t("engagements.cmsDesc"),
      bullets: [
        t("engagements.cmsBullet1"),
        t("engagements.cmsBullet2"),
        t("engagements.cmsBullet3"),
      ],
      gradient: "from-green-500 to-emerald-500",
      iconBg: "from-green-500 to-emerald-600",
      borderColor: "hover:border-green-200",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("engagements.title")}
            </h2>
          </div>

          {/* Project cards */}
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {projects.map((project, index) => (
              <li key={index} className="h-full">
                <article
                  className={`group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 ${project.borderColor}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.iconBg} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                    </svg>
                  </div>

                  {/* Title and description */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 flex-1">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-gray-700 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Optional Learn More link */}
                  <div className="mt-auto pt-5 border-t border-gray-100">
                    <a
                      className="group/link inline-flex items-center font-medium text-gray-400 cursor-not-allowed"
                      aria-label="Learn more (coming soon)"
                    >
                      <span className="text-sm font-semibold">{t("engagements.learnMore")}</span>
                      <svg
                        className={`ms-1 size-4 ${language === "ar" ? "rotate-180" : ""} transition-transform group-hover/link:translate-x-0.5 ${language === "ar" ? "group-hover/link:-translate-x-0.5" : ""}`}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M9 5l7 7-7 7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
