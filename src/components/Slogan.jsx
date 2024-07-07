import React from "react";
import SloganBg from "./utils/SloganBg";

const Slogan = () => {
  return (
    <div className="w-full aspect-[1240/294] relative ">
      <SloganBg className="absolute top-0 lef-0 z-0 " />
      <div className="flex flex-row gap-2 items-center absolute top-0 left-0 z-10 justify-center w-full text-3xl h-full text-gold font-bold tracking-wide ">
        <span>Code With</span>
        <span className="text-white">100%</span>
        <span>Passion</span>
      </div>
    </div>
  );
};

export default Slogan;
