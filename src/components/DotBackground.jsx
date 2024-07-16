import React from "react";

export function DotBackground({ children }) {
  return (
    <div className="h-fit w-full   bg-dot-white/[0.1]  relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      {children}
    </div>
  );
}
