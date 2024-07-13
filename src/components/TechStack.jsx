"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

const TechStack = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className="flex flex-col gap-10 items-center justify-center py-20">
      <p className="sm:text-3xl text-2xl font-semibold text-gray-400">
        My Current Technology Stack
      </p>

      <div ref={ref} className="flex flex-row items-center justify-center">
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
          className=" w-[200px] aspect-[111.69/85.5]"
          initial={{ opacity: 0, x: "0", y: "100px" }}
          animate={{
            opacity: inView ? 1 : 0,
            x: inView ? "23px" : "0",
            y: inView ? 0 : "100px",
          }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        />{" "}
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
        />{" "}
        <motion.img
          src="/tailwind.svg"
          alt="tailwind"
          className=" w-[200px] aspect-[111.69/85.5]"
          initial={{ opacity: 0, x: "100px" }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? "-74px" : "100px" }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        />
      </div>
    </div>
  );
};

export default TechStack;
