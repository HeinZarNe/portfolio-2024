import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavButton from "./utils/NavButton";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between md:py-3 md:px-10 px-3 py-2">
      <div className="w-[70px] relative aspect-[105/64]">
        <Image src="/logo.svg" fill className="" />
      </div>
      <div className="flex flex-row gap-10 items-center justify-center px-7 py-3 rounded-full bg-light-coal">
        <NavButton to="#" title="Home" />
        <NavButton to="#" title="About" />
        <NavButton to="#" title="Skills" />
        <NavButton to="#" title="Projects" />
        <NavButton to="#" title="Contact" />
      </div>
      <div className="w-[60px] aspect-square relative rounded-full border border-coal md:block hidden">
        <Image src="/profile1.jpg" fill className="rounded-full " />
      </div>
    </div>
  );
};

export default Navbar;
