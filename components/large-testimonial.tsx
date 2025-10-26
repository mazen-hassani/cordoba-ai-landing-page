import Image from "next/image";
import TestimonialImg from "@/public/images/large-testimonial.jpg";

export default function LargeTestimonial() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="space-y-6 text-center">
            {/* Rating stars */}
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-6 w-6 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 1l2.5 6.5L19 8l-5.5 4.5L15 19l-5-3.5L5 19l1.5-6.5L1 8l6.5-.5z" />
                </svg>
              ))}
            </div>

            <div className="relative inline-flex">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full"></div>
              <Image
                className="rounded-full ring-4 ring-white shadow-xl relative z-10"
                src={TestimonialImg}
                width={64}
                height={64}
                alt="Large testimonial"
              />
            </div>

            <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              "We shipped our MVP in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">3 weeks</span> instead of 3 months. The quality and performance exceeded our expectations."
            </p>

            <div className="pt-4">
              <div className="text-base font-semibold text-gray-900">David Chen</div>
              <div className="text-sm text-gray-600">
                CTO at TechFlow · Series B
              </div>
            </div>

            {/* Company logos */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by leading teams</p>
              <div className="flex justify-center gap-8 items-center opacity-50 grayscale">
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
                <div className="h-8 w-24 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
