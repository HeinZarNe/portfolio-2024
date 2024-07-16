"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const NavButton = ({ to, title, className }) => {
  console.log(window.location.pathname, to?.slice(1));
  return (
    <Link
      href={to}
      className={classNames(
        "text-base font-medium text-white hover:text-gold hover:scale-110 duration-300 transition-all",
        className,
        window.location.hash === to?.slice(1) && "text-gold"
      )}
    >
      {title}
    </Link>
  );
};

export default NavButton;
