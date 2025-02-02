"use client";
import { Tooltip } from "@heroui/tooltip";
import Image from "next/image";

const Technologies = () => {
  return (
    <div className="bg-soft-white py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-title">
          <span className="text-sky-500">Technologies</span> & Tools
        </h1>
        <p className="text-2xl mx-auto mt-5 text-gray-600 tracking-wider max-w-4xl">
          Skills and Resources I Use to Create Websites, WordPress Designs, and Manage Content
        </p>
      </div>

      {/* Single div with flexbox to handle two rows */}
      <div className="flex flex-wrap gap-16 justify-center w-10/12 mt-20 mx-auto">
        {/* First 10 icons */}
        <Tooltip
  classNames={{
    base: ["before:bg-neutral-400 dark:before:bg-white"],
    content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
  }}
  closeDelay={0}
  content={
    <div className="px-1 py-2">
      <div className="text-small text-sky-500 font-title  font-bold">HTML5</div>
      <div className="text-tiny">Frontend Development</div>
    </div>
  }
>
  <div className="flex justify-center items-center mb-4">
    <Image
      src="https://i.ibb.co.com/tNg0DLZ/html5-original.png"
      alt="HTML5"
      width={80}
      height={80}
      className="object-contain  transition-all duration-300 ease-in-out transform hover:scale-110 "
    />
  </div>
</Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">CSS3</div>
              <div className="text-tiny">Frontend Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/n80JZMbc/css3-original.png"
              alt="CSS3"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">JavaScript</div>
              <div className="text-tiny">Frontend & Backend Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/MKjLHrC/javascript-original.png"
              alt="JavaScript"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">React.js</div>
              <div className="text-tiny">Frontend Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/nNt2WRym/react-original.png"
              alt="React.js"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Tailwind CSS</div>
              <div className="text-tiny">Frontend Styling</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/qMGLDKf3/tailwindcss-plain.png"
              alt="Tailwind CSS"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">TypeScript</div>
              <div className="text-tiny">Frontend & Backend Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/bMbMvvn6/typescript-plain.png"
              alt="TypeScript"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Next.js</div>
              <div className="text-tiny">Full-Stack Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/VcQLCmNp/nextjs-line.png"
              alt="Next.js"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Node.js</div>
              <div className="text-tiny">Backend Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/Xkd90DWD/nodelogo.png"
              alt="Node.js"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        {/* Second row of 8 icons */}
        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Express.js</div>
              <div className="text-tiny">Backend Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/MkjpNtgH/express-original-wordmark1.png"
              alt="Express.js"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">MongoDB</div>
              <div className="text-tiny">Database Management</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/VsQSW7P/mongodb-original-wordmark.png"
              alt="MongoDB"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Figma</div>
              <div className="text-tiny">UI/UX Design</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/rGHMQ3KZ/figma-original.png"
              alt="Figma"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Canva</div>
              <div className="text-tiny">Graphic Design</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/wZTBQbYT/canva-original.png"
              alt="Canva"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">WordPress</div>
              <div className="text-tiny">Website Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/35D4FXLj/wordpress-plain.png"
              alt="WordPress"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">Elementor</div>
              <div className="text-tiny">Page Building</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/0b7DX6Z/elementor-Logo.png"
              alt="Elementor"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>

        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">WooCommerce</div>
              <div className="text-tiny">E-commerce Development</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/GDPnCs1/woocommerce-original.png"
              alt="WooCommerce"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>
        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">CapCut</div>
              <div className="text-tiny">Video Editing</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/LXft9Djq/capcut-logo.png"
              alt="WooCommerce"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>
        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">VS Code</div>
              <div className="text-tiny">For Coding</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/BVWjy0fB/vscode-original.png"
              alt="WooCommerce"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>
        <Tooltip
          classNames={{
            base: ["before:bg-neutral-400 dark:before:bg-white"],
            content: ["py-2 px-4 shadow-xl", "text-white bg-black"],
          }}
          closeDelay={0}
          content={
            <div className="px-1 py-2">
              <div className="text-small text-sky-500 font-title font-bold">GitHub</div>
              <div className="text-tiny">Version Control</div>
            </div>
          }
        >
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://i.ibb.co.com/mrfHpr89/Github-Icon.png"
              alt="WooCommerce"
              width={80}
              height={80}
              className="object-contain transition-all duration-300 ease-in-out transform hover:scale-110"
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default Technologies;
