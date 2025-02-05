"use client";

import { Tabs, Tab } from "@heroui/tabs";
import { Card, CardBody, CardHeader } from "@heroui/card";
import React from "react";
import { Modal, ModalContent, ModalBody, ModalFooter, useDisclosure } from "@heroui/modal";
import { Button } from "@heroui/button";
import Link from "next/link";

// Import your project data (assuming it's in JSON format)
import projectData from './projectdata.json';  // Make sure the path is correct
import Image from "next/image";

const AllProjects = () => {
  const [selected, setSelected] = React.useState("all");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [projectDetails, setProjectDetails] = React.useState(null);

  const handleOpen = (project) => {
    setProjectDetails(project);
    onOpen();
  };

  // Filter projects based on the selected tab
  const filteredProjects = projectData.filter(
    (project) => selected === "all" || project.type.toLowerCase() === selected.toLowerCase()
  );

  return (
    <div className="flex w-10/12 mx-auto py-20 flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
        size="lg"
        color="primary"
        classNames={{
          base: "border-b-2",
          tab: "px-6 py-3 text-xl",
          tabList: "space-x-6 flex-col lg:w-6/12 w-full justify-center lg:flex-row",
          cursor: "cursor-pointer",
        }}
      >
        <Tab key="all" title="All">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="py-4 bg-gray-200 space-y-5 min-h-[500px] hover:bg-sky-100 transition-all duration-300 ease-in-out">
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Project"
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
                    onClick={() => handleOpen(project)}
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
        </Tab>

        <Tab key="Web Development" title="Web Development">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10">
            {filteredProjects.map((project, index) => {
              if (project.type === "web development") {
                return (
                  <Card key={index} className="py-4 bg-gray-200 space-y-5 min-h-[500px] hover:bg-sky-100 transition-all duration-300 ease-in-out">
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Project"
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
                        onClick={() => handleOpen(project)}
                      >
                        See Details
                      </Button>
                      <Button color="success" variant="ghost" href={project.websiteLink}>
                        Go To Website
                      </Button>
                    </div>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>

        <Tab key="UI/UX Design" title="UI/UX Design">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-10">
            {filteredProjects.map((project, index) => {
              if (project.type === "UI/UX Design") {
                return (
                  <Card key={index} className="py-4 bg-gray-200 space-y-5 min-h-[500px] hover:bg-sky-100 transition-all duration-300 ease-in-out">
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Project"
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
                        onClick={() => handleOpen(project)}
                      >
                        See Details
                      </Button>
                      <Button color="success" variant="ghost" href={project.websiteLink}>
                        Go To Website
                      </Button>
                    </div>
                  </Card>
                );
              }
              return null;
            })}
          </div>
        </Tab>
      </Tabs>

      {/* Modal for project details */}
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
              <Link href={projectDetails.websiteLink} passHref>
                <Button className="font-text" color="primary" target="_blank" onPress={onClose}>
                  See Live Website
                </Button>
              </Link>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default AllProjects;
