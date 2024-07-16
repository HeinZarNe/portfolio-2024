"use client";
import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const ProjectCard = ({
  title,
  subTitle,
  member,
  time,
  feature,
  img,
  desc,
  link,
}) => {
  return (
    <motion.div
      whileHover={{ rotate: "1deg" }}
      className="flex flex-col gap-3 max-w-[800px] w-full relative border-[#171717] border-2 bg-[#0f0f10] box-shadow   p-7 rounded-xl"
    >
      <div className="flex flex-row gap-3 items-end w-full ">
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <a href={link.title} target="blank">
              <span
                className={cn(
                  "sm:text-3xl text-2xl font-semibold text-[#fdfdfd] flex flex-row items-center gap-2 ",
                  link.title ? "hover:underline  cursor-pointer" : ""
                )}
              >
                {title}
                {link.title && <ArrowTopRightOnSquareIcon className="size-4" />}
              </span>
            </a>
            <a href={link.subTitle} target="blank">
              <span
                className={cn(
                  "sm:text-xl text-lg font-semibold text-gray-400 flex flex-row items-center gap-2 ",
                  link.subTitle ? "hover:underline  cursor-pointer" : ""
                )}
              >
                {subTitle}
                {link.subTitle && (
                  <ArrowTopRightOnSquareIcon className="size-4" />
                )}
              </span>
            </a>
          </div>
          <div className="flex flex-row gap-2 items-center text-black text-center">
            <div className="bg-gold p-2  rounded-lg flex flex-col items-center gap-2">
              <span className="text-xl font-bold">{member}</span>
              <span className="font-bold text-[#161616] text-sm  ">
                Team Members
              </span>
            </div>
            <div className="bg-gold  p-2  rounded-lg flex flex-col items-center gap-2">
              <span className="text-xl font-bold">{time}</span>
              <span className="font-bold text-[#161616] text-sm  ">
                Total Time Taken
              </span>
            </div>
            <div className="bg-gold  p-2  rounded-lg flex flex-col items-center gap-2">
              <span className="text-xl font-bold">{feature}</span>
              <span className="font-bold text-[#161616] text-sm  ">
                Main Features
              </span>
            </div>
          </div>
        </div>
        <div className="sm:w-[350px] ">
          <img
            src={img}
            alt="Project Screenshot"
            className="rounded-lg shadow-md max-w-full h-auto"
          />
        </div>
      </div>
      <div className="flex-1 ">
        <p className="text-gray-100">{desc}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
