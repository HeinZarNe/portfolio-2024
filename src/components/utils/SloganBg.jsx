import React from "react";
import classNames from "classnames";

const SloganBg = ({ className }) => {
  return (
    <svg
      className={classNames("w-full h-auto aspect-[1240/294]", className)}
      viewBox="0 0 1240 294"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 293.057V0.943357C119.722 38.5156 352.258 64 619.5 64C887.488 64 1120.58 38.3731 1240 0.628418V293.372C1120.58 255.627 887.488 230 619.5 230C352.258 230 119.722 255.484 0 293.057Z"
        fill="#202020"
      />
    </svg>
  );
};

export default SloganBg;
