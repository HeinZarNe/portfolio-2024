import Link from "next/link";
import React from "react";
import HoverBorderGradient from "@/components/ui/hover-border-gradient.jsx";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-screen-md  h-[400px] flex items-center justify-center  pb-10 lg:px-0 sm:px-5 px-3">
      {/* <div className="absolute top-0 left-0 bg-jigsaw-pattern bg-no-repeat  bg-center w-full z-10 h-full opacity-35" /> */}
      <div className="flex flex-col items-start tracking-wide justify-center md:gap-3 sm:gap-0 sm:text-[30px] text-[27px]  md:text-[40px] md:leading-6 ">
        <div className="flex flex-row items-baseline gap-x-3 gap-y-0 leading-8 sm:gap-4 sm:justify-center flex-wrap justify-start">
          <span>I'm </span>
          <span className=" font-bold text-gold ">Hein Zar Ne</span>
        </div>
        <div className="flex flex-row items-baseline flex-wrap gap-3 justify-center  text-left sm">
          <span className="font-bold">
            <TextGenerateEffect words={"Frontend Website Developer"} />
          </span>
        </div>
        <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-5  mt-3 md:mt-0">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-gold flex items-center px-3 py-2 sm:space-x-2"
          >
            <div className="text-base sm:text-lg tracking-widest font-semibold text-gold   rounded-md">
              Contact Me
            </div>
          </HoverBorderGradient>
          <a
            href={"https://flowcv.com/resume/fwc7mal4dv"}
            target="blank"
            className="underline text-base sm:text-xl font-medium"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
