import AllProjects from "@/Components/Projects/AllProjects";


export default function Home() {
  return (
    <div>
      <div className="relative pt-64 h-[] text-white py-28">
      {/* Background Image with Black Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-no-repeat bg-center "
        style={{ backgroundImage: `url('/image/projectpageintro.webp')` }}
      >
        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 z-10">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold font-title mb-8">
          My <span className="text-sky-500"> Projects</span>
        </h1>

        {/* Subheading */}
        <p className="text-2xl font-text mb-12 max-w-4xl">
          Explore a variety of innovative projects I have worked on. From frontend magic to full-stack solutions, each project represents my passion for clean design, efficient coding, and practical application. Lets take a dive into what Ive built.
        </p>

        
      </div>
    </div>

    {/* Project Page COntents Starts Here */}

    <div>
      <AllProjects />
    </div>




    </div>
    
  );
}
