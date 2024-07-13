import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavButton from "./utils/NavButton";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full md:py-3 md:px-10 px-3 py-2">
      <div className="w-[70px] relative aspect-[105/64]">
        <Image src="/logo.svg" fill className="" />
      </div>
      <div className="sm:flex flex-row gap-10 items-center justify-center px-7 py-3 rounded-full bg-light-coal hidden">
        <NavButton to="#" title="Info" />
        <NavButton to="#" title="Work" />
      </div>
      <div className="w-[50px] aspect-square relative rounded-full border border-gold md:block hidden">
        <Image src="/profile1.jpg" fill className="rounded-full " />
      </div>
    </div>
  );
};

export default Navbar;
