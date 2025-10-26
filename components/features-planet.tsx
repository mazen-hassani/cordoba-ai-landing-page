import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gradient-to-b before:from-gray-50 before:to-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <div className="mb-4 inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-semibold text-blue-900">
              ⚡ Modern Stack
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
              Built for Performance
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Enterprise-grade software development with cutting-edge AI technology.
              Fast, reliable, and scalable solutions that grow with your business.
            </p>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-500 before:to-purple-500/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-primary),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <Image
                      className="absolute -left-28 top-16 z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg01}
                      width={253}
                      height={56}
                      alt="Tag 01"
                    />
                    <Image
                      className="absolute left-56 top-7 z-10 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30 transition-opacity duration-500"
                      src={PlanetTagImg02}
                      width={241}
                      height={56}
                      alt="Tag 02"
                    />
                    <Image
                      className="absolute -left-20 bottom-24 z-10 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25 transition-opacity duration-500"
                      src={PlanetTagImg03}
                      width={243}
                      height={56}
                      alt="Tag 03"
                    />
                    <Image
                      className="absolute bottom-32 left-64 z-10 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80 transition-opacity duration-500"
                      src={PlanetTagImg04}
                      width={251}
                      height={56}
                      alt="Tag 04"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-2xl">
            <article className="group bg-white p-8 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 transition-all duration-300 rounded-tl-2xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Modern Stack
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built with the latest technologies. React, TypeScript, Node.js, Python, and AI frameworks that deliver exceptional performance.
              </p>
            </article>

            <article className="group bg-white p-8 hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 transition-all duration-300 rounded-tr-2xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                  <path d="M17 2.5 L7 12.5 L3 8.5 L4.5 7 L7 9.5 L15.5 1 Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Tested & Secure
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive testing suite, security audits, and compliance certifications. Code you can trust in production.
              </p>
            </article>

            <article className="group bg-white p-8 hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                  <circle cx="10" cy="10" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M10 6 L10 10 L13 13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized builds, edge deployment, and CDN integration. Sub-100ms response times globally.
              </p>
            </article>

            <article className="group bg-white p-8 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 transition-all duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                  <rect x="3" y="5" width="14" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M6 9 L11 9 M6 12 L14 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                AI-Powered
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent code generation, automated testing, and smart deployments. Build 10x faster with AI assistance.
              </p>
            </article>

            <article className="group bg-white p-8 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 transition-all duration-300 rounded-bl-2xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/50 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                  <path d="M4 10 L8 6 L8 14 Z M12 10 L16 6 L16 14 Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                Auto Scaling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Handle traffic spikes effortlessly. From zero to millions of requests with automatic resource management.
              </p>
            </article>

            <article className="group bg-white p-8 hover:bg-gradient-to-br hover:from-pink-50 hover:to-rose-50 transition-all duration-300 rounded-br-2xl">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor">
                  <path d="M10 3 L13 9 L19 10 L14.5 14.5 L15.5 20 L10 17 L4.5 20 L5.5 14.5 L1 10 L7 9 Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Expert engineering team available around the clock. Real humans, real solutions, real fast.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
