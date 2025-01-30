import PortfolioImage from "@/public/image/portfolioImage.png";
import Facebook from "@/public/image/FacebookIcon.png";
import Github from "@/public/image/GithubIcon.png";
import Instagram from "@/public/image/InstagramIcon.png";
import Linkedin from "@/public/image/LinkedinIcon.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-soft-white pb-20">
      <div className="flex justify-around items-center w-11/12 mx-auto py-20">
      <div>

      <div className="space-y-5 font-title">
          <h1 className="text-5xl">Hi....</h1>
          <h1 className="text-6xl">I am Alif</h1>
          <h1 className="text-7xl">Front End Developer</h1>
          
        </div>

        <div className="flex mt-8 space-x-8">
            <button>
              <Image src={Facebook} alt="Facebook" width={40} height={40} />
            </button>
            <button>
              <Image src={Github} alt="Github" width={40} height={40} />
            </button>
            <button>
              <Image src={Instagram} alt="Instagram" width={40} height={40} />
            </button>
            <button>
              <Image src={Linkedin} alt="Linkedin" width={40} height={40} />
            </button>
            <button className="bg-[#07D2FF] px-8 py-2.5 tracking-wider text-xl  font-title">Resume</button>
          </div>

      </div>
        
        <div>
          <Image src={PortfolioImage} alt="Portfolio Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
