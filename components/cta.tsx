import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-[#34D1BF] blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-[#E9DCC9] [border-image:linear-gradient(to_right,transparent,--theme(--color-brass-gold/.7),transparent)1] md:mb-12 md:text-4xl">
              Ready to Transform Your Digital Future?
            </h2>
            <p className="mb-8 text-lg text-[#C6A770]">
              Join organizations that trust Cordoba AI to turn complexity into clarity and ideas into outcomes.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="btn group mb-4 w-full bg-linear-to-t from-[#34D1BF] to-[#34D1BF] bg-[length:100%_100%] bg-[bottom] text-[#0A0F1F] shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto font-semibold"
                href="#0"
              >
                <span className="relative inline-flex items-center">
                  Start Your Journey{" "}
                  <span className="ml-1 tracking-normal text-[#0A0F1F] opacity-70 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
