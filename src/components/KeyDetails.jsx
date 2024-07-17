import React from "react";

const KeyDetails = () => {
  return (
    <div className=" text-white flex flex-col items-center w-full gap-7  px-5 sm:px-10">
      <span className="sm:text-3xl text-2xl font-semibold text-gray-400">
        Key Details
      </span>
      {/* <hr className="hidden md:block  w-[30%] border-[1px] border-gray-300 my-2" /> */}
      <div className="grid grid-cols-1 gap-x-8 gap-y-4 text-gold sm:grid-cols-2 lg:grid-cols-3 max-w-fit">
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">Current Location</span>
          <span className="text-lg  ">Myanmar</span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">Current University</span>
          <span className="text-lg  ">
            University of Computer Studies, Yangon
          </span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">Started Developing</span>
          <span className="text-lg  ">Since 2019</span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">Achievement</span>
          <span className="text-lg  ">
            Hackathon Winner 2023 Job-Matching Hackathon
          </span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">Years of Experience</span>
          <span className="text-lg  ">3+</span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">
            Current Technical Skills
          </span>
          <span className="text-lg  ">HTML, CSS, Js, React, Next</span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit ">
          <span className="text-base text-gray-400 ">Other Skills</span>
          <span className="text-lg text-wrap ">
            Teamwork, Adaptability, Versatility, Rapid learning ability
          </span>
        </div>
        <div className="flex flex-col max-w-[300px] w-fit  ">
          <span className="text-base text-gray-400 ">Still Learning</span>
          <span className="text-lg  ">PHP, SQL, Python, C++, Node</span>
        </div>
      </div>
    </div>
  );
};

export default KeyDetails;
