"use client";

interface Stat {
  value: string;
  label: string;
}

interface StatsStripProps {
  title: string;
  stats: Stat[];
}

export default function StatsStrip({ title, stats }: StatsStripProps) {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-16 md:py-20">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            {title}
          </h2>
          <dl className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/80 backdrop-blur p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </dd>
                <dd className="text-sm text-gray-600">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
