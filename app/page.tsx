import Hero from "@/components/Hero";
import About from "@/components/About";
import JoinSection from "@/components/JoinSection";
import Onboarding from "@/components/Onboarding";
import Costs from "@/components/Costs";
import CalendarSection from "@/components/CalendarSection";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <JoinSection />
      <Onboarding />
      <Costs />
      <CalendarSection />
      <Contact />
    </>
  );
}
