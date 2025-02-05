import Image from "next/image";
import PortfolioImage from "@/public/image/portfolioImage.png";
import AboutMe from "@/Components/About/AboutMe";
import EducationExperience from "@/Components/About/EducationExperience";
import MyStory from "@/Components/About/MyStory";
import Contact from "@/Components/Home/Contact/Contact";




export default function Home() {
    return (
      <div className="pt-40 ">
       <div className="text-center pb-20 flex items-center space-y-5 flex-col">
        <Image src={PortfolioImage} alt="Portfolio Image" />
        <h1 className="text-5xl font-title font-bold tracking-wider">Alif Hossain</h1>
        <p className="text-3xl font-text tracking-wider">Web Designer and Developer (MERN)</p>
       </div>

       {/* About Page Components Will GO Here */}
       <AboutMe></AboutMe>
       <EducationExperience></EducationExperience>
       <MyStory></MyStory>
       <Contact></Contact>
        
      </div>
    );
  }
  