import React from "react";
import ContactButton from "./ContactButton";
import { SparklesCore } from "./ui/sparkels";

const ContactSection = () => {
  return (
    <div className="w-full relative flex flex-col gap-7 items-center px-10 justify-center box-shadow py-28 border-[#171718] border-2 bg-[#0f0f10]">
      <div className="absolute w-full h-full top-0 left-0">
        <SparklesCore
          id="contactsparkle"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <p className="lg:text-4xl text-2xl  text-center px-3 font-semibold text-gray-100">
        Bring your idea to realworld.
      </p>
      <ContactButton center={true} />
    </div>
  );
};

export default ContactSection;
