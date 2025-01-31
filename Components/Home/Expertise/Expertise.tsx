'use client'
import { HoverEffect } from "@/Components/ui/card-hover-effect";

const Expertise = () => {
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl font-bold font-title">
        Areas of <span className="text-sky-500">Expertise</span>
      </h1>
      <p className="text-center text-gray-600 font-text mt-5 text-2xl tracking-wider">
        I design, develop, and optimize digital experiences.
      </p>
      {/* Expertise Details Cards  */}
      <div className="w-10/12 mx-auto">


<HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Expertise;
export const projects = [
  {
    icon: "/image/WebDevelopmentIcon.png",
    title: "Web Development",
    description:
      "As a Front End Developer, I create clean, attractive websites with smooth, functional feature",
    link: "https://allinfozone.tech",
  },
  {
    icon: "/image/Uiicon.png",
    title: "UI/UX Design",
    description:
      "As a UI/UX Designer, I create simple and attractive designs that are easy for users to navigate",
    link: "https://allinfozone.tech/contact",
  },
  {
    icon: "/image/WordpressIcon.png",
    title: "Wordpress Design",
    description:
      "As a WordPress Designer, I create custom websites that are easy to manage and look great..",
    link: "https://allinfozone.tech/services",
  },
  {
    icon: "/image/ContentManagementIcon.png",
    title: "Content Management",
    description:
      "As a Content Manager, I handle social media, create posts, and design banners to boost your brand",
    link: "https://allinfozone.tech/projects",
  },
  
];