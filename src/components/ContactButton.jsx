"use client";
import React, { useRef, useState, useEffect } from "react";
import HoverBorderGradient from "./ui/hover-border-gradient";
import { motion, AnimatePresence } from "framer-motion";
import { FacebookIcon, Linkedin, Mail } from "lucide-react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

const ContactButton = ({ center }) => {
  const buttonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isIconHovered, setIsIconHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isIconHovered) {
      setIsHovered(false);
    }
  };

  const handleIconMouseEnter = () => {
    setIsIconHovered(true);
  };

  const handleIconMouseLeave = () => {
    setIsIconHovered(false);

    if (!isHovered) {
      setIsHovered(false);
    }
  };

  return (
    <div className="relative">
      <HoverBorderGradient
        ref={buttonRef}
        containerClassName="rounded-full"
        as="button"
        className="bg-black text-gold flex items-center px-3 py-2 sm:space-x-2"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-base sm:text-lg tracking-widest font-semibold text-gold rounded-md">
          Contact Me
        </div>
      </HoverBorderGradient>

      <AnimatePresence>
        {(isHovered || isIconHovered) && (
          <div
            className={`absolute top-[50px]  flex space-x-2 py-3 ${
              center ? "-left-[15%]" : "left-[5px]"
            }`}
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}
          >
            <motion.div
              initial={{ opacity: 0, y: "100px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100px" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <IconContainer link={"https://www.facebook.com/LORD.x.25/"}>
                <FacebookIcon />
              </IconContainer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "100px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <IconContainer link="https://t.me/zarne226">
                <PaperAirplaneIcon className="w-6 h-6" />
              </IconContainer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "100px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <IconContainer link="mailto:heinzarne226@gmail.com">
                <Mail />
              </IconContainer>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: "100px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <IconContainer link="https://www.linkedin.com/in/hein-zar-ne-783a01229/">
                <Linkedin />
              </IconContainer>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const IconContainer = ({ children, link }) => {
  return (
    <div className=" w-fit h-fit hover:bg-gray-500 px-2 py-2 rounded-full">
      <a className="" target="blank" href={link}>
        {children}
      </a>
    </div>
  );
};

export default ContactButton;
