import AboutMe from "@/components/AboutMe";
import { DotBackground } from "@/components/DotBackground";
import { EventTimeline } from "@/components/EventTimeline";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Slogan from "@/components/Slogan";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <DotBackground>
      <div className="w-full flex flex-col items-center gap-2 sm:gap-5">
        <div className="w-full">
          <Navbar />
          <HeroSection />
        </div>
        <Slogan />
        <AboutMe />
        <EventTimeline /> <TechStack />
      </div>
    </DotBackground>
  );
}
