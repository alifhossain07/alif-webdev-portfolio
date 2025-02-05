"use client";
import { Card, CardHeader, CardBody } from "@heroui/card";

const EducationExperience = () => {
  return (
    <section className="w-10/12 mx-auto my-16 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left - Education Section */}
      <div>
        <h2 className="text-6xl font-bold font-title mb-14">Education</h2>
        <div className="space-y-10">
          {/* University */}
          <Card className="border-l-4 hover:bg-sky-100 duration-500 border-[#07D2FF] shadow-md">
            <CardHeader>
              <p className="text-2xl font-title  font-bold text-sky-500">Bachelor in Computer Science & Engineering</p>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-text   font-medium mb-2">International University of Business Agriculture and Technology</h3>
              <p className="text-gray-500 text-lg font-text">CGPA: 3.55/4.00 | 2021 - Running</p>
            </CardBody>
          </Card>

          {/* HSC */}
          <Card className="border-l-4 hover:bg-sky-100 duration-500 border-[#07D2FF] shadow-md">
            <CardHeader>
              <p className="text-2xl font-title  font-bold text-sky-500">Higher Secondary Certificate</p>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-text   font-medium mb-2">Milestone College</h3>
              <p className="text-gray-500 text-lg font-text">CGPA: 5.00/5.00 | 2018 - 2020</p>
            </CardBody>
          </Card>
          {/* SSC */}
          <Card className="border-l-4 hover:bg-sky-100 duration-500 border-[#07D2FF] shadow-md">
            <CardHeader>
              <p className="text-2xl font-title  font-bold text-sky-500">Secondary School Certificate</p>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-text   font-medium mb-2">Uttara High School and College</h3>
              <p className="text-gray-500 text-lg font-text">CGPA: 5.00/5.00 | 2016 - 2018</p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Right - Experience Section */}
      <div>
        <h2 className="text-6xl font-bold font-title mb-14">Experience</h2>
        <div className="space-y-10">
          {/* Job 1 */}
          <Card className="border-l-4 hover:bg-orange-100 duration-500 border-[#FFB703]  shadow-md">
            <CardHeader>
              <p className="text-2xl font-title  font-bold text-[#FFB703]">Lead Frontend Develoepr</p>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-text   font-medium mb-2">Allinfozone IT Solutions</h3>
              <p className="text-gray-500 text-lg font-text">Developed Scalable Modern Websites using NextJS | 2024 - Running </p>
            </CardBody>
          </Card>

          {/* Job 2 */}
          <Card className="border-l-4 hover:bg-orange-100 duration-500 border-[#FFB703]  shadow-md">
            <CardHeader>
              <p className="text-2xl font-title  font-bold text-[#FFB703]">Lead Frontend Develoepr</p>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-text   font-medium mb-2">Emperal Tech</h3>
              <p className="text-gray-500 text-lg font-text">Developed Scalable Modern Websites using react and tailwind | 2023 - 2024</p>
            </CardBody>
          </Card>
          {/* Job 3 */}
          <Card className="border-l-4 hover:bg-orange-100 duration-500 border-[#FFB703]  shadow-md">
            <CardHeader>
              <p className="text-2xl font-title  font-bold text-[#FFB703]">Content Creator and Manager</p>
            </CardHeader>
            <CardBody>
              <h3 className="text-xl font-text   font-medium mb-2">STARZ UAE</h3>
              <p className="text-gray-500 text-lg font-text">Creating Posters,Ads for Social Media and Managing Them | 2023 - Running</p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
