import AboutMe from "@/components/AboutMe";
import { DotBackground } from "@/components/DotBackground";
import { EventTimeline } from "@/components/EventTimeline";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import KeyDetails from "@/components/KeyDetails";
import Navbar from "@/components/Navbar";
import ProjectsContainer from "@/components/ProjectsContainer";
import Slogan from "@/components/Slogan";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <DotBackground>
      <div className="w-full flex flex-col items-center lg:gap-20 ">
        <div className="w-full flex flex-col items-center">
          <div className="max-w-screen-lg w-full ">
            <Navbar />
            <HeroSection />
          </div>{" "}
          <Slogan />
        </div>
        <AboutMe />
        <KeyDetails />
        <EventTimeline />
        <TechStack />
        <ProjectsContainer />
        <Footer />
      </div>
    </DotBackground>
  );
}
