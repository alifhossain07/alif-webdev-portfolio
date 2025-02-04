import Image from "next/image";
import Facebook from "@/public/image/FacebookIcon.png";
import Github from "@/public/image/GithubIcon.png";
import Instagram from "@/public/image/InstagramIcon.png";
import Linkedin from "@/public/image/LinkedinIcon.png";

const Footer = () => {
  return (
    <footer className="bg-soft-white text-black py-8">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Social Icons */}
        <div className="flex space-x-5">
          <Image src={Facebook} alt="Facebook" width={30} height={30} className="cursor-pointer" />
          <Image src={Github} alt="Github" width={30} height={30} className="cursor-pointer" />
          <Image src={Instagram} alt="Instagram" width={30} height={30} className="cursor-pointer" />
          <Image src={Linkedin} alt="LinkedIn" width={30} height={30} className="cursor-pointer" />
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex font-title space-x-6 mt-6 md:mt-0">
          <a href="#about" className="hover:text-sky-400 transition">About</a>
          <a href="#projects" className="hover:text-sky-400 transition">Projects</a>
          <a href="#blogs" className="hover:text-sky-400 transition">Blogs</a>
          <a href="#hire-me" className="hover:text-sky-400 transition">Hire Me</a>
        </nav>
      </div>

      {/* Bottom: Copyright */}
      <div className="text-center font-title uppercase text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} All rights reserved by Alif Hossain
      </div>
    </footer>
  );
};

export default Footer;
