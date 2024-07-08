import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Slogan from "@/components/Slogan";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-2 sm:gap-5">
      <div>
        <Navbar />
        <HeroSection />
      </div>
      <Slogan />
      <AboutMe />
    </div>
  );
}
