import Link from "next/link";
import React from "react";
import HoverBorderGradient from "@/components/ui/hover-border-gradient.jsx";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const HeroSection = () => {
  return (
    <div className="relative w-full max-w-screen-md  h-[400px] flex items-center pb-10 ">
      {/* <div className="absolute top-0 left-0 bg-jigsaw-pattern bg-no-repeat  bg-center w-full z-10 h-full opacity-35" /> */}
      <div className="flex flex-col items-start tracking-wide justify-center lg:gap-3  md:text-[30px]  lg:text-[45px] lg:leading-6 md:leading-4 ">
        <div className="flex flex-row items-baseline lg:gap-4 sm:justify-center flex-wrap justify-start">
          <span>Hello I'm </span>
          <span className=" font-bold text-gold ">Hein Zar Ne</span>
        </div>
        <div className="flex flex-row items-baseline flex-wrap gap-3 justify-center  text-left sm">
          <span className="font-bold">
            <TextGenerateEffect words={"Frontend Website Developer"} />
          </span>
        </div>
        <div className="flex flex-row items-center gap-5">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-black text-gold flex items-center space-x-2"
          >
            <div className=" text-lg tracking-widest font-semibold text-gold -coal rounded-md">
              Contact Me
            </div>
          </HoverBorderGradient>
          <a
            href={"https://flowcv.com/resume/fwc7mal4dv"}
            target="blank"
            className="underline text-xl font-medium"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
