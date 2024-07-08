import Image from "next/image";
import React from "react";
import { FeaturedImageGallery } from "./SelfGallery";
// w-full aspect-[1052/346]
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-10 items-center  py-20   ">
      <div className="flex md:flex-row flex-wrap gap-5 lg:gap-10 flex-col justify-center items-start w-full px-3 md:px-5">
        {/* <div className="hidden md:flex relative border-stone-300  bg-cover bg-left bg-no-repeat bg-fullbody border-0 rounded-lg max-w-screen-sm  flex-[2]"></div> */}
        {/* <div className="relative w-80  min-w-sm">
          <Image src={"/fullbody.jpg"} fill />
        </div> */}

        <FeaturedImageGallery />
        <div className="flex-[1] flex flex-col  gap-3 sm:min-w-[350px] md:items-start items-center  ">
          <span className="sm:text-3xl text-2xl font-semibold text-gray-600">
            About Me
          </span>
          <p className=" sm:text-lg">
            I am a first-year student at the University of Computer Studies,
            Yangon (UCSY), with a deep passion for web development. Since 2019,
            I have pursued this passion through academic studies and extensive
            online learning, evolving from a framework-focused approach to a
            broader software development perspective. My academic background
            includes distinctions in mathematics, physics, chemistry, and
            biology. I aim to study abroad and am actively seeking scholarship
            opportunities. Currently, I am honing my frontend skills in UI/UX
            design and exploring mobile development with React Native. With
            three years of freelance experience as a Frontend Web Developer, I
            am recognized for my adaptability, versatility, and rapid learning
            ability, exemplified by winning a hackathon. I am driven by my
            passion and proactive learning approach to contribute meaningfully
            to the web development field.
          </p>
        </div>
      </div>
      <div className="bg-coal text-white flex flex-col items-center w-full gap-7 px-10 py-9">
        <span className="sm:text-3xl text-2xl font-semibold text-gray-400">
          Key Details
        </span>
        {/* <hr className="hidden md:block  w-[30%] border-[1px] border-gray-300 my-2" /> */}
        <div class="grid grid-cols-1 gap-x-8 gap-y-4 text-gold sm:grid-cols-2 lg:grid-cols-3 w-full">
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">Current Location</span>
            <span className="text-lg  ">Myanmar</span>
          </div>
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">Current University</span>
            <span className="text-lg  ">
              University of Computer Studies, Yangon
            </span>
          </div>
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">Started Developing</span>
            <span className="text-lg  ">Since 2019</span>
          </div>
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">Achievement</span>
            <span className="text-lg  ">
              Hackathon Winner 2023 Job-Matching Hackathon
            </span>
          </div>
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">
              Years of Experience
            </span>
            <span className="text-lg  ">3+</span>
          </div>
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">
              Current Technical Skills
            </span>
            <span className="text-lg  ">HTML, CSS, Js, React, Next</span>
          </div>
          <div className="flex flex-col min-w-lg w-fit ">
            <span className="text-base text-gray-400 ">Other Skills</span>
            <span className="text-lg text-wrap ">
              Teamwork, Adaptability, Versatility, Rapid learning ability
            </span>
          </div>
          <div className="flex flex-col min-w-lg w-fit  ">
            <span className="text-base text-gray-400 ">Still Learning</span>
            <span className="text-lg  ">PHP, SQL, Python, C++, Node</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
