"use client";

import Link from "next/link";
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
      href: "/portfolio-manager",
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
      href: "/ticketing-system",
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
      href: "/ai-cms",
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
                <Link
                  href={project.href}
                  className="group flex h-full flex-col rounded-3xl bg-white text-slate-900 border border-slate-200/70 dark:bg-white dark:text-slate-900 dark:border-slate-200/20 p-6 shadow-sm hover:shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).analytics) {
                      (window as any).analytics.track("card_clicked", { card: project.title, to: project.href });
                    }
                  }}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${project.iconBg} text-white shadow-sm group-hover:shadow-md group-hover:scale-110 transition duration-300`}
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
                  <h3 className="mb-3 text-xl font-bold text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-sm text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 flex-1">
                    {project.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-indigo-600"
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
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn More link */}
                  <div className="mt-auto pt-5 border-t border-slate-200/70">
                    <span className="inline-flex items-center font-medium text-indigo-600 group-hover:translate-x-0.5 transition">
                      <span className="text-sm font-semibold">{t("engagements.learnMore")}</span>
                      <svg
                        className={`ms-1 size-4 ${language === "ar" ? "rotate-180" : ""}`}
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
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
