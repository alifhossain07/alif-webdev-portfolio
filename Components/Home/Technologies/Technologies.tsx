"use client";

const Technologies = () => {
  return (
    <div className=" bg-soft-white py-20">
      <div className="text-center">
        <h1 className="text-center text-4xl font-bold font-title">
          <span className="text-sky-500">Technologies</span> & Tools
        </h1>
        <p className="text-center w-5/12 mx-auto text-gray-600 font-text mt-5 text-2xl tracking-wider">
          Skills and Resources I Use to Create Websites, WordPress Designs, and
          Manage Content
        </p>
      </div>

      {/* Central Div to Include the Tools and Technologies */}
      <div className="w-10/12 mx-auto flex flex-col">
        {/* 6 divs to add 6 categories of skills and tools */}
        <div className="flex justify-between gap-8 mt-10">
          <div>
            <h1 className="font-title text-2xl tracking-wide">Frontend Development</h1>
          </div>
          <div>
            <h1>All the Icons</h1>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-10">
          <div>
            <h1 className="font-title text-2xl tracking-wide">Backend Development</h1>
          </div>
          <div>
            <h1>All The Icons</h1>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-10">
          <div>
            <h1 className="font-title text-2xl tracking-wide">UI/UX Design</h1>
          </div>
          <div>
            <h1>All The Icons</h1>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-10">
          <div>
            <h1 className="font-title text-2xl tracking-wide">Wordpress Design</h1>
          </div>
          <div>
            <h1 >All The Icons</h1>
          </div>
        </div>
        <div className="flex justify-between gap-8 mt-10">
          <div><h1 className="font-title text-2xl tracking-wide">Content Management</h1></div>
          <div><h1>all the icons</h1> </div>
        </div>
        <div className="flex justify-between gap-8 mt-10">
          <div> <h1 className="font-title text-2xl tracking-wide">Essentials</h1></div>
          <div><h1>All the Icons</h1></div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
