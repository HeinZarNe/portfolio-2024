"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { SparklesCore } from "./ui/sparkels";

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="py-10" id="tech-stacks">
      <div className="w-full relative flex flex-col gap-12 items-center px-10 justify-center box-shadow py-28 border-[#171718] border-2 bg-[#0f0f10]">
        <div className="absolute w-full h-full top-0 left-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <p className="sm:text-3xl text-2xl text-center px-3 font-semibold text-gray-100">
          My Current Technology Stack
        </p>
        <div
          ref={ref}
          className="hidden lg:flex flex-row items-center justify-center"
        >
          <motion.img
            src="/js.svg"
            alt="javascript"
            className=" w-[200px] aspect-[111.69/85.5]"
            initial={{ opacity: 0, x: "-100px " }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? "65px" : "-100px" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
          <motion.img
            src="/react.svg"
            alt="react"
            className=" w-[200px] aspect-[111.69/85.5] "
            initial={{ opacity: 0, x: "0", y: "100px" }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? "23px" : "0",
              y: inView ? 0 : "100px",
            }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
          <motion.img
            src="/nextjs.svg"
            alt="nextjs"
            className=" w-[200px] aspect-[111.69/85.5]"
            initial={{ opacity: 0, x: "0", y: "-100px" }}
            animate={{
              opacity: inView ? 1 : 0,
              x: inView ? "-23px" : "0",
              y: inView ? 0 : "-100px",
            }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
          <motion.img
            src="/tailwind.svg"
            alt="tailwind"
            className=" w-[200px] aspect-[111.69/85.5]"
            initial={{ opacity: 0, x: "100px" }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? "-74px" : "100px" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
        </div>
        <div className="lg:hidden flex flex-row flex-wrap gap-1 items-center justify-center w-full ">
          <img
            src="/js.svg"
            alt="javascript"
            className=" w-[100px] aspect-[111.69/85.5]"
            //   initial={{ opacity: 0, y: "-100px " }}
            //   animate={{ opacity: inView ? 1 : 0, y: inView ? "65px" : "-100px" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
          <img
            src="/react.svg"
            alt="react"
            className=" w-[100px] aspect-[111.69/85.5] "
            //   initial={{ opacity: 0, x: "0", y: "100px" }}
            //   animate={{
            //     opacity: inView ? 1 : 0,
            //     x: inView ? "23px" : "0",
            //     y: inView ? 0 : "100px",
            //   }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
          <img
            src="/nextjs.svg"
            alt="nextjs"
            className=" w-[100px] aspect-[111.69/85.5]"
            //   initial={{ opacity: 0, x: "0", y: "-100px" }}
            //   animate={{
            //     opacity: inView ? 1 : 0,
            //     x: inView ? "-23px" : "0",
            //     y: inView ? 0 : "-100px",
            //   }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
          <img
            src="/tailwind.svg"
            alt="tailwind"
            className=" w-[100px] aspect-[111.69/85.5]"
            //   initial={{ opacity: 0, x: "100px" }}
            //   animate={{ opacity: inView ? 1 : 0, x: inView ? "-74px" : "100px" }}
            transition={{ duration: 0.6, ease: "easeIn" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
