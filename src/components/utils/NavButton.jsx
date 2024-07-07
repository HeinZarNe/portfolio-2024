import classNames from "classnames";
import Link from "next/link";
import React from "react";

const NavButton = ({ to, title, className }) => {
  return (
    <Link
      href={to}
      title={title}
      className={classNames("text-base font-medium text-white", className)}
    >
      {title}
    </Link>
  );
};

export default NavButton;
