import Image from "next/image";
import React from "react";
import NavButton from "./utils/NavButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full md:py-10 px-3 sm:px-5 py-2 ">
      <div className="w-[70px] relative aspect-[105/64]">
        <Link href={"/"}>
          <Image src="/logo.svg" fill className="" alt="logo" />
        </Link>
      </div>
      <div className="sm:flex flex-row md:gap-5 lg:gap-10 sm:gap-3 items-center justify-center  py-3 hidden">
        <NavButton to="#about" title="About" />
        <NavButton to="#milestones" title="MileStones" />
        <NavButton to="#tech-stacks" title="TechStacks" />
        <NavButton to="#projects" title="Projects" />
      </div>
      {/* <div className="w-[50px] aspect-square relative rounded-full border border-gold md:block hidden">
        <Image src="/profile1.jpg" fill className="rounded-full " />
      </div> */}
    </div>
  );
};

export default Navbar;
