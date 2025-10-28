export const metadata = {
  title: "Cordoba AI — AI-Powered Software | برمجيات مدعومة بالذكاء الاصطناعي",
  description: "Production-ready software at record speed | نطوّر برمجيات جاهزة للإنتاج بسرعة قياسية—من دون التنازل عن الأمان أو الجودة أو المعايير.",
};

import Hero from "@/components/hero-home";
import ValueProps from "@/components/value-props";
import Capabilities from "@/components/capabilities";
import Process from "@/components/process";
import Outcomes from "@/components/outcomes";
import Engagements from "@/components/engagements";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <Capabilities />
      <Process />
      <Outcomes />
      <Engagements />
      <Cta />
    </>
  );
}
