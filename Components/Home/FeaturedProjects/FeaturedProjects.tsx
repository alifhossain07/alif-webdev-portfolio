"use client";
import React from 'react';
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Modal, ModalContent,ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import Image from "next/image";
import NexaImage from "@/public/image/projects/Nexa Developments/Hero Section Mockup.png";
import TrendyBoutique from "@/public/image/projects/Trendy Boutique/Homepage Mockup.png";
import BeamLOL from "@/public/image/projects/BeamLOL/Homepage Mockup.png";
import DigitalInsights from "@/public/image/projects/Digital Insights/Homepage Mockup.png";
import Link from 'next/link';


const FeaturedProjects = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectDetails, setProjectDetails] = React.useState(null);

  const handleOpen = (project) => {
    setProjectDetails(project); // Set the selected project details
    onOpen(); // Open the modal
  };

  const projects = [
    {
      title: "Nexa Developments LTD",
      tech: "NEXT JS",
      category: "Real Estate Website",
      description: "The Nexa Developments Limited website, built with Next.js, showcases projects like Nexa Skyline with a responsive design and easy navigation.",
      "longDescription": [
    {
      "title": "Project Summary",
      "content": "The Nexa Developments Limited website, built with Next.js, is a modern real estate platform that showcases the company’s vision, projects, and customer-centric services. Key highlights include:\n\nHomepage: Introduction to core values like sustainability and prime locations.\nProperties Section: Detailed project information, including the flagship Nexa Skyline in Mohammadpur, Dhaka.\nContact Page: Easy navigation with Google Maps integration.\nProject Details: Comprehensive overviews, specifications, and transparent policies.\nFooter: Quick links and credits to Allinfozone IT Solutions for development.\n\nThe site combines functionality with responsive design for a seamless user experience."
    },
    {
      "title": "Tools Used",
      "content": "Framework: Next.js – For server-side rendering and optimized performance.\nStyling: Tailwind CSS – For modern, responsive design with minimal effort.\nUI Components: Flowbite – Pre-designed components for faster development.\nMapping: Google Maps Integration – For precise location details."
    }
  ],
      image: NexaImage,
      websiteLink: "https://nexadevelopments.com/",
    },
    {
      title: "Trendy Boutique",
      tech: "React JS, Express JS",
      category : "E-commerce Clothing Store",
      description: "The Trendy Boutique website, built with React and MongoDB, offers a seamless shopping experience with secure transactions and real-time updates.",
      "longDescription": [
    {
      "title": "Project Summary",
      "content": "Trendy Boutique is an online fashion platform designed to provide a seamless shopping experience for style enthusiasts. With a focus on intuitive navigation and secure transactions, the platform offers:\n\nHomepage: A visually appealing introduction to the latest fashion trends and collections.\nProduct Listings: Well-organized shop pages showcasing men’s and women’s clothing and accessories, complete with detailed descriptions and real-time stock updates.\nCart and Wishlist: Features allowing users to save and manage their favorite items effortlessly.\nCheckout Process: Secure, user-friendly checkout with encrypted payment integration.\nAdmin Dashboard: A backend solution for inventory management, product updates, and stock monitoring.\n\nBuilt using modern technologies like React, Tailwind CSS, Express.js, MongoDB, and Firebase, Trendy Boutique delivers a responsive and engaging e-commerce experience."
    },
    {
      "title": "Tools Used",
      "content": "Frontend: React – For a dynamic, interactive user interface.\nStyling: Tailwind CSS – For responsive, modern design.\nBackend: Express.js – For robust server-side logic and API development.\nDatabase: MongoDB – For flexible and scalable product and user data storage."
    }
  ],
      image: TrendyBoutique,
      websiteLink: "https://trendy-boutique-client.web.app/",
    },
    {
      title: "BeamLOL",
      tech: "React JS, Tailwind CSS",
      category: "Gaming Platform Landing Page",
      description: "BeamLOL, built with React and Tailwind CSS, combines gaming, earning, and trading with crypto rewards and premium benefits for an engaging user experience.",
      "longDescription": [
    {
      "title": "Project Summary",
      "content": "BeamLOL is a comprehensive gaming, earning, and trading platform designed with React, Tailwind CSS, and Flowbite. The platform provides an engaging and rewarding experience through gamification, cryptocurrency adoption, and integration with leading tech platforms. Key features include giveaways, premium perks, crypto rewards, and gaming challenges that offer coins, stars, and crypto prizes. BeamLOL's ecosystem has over 50 million users, ensuring a vast user base with engaging and rewarding features."
    },
    {
      "title": "Tools Used",
      "content": "Frontend Framework: React – For dynamic and component-based development.\nStyling: Tailwind CSS – To create responsive and modern UI elements.\nUI Components: Flowbite – For pre-built, accessible components that accelerate development.\nBackend Integration: API-based connections for real-time user stats, trade prices, and game features."
    }
  ],
      image: BeamLOL,
      websiteLink: "https://beamlol.club/",
    },
    {
      title: "Digital Insights",
      tech: "React JS, Express JS, MongoDB",
    category: "Tech Blog Platform",
      description: "Digital Insights, built with React and Tailwind CSS, is a tech blog platform offering easy content creation, secure access, and a seamless user experience across devices.",
      "longDescription": [
    {
      "title": "Project Summary",
      "content": "Digital Insights is a tech-focused blog platform designed to encourage knowledge sharing among tech enthusiasts. Built using React, Tailwind CSS, and Flowbite, this platform allows users to create, share, and discover blogs with ease. Key features include a rich text editor for visually engaging blog posts, content categorization and tagging for easy navigation, role-based access control for secure content moderation, advanced search functionality to find blogs quickly, and a responsive design for a seamless experience across all devices."
    },
    {
      "title": "Tools Used",
      "content": "Frontend Framework: React – For dynamic and responsive UI components.\nStyling: Tailwind CSS – For modern, responsive design, and Flowbite for pre-built UI components.\nDatabase: MongoDB – To store and organize blogs by categories and tags.\nAuthentication: Firebase – For secure user authentication and role-based access control.\nSearch Optimization: Backend query system – For indexing and filtering content.\nDeployment: Vercel – For hosting and deployment of the platform."
    }
  ],
      image: DigitalInsights,
      websiteLink: "https://digital-insights-client.web.app/",
    }
  ];

  return (
    <div className="py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-title">
          Project <span className="text-sky-500">Showcase</span>
        </h1>
        <p className="text-2xl mx-auto mt-5 text-gray-600 tracking-wider max-w-4xl">
          Here are some of the projects I’ve worked on, showing my focus on
          quality and creativity.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-around w-10/12 mx-auto items-center gap-5 mt-10">
        {projects.map((project, index) => (
          <Card key={index} className="py-4 bg-gray-200 space-y-5 min-h-[500px] hover:bg-sky-100 transition-all duration-300 ease-in-out">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src={project.image}
                width={580}
                height={300}
                style={{ height: "200px", objectFit: "cover" }}
              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
              <h1 className="text-base font-bold text-sky-500 font-title tracking-wider">
                {project.tech}
              </h1>
              <h1 className="text-xl font-title font-bold">
                {project.title}
              </h1>
              <p className="text-lg font-text">{project.category}</p>
              <p className="text-base">{project.description}</p>
            </CardHeader>
            <div className="pb-0 pt-2 px-4 gap-5 flex">
              <Button
                className="capitalize"
                color="primary"
                variant="solid"
                onClick={() => handleOpen(project)} // Open modal when button is clicked
              >
                See Details
              </Button>

              <Button color="success" variant="ghost" href={project.websiteLink}>
                Go To Website
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {projectDetails && (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalContent className="w-full max-w-4xl h-auto max-h-[80vh] overflow-y-auto">
      
      <ModalBody className="px-6 py-4">
        <div className="flex flex-col items-center mb-4">
          <Image
            alt="Project Image"
            className="object-contain rounded-xl"
            src={projectDetails.image}
            width={800}
            height={300}
            style={{ height: "", objectFit: "cover" }}
          />
        </div>
        
        <h1 className="text-xl font-title text-sky-500 font-bold">{projectDetails.title}</h1>
      

        {/* Render longDescription dynamically */}
        {projectDetails.longDescription && projectDetails.longDescription.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-bold">{section.title}</h2>
            <p className="text-lg whitespace-pre-line">{section.content}</p>
          </div>
        ))}
      </ModalBody>
      <ModalFooter className="flex justify-between">
        <Button color="danger" variant="bordered" onPress={onClose}>
          Close
        </Button>
        <Link  href={projectDetails.websiteLink} passHref > <Button className='font-text' color="primary" target='_blank' onPress={onClose}>
          See Live Website 
        </Button></Link>
       
      </ModalFooter>
    </ModalContent>
  </Modal>
)}


    </div>
  );
};

export default FeaturedProjects;
