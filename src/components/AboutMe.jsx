import React from "react";
// w-full aspect-[1052/346]
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col   gap-16  justify-center items-center w-full px-3 md:px-5">
        {" "}
        <span className="sm:text-3xl text-2xl font-semibold text-gray-400">
          About Me
        </span>
        <div className=" flex flex-row  gap-9 max-w-screen-lg ">
          <div className=" bg-gray-900 p-[4px] h-fit rounded-2xl border border-gray-600 ">
            <div className="w-[400px] aspect-[964/1280]  relative rounded-2xl">
              <img src="/fullbody.jpg" className="w-full rounded-2xl" />
            </div>
          </div>
          <p className=" flex-1 text-base  ">
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
        <div className=" flex flex-row-reverse  gap-9 max-w-screen-lg ">
          <div className=" bg-gray-900 p-[4px] h-fit rounded-2xl border border-gray-600 ">
            <div className="w-[400px] aspect-[1280/960]  relative rounded-2xl">
              <img src="/hackathon-gp.jpg" className="w-full rounded-2xl" />
            </div>
          </div>
          <p className=" flex-1 text-base  ">
            I discovered the hackathon on Facebook and submitted my application
            with my projects and experiences, not expecting much. To my
            surprise, I was chosen for an interview. Despite English not being
            my first language, I answered all questions enthusiastically. At the
            event, I teamed up with other participants, and we were assigned a
            mentor. Over five days, we worked from 9 AM to 5 PM, tackling the
            scenario provided by the organizers. I served as a frontend
            developer and designer. Our hard work paid off, and we won the first
            prize. After the event, our team received another software project
            from our mentor, which I will discuss in the projects section.
          </p>
        </div>{" "}
       
      </div>
    </div>
  );
};

export default AboutMe;
