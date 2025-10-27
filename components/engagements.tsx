"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Engagements() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("engagements.innovation"),
      description: t("engagements.innovationDesc"),
      bullets: [
        t("engagements.innovationBullet1"),
        t("engagements.innovationBullet2"),
        t("engagements.innovationBullet3"),
      ],
      gradient: "from-blue-500 to-cyan-500",
      iconBg: "from-blue-500 to-cyan-600",
      borderColor: "hover:border-blue-200",
    },
    {
      title: t("engagements.pmo"),
      description: t("engagements.pmoDesc"),
      bullets: [
        t("engagements.pmoBullet1"),
        t("engagements.pmoBullet2"),
        t("engagements.pmoBullet3"),
      ],
      gradient: "from-purple-500 to-pink-500",
      iconBg: "from-purple-500 to-pink-600",
      borderColor: "hover:border-purple-200",
    },
    {
      title: t("engagements.citizen"),
      description: t("engagements.citizenDesc"),
      bullets: [
        t("engagements.citizenBullet1"),
        t("engagements.citizenBullet2"),
        t("engagements.citizenBullet3"),
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
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={index}
                className={`group rounded-2xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 ${project.borderColor} flex flex-col`}
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
                <h3 className="mb-3 text-xl font-bold text-gray-900">
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
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button
                    className="text-sm font-semibold text-gray-400 cursor-not-allowed"
                    disabled
                    aria-label="Learn more (coming soon)"
                  >
                    Learn more →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
