"use client";

interface Pillar {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface PillarsGridProps {
  pillars: Pillar[];
}

export default function PillarsGrid({ pillars }: PillarsGridProps) {
  return (
    <section className="relative bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {pillar.icon && (
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                    {pillar.icon}
                  </div>
                )}
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
