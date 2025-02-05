import PortfolioImage from "@/public/image/portfolioImage.png";
import Facebook from "@/public/image/FacebookIcon.png";
import Github from "@/public/image/GithubIcon.png";
import Instagram from "@/public/image/InstagramIcon.png";
import Linkedin from "@/public/image/LinkedinIcon.png";
import Image from "next/image";
import { TypewriterEffectSmooth } from "../../ui/TypewriterEffect";
import { FlipWords } from "../../ui/FlipWords";

const Hero = () => {

  const thirdline = [
    {
      text: "I",
      className: "font-title text-3xl  lg:text-5xl dark:text-black ",
    },
    {
      text: "am",
      className: "font-title text-3xl  lg:text-5xl  dark:text-black ",
    },
    {
      text: "Alif",
      className: "font-title text-3xl  lg:text-5xl  dark:text-black ",
    },
  ];

  const words = ["Front End Developer", "Wordpress Designer", "UI/UX Designer", "Content Manager"];

  return (
    <div className="bg-soft-white pt-20 lg:pt-40 pb-20">
      <div className="flex  lg:flex-row flex-col-reverse justify-around items-center w-11/12 mx-auto py-20">
      <div className="mt-10 lg:mt-0">

      <div className=" font-title lg:text-left text-center">
          <h1 className=" text-3xl lg:text-5xl">Hi....</h1>
          
          
          <div className="flex lg:justify-start justify-center">
      <TypewriterEffectSmooth
        className="text-3xl lg:text-5xl font-bold font-title"
        words={thirdline}
      />
    </div>

          <FlipWords className="lg:text-5xl text-3xl font-bold font-title" words={words} /> 
          
        </div>

        <div className="flex items-center lg:mt-8 gap-8">
  <button className="group">
    <Image
      src={Facebook}
      alt="Facebook"
      width={40}
      height={40}
      className="transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
    />
  </button>
  <button className="group">
    <Image
      src={Github}
      alt="Github"
      width={40}
      height={40}
      className="transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
    />
  </button>
  <button className="group">
    <Image
      src={Instagram}
      alt="Instagram"
      width={40}
      height={40}
      className="transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
    />
  </button>
  <button className="group">
    <Image
      src={Linkedin}
      alt="Linkedin"
      width={40}
      height={40}
      className="transition-transform duration-300 group-hover:scale-110 group-hover:opacity-90"
    />
  </button>
  <button className="bg-[#07D2FF] px-8 py-2.5 tracking-wider text-xl font-title 
    transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#07D2FF]/50">
    Resume
  </button>
</div>


      </div>
        
      <div>
  <Image
    src={PortfolioImage}
    alt="Portfolio Image"
    className="lg:w-full w-9/12 mx-auto "
  />
</div>
      </div>
    </div>
  );
};

export default Hero;
