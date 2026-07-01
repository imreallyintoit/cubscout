import Hero from "@/components/Hero";
import About from "@/components/About";
import PhotoGallery from "@/components/PhotoGallery";
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
      <PhotoGallery />
      <JoinSection />
      <Onboarding />
      <Costs />
      <CalendarSection />
      <Contact />
    </>
  );
}
