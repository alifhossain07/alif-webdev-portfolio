import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";


const testimonials = [
  {
    name: "Md Najir Ahamed Prodania",
    position: "Chairman at Nexa Developments LTD",
    testimony:
      "Superfast delivery! He built my real estate website quickly and just as I wanted. I barely needed to explain. Highly recommended!",
    image: "https://i.ibb.co.com/YTfs18y8/Md-Najir-Ahamed-Prodania.png",
  },
  {
    name: "Nasimul Alam",
    position: "Graphic Designer At AdobeFaysal",
    testimony:
      "Very Co-operative. Does Exactly As Instructed. Needed a Help with a Wordpress Website and He Provided the support in time.",
    image: "https://i.ibb.co.com/gbpqL7py/nasimulalam.jpg",
  },
  {
    name: "Ahmed Raad",
    position: "Student at RUET",
    testimony:
      "Needed a full-stack app urgently with a tight deadline, and he delivered it in just two days. Looking forward to working with him again!.",
    image: "https://i.ibb.co.com/G3VWD32h/raad.jpg",
  },
  {
    name: "Abdullah Al Mamun",
    position: "BeamLOL Owner",
    testimony:
      "Very Urgently needed a Landing Page for my Gaming Platform. He delivered it within a day. Didn't Have To Ask For Reviews. I am very happy with his work.",
    image: "https://i.ibb.co.com/WvmzKqvc/mamunmia.jpg",
  },
  
];

const Testimonials = () => {
  return (
    <div className=" py-20 bg-soft-white">
        <div className="w-10/12 mx-auto">
        <div className="text-center">
        <h1 className="text-4xl font-bold font-title">
        <span className="text-sky-500">Client </span>Experiences
        </h1>
        <p className="text-2xl mx-auto mt-5 text-gray-600 tracking-wider max-w-4xl">
        Hear from my clients about their experience working with me and the quality I deliver.
        </p>
      </div>
      {/* Marquee Slider */}
      <Marquee speed={100} pauseOnHover={false} gradient={false} gradientWidth={60} >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 hover:bg-sky-300 duration-500 bg-sky-200 w-96 mx-2 mt-20"> {/* Reduced horizontal margin */}
            <div className="shadow-lg p-10 h-80 flex flex-col justify-between"> {/* Set fixed height */}
              <div className="flex flex-col flex-grow "> {/* Center alignment */}
              <Image
  src={testimonial.image}
  alt={testimonial.name}
  className="w-20 h-20 rounded-full mb-4 shadow-md"
  width={80} // Set width to 80px (or adjust to your preference)
  height={80} // Set height to 80px (or adjust to your preference)
/>

                <p className=" font-text mb-4 text-gray-700 flex-grow"> {/* Added flex-grow for even spacing */}
                  {testimonial.testimony}
                </p>
              </div>
              <div className="">
                <h3 className="font-title font-bold text-lg">{testimonial.name}</h3>
                <span className="font-para text-blue-700">{testimonial.position}</span>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
        </div>
      
    </div>
  );
};

export default Testimonials;