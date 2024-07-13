import Link from "next/link";
import React from "react";
import HoverBorderGradient from "@/components/ui/hover-border-gradient.jsx";

const HeroSection = () => {
  return (
    <div className="relative w-full sm:p-10 px-5 h-[500px] flex items-center justify-center ">
      {/* <div className="absolute top-0 left-0 bg-jigsaw-pattern bg-no-repeat  bg-center w-full z-10 h-full opacity-35" /> */}
      <div className="flex flex-col items-center tracking-wide justify-center gap-7  sm:text-[36px] sm:leading-6 ">
        <div className="flex flex-row items-baseline gap-2 sm:justify-center flex-wrap justify-start">
          <span>Hello I'm </span>
          <span className=" font-bold text-gold ">Hein Zar Ne</span>
        </div>
        <div className="flex flex-row items-baseline flex-wrap gap-3 justify-center  text-left sm">
          <span className="font-bold">Front-end Website Developer</span>
        </div>
        <div className="flex flex-row items-center gap-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-gold flex items-center space-x-2"
          >
            <Link
              href="#contact"
              className=" text-lg tracking-widest font-semibold text-gold -coal rounded-md"
            >
              Contact Me
            </Link>
          </HoverBorderGradient>
          <Link href={""} className="underline text-xl font-medium">
            Request CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
