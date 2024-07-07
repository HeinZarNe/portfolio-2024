import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Slogan from "@/components/Slogan";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <HeroSection />
      <Slogan />
    </div>
  );
}
