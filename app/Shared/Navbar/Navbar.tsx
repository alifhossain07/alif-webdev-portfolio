"use client";

import Link from "next/link";
import { Navbar } from "@heroui/navbar";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="shadow-2xl hidden lg:block fixed w-full z-50 py-6 bg-slate-50">
        <div className="flex w-11/12 mx-auto justify-between items-center p-4">
          <div className="flex font-title text-2xl space-x-4">
            <ul className="list-none flex space-x-14">
              <Link href="/"><li>Home</li></Link>
              <Link href="/about"><li>About</li></Link>
              <Link href="/projects"><li>Projects</li></Link>
            </ul>
          </div>
          <div>
            <h1 className="font-logo uppercase tracking-widest text-5xl">
              Alif Hossain
            </h1>
          </div>
          <div className="flex font-title text-2xl space-x-4">
            <ul className="list-none flex space-x-14">
              <Link href="/blogs"><li>Blogs</li></Link>
              <Link href="/component"><li>Components</li></Link>
              <Link href="/contact"><li>Hire Me</li></Link>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="shadow-2xl lg:hidden fixed w-full z-50 py-6 bg-slate-50">
        <Navbar className="flex justify-between items-center w-full mx-auto">
          {/* Title (Left) */}
          <h1 className="font-logo uppercase tracking-widest text-3xl">
            Alif Hossain
          </h1>

          {/* Hamburger Menu (Right) */}
          <button
            className="bg-transparent border-4"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu size={32} />
          </button>
        </Navbar>

        {/* Dropdown Menu */}
        <div
          className={`absolute right-4 top-24 bg-sky-300 shadow-lg rounded-lg w-48 z-50 overflow-hidden transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
          }`}
        >
          <ul className="list-none font-text p-2">
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/about" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/projects" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/blogs" onClick={closeMenu}>
                Blogs
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/component" onClick={closeMenu}>
                Components
              </Link>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <Link href="/contact" onClick={closeMenu}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
