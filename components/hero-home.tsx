"use client";

import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroHome() {
  const { t } = useLanguage();
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar01}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar02}
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar03}
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar04}
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar05}
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src={Avatar06}
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-primary/.6),transparent)1] md:text-6xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              {t("hero.title")} <br className="max-lg:hidden" />
              {t("hero.titleSub")}
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-600 leading-relaxed"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                {t("hero.description")}
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-[length:100%_100%] bg-[bottom] text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105 sm:mb-0 sm:w-auto font-semibold transition-all duration-300"
                    href="/contact"
                  >
                    <span className="relative inline-flex items-center">
                      {t("hero.cta1")}{" "}
                      <span className="ml-1 tracking-normal transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-900 shadow-sm hover:bg-gray-50 hover:scale-105 sm:ml-4 sm:w-auto border border-gray-200 transition-all duration-300"
                    href="/contact"
                  >
                    {t("hero.cta2")}
                  </a>
                </div>
                {/* Badges */}
                <div
                  className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600"
                  data-aos="zoom-y-out"
                  data-aos-delay={600}
                >
                  <span className="inline-flex items-center">{t("hero.badge1")}</span>
                  <span className="text-gray-400">•</span>
                  <span className="inline-flex items-center">{t("hero.badge2")}</span>
                  <span className="text-gray-400">•</span>
                  <span className="inline-flex items-center">{t("hero.badge3")}</span>
                  <span className="text-gray-400">•</span>
                  <span className="inline-flex items-center">{t("hero.badge4")}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 px-5 py-3 shadow-2xl border border-gray-800 overflow-hidden before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-gradient-to-br before:from-blue-500/10 before:to-purple-500/10">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,var(--color-primary)_4.5px,transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  production
                </span>
              </div>
              <div className="font-mono text-sm text-gray-400 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-blue-400">
                  $ npm run deploy
                </span>{" "}
                <span className="animate-[code-2_10s_infinite]">
                  --production
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                  ✓ Building application
                </span>{" "}
                <span className="animate-[code-4_10s_infinite] text-green-400">
                  Done in 2.4s
                </span>
                <br />
                <span className="animate-[code-5_10s_infinite]">
                  ✓ Optimizing bundle
                </span>{" "}
                <span className="animate-[code-4_10s_infinite] text-green-400">
                  -40% size reduction
                </span>
                <br />
                <br />
                <span className="animate-[code-6_10s_infinite] text-purple-400">
                  ✓ Deployed to production
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite] text-gray-500">
                  https://app.cordoba-ai.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
