import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-jigsaw-pattern bg-no-repeat  bg-center w-full p-10 h-[500px] flex items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-4 text-4xl">
        <div className="flex flex-row items-baseline gap-1">
          <span>Hello I'm,</span>
          <span className=" font-bold">Hein Zar Ne,</span>
        </div>
        <div className="flex flex-row items-baseline gap-3">
          <span>a</span>
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
