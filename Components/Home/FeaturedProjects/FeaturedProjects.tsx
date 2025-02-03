import { Card, CardHeader, CardBody } from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";
import NexaImage from "@/public/image/projects/Nexa Developments/Hero Section Mockup.png";
import TrendyBoutique from "@/public/image/projects/Trendy Boutique/Homepage Mockup.png";
import BeamLOL from "@/public/image/projects/BeamLOL/Homepage Mockup.png";
import DigitalInsights from "@/public/image/projects/Digital Insights/Homepage Mockup.png";

const FeaturedProjects = () => {
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
      {/* Project Cards */}
      <div className="flex justify-around w-10/12 mx-auto items-center gap-5 mt-10">
        {/* Project 1 */}
        <Card className="py-4 bg-gray-200 space-y-5 min-h-[500px]">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={NexaImage}
              width={580}
              height={300}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
            <h1 className="text-base font-bold text-sky-500 font-title tracking-wider">
              NEXT JS
            </h1>
            <h1 className="text-xl font-title font-bold">
              Nexa Developments LTD
            </h1>
            <p className="text-lg font-text">Real Estate Website</p>
            <p className="text-base">
              The Nexa Developments Limited website, built with Next.js, showcases projects like Nexa Skyline with a responsive design and easy navigation.
            </p>
          </CardHeader>
          <div className="pb-0 pt-2 px-4 gap-5 flex">
            <Button color="primary" variant="solid">
              See Details
            </Button>
            <Button color="primary" variant="ghost">
              Go To Website
            </Button>
          </div>
        </Card>

        {/* Project 2 */}
        <Card className="py-4 bg-gray-200 space-y-5 min-h-[500px]">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={TrendyBoutique}
              width={580}
              height={300}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
            <h1 className="text-base font-bold text-sky-500 font-title tracking-wider">
              React JS , Express JS
            </h1>
            <h1 className="text-xl font-title font-bold">
              Trendy Boutique
            </h1>
            <p className="text-lg font-text">E-commerce Clothing Store</p>
            <p className="text-base">
              The Trendy Boutique website, built with React and MongoDB, offers a seamless shopping experience with secure transactions and real-time updates.
            </p>
          </CardHeader>
          <div className="pb-0 pt-2 px-4 gap-5 flex">
            <Button color="primary" variant="solid">
              See Details
            </Button>
            <Button color="primary" variant="ghost">
              Go To Website
            </Button>
          </div>
        </Card>

        {/* Project 3 */}
        <Card className="py-4 bg-gray-200 space-y-5 min-h-[500px]">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={BeamLOL}
              width={580}
              height={300}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
            <h1 className="text-base font-bold text-sky-500 font-title tracking-wider">
              React JS, Tailwind CSS
            </h1>
            <h1 className="text-xl font-title font-bold">
              BeamLOL
            </h1>
            <p className="text-lg font-text">Online Gaming Landing Page</p>
            <p className="text-base">
              BeamLOL, built with React and Tailwind CSS, combines gaming, earning, and trading with crypto rewards and premium benefits for an engaging user experience.
            </p>
          </CardHeader>
          <div className="pb-0 pt-2 px-4 gap-5 flex">
            <Button color="primary" variant="solid">
              See Details
            </Button>
            <Button color="primary" variant="ghost">
              Go To Website
            </Button>
          </div>
        </Card>

        {/* Project 4 */}
        <Card className="py-4 bg-gray-200 space-y-5 min-h-[500px]">
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src={DigitalInsights}
              width={580}
              height={300}
              style={{ height: "200px", objectFit: "cover" }}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start space-y-2">
            <h1 className="text-base font-bold text-sky-500 font-title tracking-wider">
              React JS, Express JS, MongoDB
            </h1>
            <h1 className="text-xl font-title font-bold">
              Digital Insights
            </h1>
            <p className="text-lg font-text">Tech Blog Website</p>
            <p className="text-base ">
              Digital Insights, built with React and Tailwind CSS, is a tech blog platform offering easy content creation, secure access, and a seamless user experience across devices.
            </p>
          </CardHeader>
          <div className="pb-0 pt-2 px-4 gap-5 flex">
            <Button color="primary" variant="solid">
              See Details
            </Button>
            <Button color="primary" variant="ghost">
              Go To Website
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeaturedProjects;
