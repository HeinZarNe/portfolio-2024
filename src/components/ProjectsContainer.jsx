import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectsContainer = () => {
  const data = [
    {
      title: "Monastery Management System",
      subTitle: "Client Project",
      member: 6,
      time: "3 months",
      feature: "20+",
      desc: "I developed an in-house management system for a monastery to streamline various administrative tasks such as user registration, member management, room management, and dormitory management. The project utilizes React for the frontend and Tailwind CSS for styling. I was responsible for both the development and the design of the system, despite not being a professional designer. This software is specifically tailored for internal use within the monastery, so it is not available for public access.",
      img: "/projects/punnyarrama.png",
      link: {},
    },
    {
      title: "Water Factory Management System",
      subTitle: "Client Project",
      member: 4,
      time: "3 months",
      feature: "20+",
      desc: "The Simple AQUA Admin Dashboard, developed in collaboration with my freelance team CoolAsCode, is an in-house management tool for overseeing various operations such as stocks, branches, staff, drivers, customers, and bottle transactions. Built using React, Tailwind CSS, Material Tailwind, and React Query, the dashboard features a comprehensive user interface designed by me, with the dashboard page specifically crafted by our team’s designer, Yan Naing Bo. Key functionalities include real-time data on stocks, recent bottle transactions, branch insights, and daily sales and returns reports, providing a streamlined and efficient solution for internal administrative tasks.",
      img: "/projects/water.png",
      link: {},
    },
    {
      title: "Countries List",
      subTitle: "Challenge from Frontend Mentor",
      member: 1,
      time: "2 weeks",
      feature: "3+",
      desc: "This project is a challenge from the Frontend Mentor website, featuring a design provided by them. It includes functionalities for searching, filtering, and toggling between light and dark modes. Users can view details of a selected country and explore its border countries, with detailed information available for each. The project is built using React and Bootstrap.",
      img: "/projects/wonder-world.png",
      link: {
        title: "https://wonder-world-with-zarne.netlify.app/",
        subTitle:
          "https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca",
      },
    },

    {
      title: "Dictionary Web App",
      subTitle: "Challenge from Frontend Mentor",
      member: 1,
      time: "2 weeks",
      feature: "4+",
      desc: "My dictionary is a web application built with React and styled with Tailwind CSS. The design was created using Frontend Mentor and provides support for both light and dark mode themes. It is fully responsive and functional, making it easily accessible from a variety of devices. One of the key features of your dictionary is its loader support. This provides a visual indicator to the user that their search request is being processed and helps to improve the overall user experience. Another important feature is the error message support, which notifies the user when their search query is not found in the dictionary. This helps to prevent confusion and ensures that the user is always provided with accurate information.",
      img: "/projects/dictionary.png",
      link: {
        title: "https://words-list.netlify.app/",
        subTitle:
          "https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL",
      },
    },
    {
      title: "Ecommerce Project (One Page)",
      subTitle: "Challenge from Frontend Mentor",
      member: 1,
      time: "1 weeks",
      feature: "3+",
      desc: "This fully responsive project was created to practice state management in React and to design a beautiful, real-world e-commerce layout. The result is a single-page application that showcases advanced state management techniques and a polished user interface.",
      img: "/projects/shop.png",
      link: {
        title: "https://ecommerce-by-zarne.netlify.app/",
        subTitle:
          "https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6",
      },
    },
  ];

  return (
    <div className="w-full flex flex-col gap-7 sm:gap-10 items-center justify-center px-5">
      <div className="max-w-screen-md">
        <p className="sm:text-3xl text-2xl font-semibold text-gray-400 text-center">
          Projects
        </p>
        <p className="sm:text-xl text-lg font-semibold text-gray-600 sm:text-center mt-2">
          These are some of the projects I want to highlight, although I have
          completed several others as well.
        </p>
      </div>
      {data?.map((item) => (
        <ProjectCard
          title={item.title}
          subTitle={item.subTitle}
          member={item.member}
          time={item.time}
          feature={item.feature}
          desc={item.desc}
          img={item.img}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ProjectsContainer;
