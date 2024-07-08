import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-jigsaw-pattern bg-no-repeat  bg-center w-full sm:p-10 px-5 h-[500px] flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-5  sm:text-[32px] sm:leading-6 text-[26px] sm:m-0 mt-[-50px]">
        <div className="flex flex-row items-baseline gap-2 justify-center flex-wrap">
          <span>Hello I'm,</span>
          <span className=" font-bold ">Hein Zar Ne</span>
        </div>
        <div className="flex flex-row items-baseline flex-wrap gap-3 justify-center  text-center">
          <span className="font-bold">Front-end Website Developer</span>
        </div>
        <div className="flex flex-row items-center gap-5">
          <Link
            href="#contact"
            className="px-4 py-2 text-lg tracking-widest font-semibold text-gold bg-coal rounded-md"
          >
            Contact Me
          </Link>
          <Link href={""} className="underline text-xl font-medium">
            Request CV
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
