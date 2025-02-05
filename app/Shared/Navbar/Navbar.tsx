"use client"

import Link from "next/link";
import { Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/navbar";
import React, { useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Components", href: "/component" },
    { name: "Hire Me", href: "/contact" },
  ];

  // Function to handle menu item click
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu on item click
  };

  // Effect to handle body overflow when the menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll when menu is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup to ensure scroll is enabled
    };
  }, [isMenuOpen]);

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
        <Navbar className="" onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarBrand>
              <h1 className="font-logo uppercase tracking-widest text-2xl">
                Alif Hossain
              </h1>
            </NavbarBrand>
          </NavbarContent>

          {/* Dropdown Menu for Mobile */}
          <NavbarMenu
            className={`transition-all duration-300 ease-in-out ${isMenuOpen ? 'block' : 'hidden'}`} 
            style={{ marginTop: '47px' }} // Add margin to push the menu below the navbar
          >
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link
                  className="w-full text-right" // Align text to the right
                  href={item.href} // Use correct href for navigation
                  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        //@ts-ignore
                  size="lg"
                  onClick={handleMenuItemClick} // Close the menu when item is clicked
                >
                  {item.name}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>

          {/* Mobile Menu Toggle */}
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu state on click
            className="sm:hidden"
          />
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
