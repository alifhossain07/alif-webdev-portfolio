

import Contact from "@/Components/Home/Contact/Contact";
import Expertise from "@/Components/Home/Expertise/Expertise";
import FeaturedProjects from "@/Components/Home/FeaturedProjects/FeaturedProjects";
import Hero from "@/Components/Home/Hero/Hero";
import Technologies from "@/Components/Home/Technologies/Technologies";
import Testimonials from "@/Components/Home/Testimonials/Testimonials";




export default function Home() {
  return (
    <div className="">
      <Hero />
      <Expertise></Expertise>
      <Technologies></Technologies>
      <FeaturedProjects></FeaturedProjects>
      <Testimonials></Testimonials>
      <Contact></Contact>
      
    </div>
  );
}
