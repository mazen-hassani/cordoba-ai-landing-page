export const metadata = {
  title: "Cordoba AI — AI-Powered Software. Enterprise-Grade Delivery.",
  description: "Production-ready software at record speed. We combine AI agents, expert engineers, and proven processes to deliver secure, scalable solutions—from idea to launch in weeks, not months.",
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
