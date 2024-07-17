import React from "react";
import SloganBg from "./utils/SloganBg";

const Slogan = () => {
  return (
    <div className="w-full aspect-[1240/294] relative hidden sm:block ">
      <SloganBg className="absolute top-0 lef-0 z-0 " />
      <div className="flex flex-row gap-2 items-center absolute top-0 left-0 z-10 justify-center w-full text-xl  md:text-3xl h-full text-white font-bold tracking-wide ">
        Turning Ideas Into
        <span className="text-gold">Reality</span>
      </div>
    </div>
  );
};

export default Slogan;
