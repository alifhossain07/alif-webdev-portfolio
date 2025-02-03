"use client";
import React from 'react';
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import Image from "next/image";
import NexaImage from "@/public/image/projects/Nexa Developments/Hero Section Mockup.png";
import TrendyBoutique from "@/public/image/projects/Trendy Boutique/Homepage Mockup.png";
import BeamLOL from "@/public/image/projects/BeamLOL/Homepage Mockup.png";
import DigitalInsights from "@/public/image/projects/Digital Insights/Homepage Mockup.png";

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
      description: "The Nexa Developments Limited website, built with Next.js, showcases projects like Nexa Skyline with a responsive design and easy navigation.",
      longDescription: "A more detailed description of the Nexa Developments project goes here. It provides insights into the project’s goals, technologies, and features that were implemented. This section can be as detailed as needed.",
      image: NexaImage,
      websiteLink: "#",
    },
    {
      title: "Trendy Boutique",
      tech: "React JS, Express JS",
      description: "The Trendy Boutique website, built with React and MongoDB, offers a seamless shopping experience with secure transactions and real-time updates.",
      longDescription: "A more detailed description of the Trendy Boutique project goes here. It elaborates on the functionality of the platform, the e-commerce features, and the tech stack used.",
      image: TrendyBoutique,
      websiteLink: "#",
    },
    {
      title: "BeamLOL",
      tech: "React JS, Tailwind CSS",
      description: "BeamLOL, built with React and Tailwind CSS, combines gaming, earning, and trading with crypto rewards and premium benefits for an engaging user experience.",
      longDescription: "A more detailed description of the BeamLOL project goes here, discussing how it integrates gaming with cryptocurrency for users.",
      image: BeamLOL,
      websiteLink: "#",
    },
    {
      title: "Digital Insights",
      tech: "React JS, Express JS, MongoDB",
      description: "Digital Insights, built with React and Tailwind CSS, is a tech blog platform offering easy content creation, secure access, and a seamless user experience across devices.",
      longDescription: "A detailed breakdown of the Digital Insights project. It highlights the blog's features, how it helps users engage with tech content, and the backend technologies used.",
      image: DigitalInsights,
      websiteLink: "#",
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
              <p className="text-lg font-text">Real Estate Website</p>
              <p className="text-base">{project.description}</p>
            </CardHeader>
            <div className="pb-0 pt-2 px-4 gap-5 flex">
              <Button
                className="capitalize"
                color="warning"
                variant="flat"
                onClick={() => handleOpen(project)} // Open modal when button is clicked
              >
                See Details
              </Button>

              <Button color="primary" variant="ghost" href={project.websiteLink}>
                Go To Website
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {projectDetails && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            <ModalHeader className="flex flex-col gap-1">
              <h1 className="text-xl font-title font-bold">{projectDetails.title}</h1>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col items-center mb-4">
                <Image
                  alt="Project Image"
                  className="object-cover rounded-xl"
                  src={projectDetails.image}
                  width={580}
                  height={300}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
              <p className="text-lg font-text">{projectDetails.longDescription}</p>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <Button color="primary" onPress={onClose}>
                Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default FeaturedProjects;
