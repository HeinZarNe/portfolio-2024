"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";

const NavButton = ({ to, title, className }) => {
  return (
    <Link
      href={to}
      className={classNames(
        "text-base font-medium text-white hover:text-gold hover:scale-110 duration-300 transition-all",
        className
      )}
    >
      {title}
    </Link>
  );
};

export default NavButton;
