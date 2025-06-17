"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { handleDownloadCV } from "../UtilityFunctions/cvBtnUtil"; 

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <header className="sticky top-2.5 z-10 flex items-center w-full mt-2.5 px-5">
      {/* Logo Image */}
      <Image src="./logo.png" width={55} height={55} alt="logo image" />

      {/* Nav bar */}
      <nav className="hidden md:flex justify-center w-full text-sm">
        <Link
          href="#home"
          className={`mx-8 ${
            activeSection === "home"
              ? "text-yellow-300"
              : "hover:text-yellow-300"
          }`}
        >
          home
        </Link>
        <Link
          href="#about"
          className={`mx-8 ${
            activeSection === "about"
              ? "text-yellow-300"
              : "hover:text-yellow-300"
          }`}
        >
          about
        </Link>
        <Link
          href="#contact"
          className={`mx-8 ${
            activeSection === "contact"
              ? "text-yellow-300"
              : "hover:text-yellow-300"
          }`}
        >
          contact
        </Link>
        {/* More dropdown */}
        <div className="relative group mx-8">
          <div className="flex flex-row items-center cursor-pointer ">
            more
            <Image
              src="./downarrow.png"
              width={8}
              height={8}
              alt="downarrow"
              className="ml-1 transform group-hover:rotate-180 transition-transform duration-300"
            />
          </div>
          {/* Dropdown menu */}
          <div className="absolute left-0 w-32 bg-black text-white text-sm rounded-md hidden group-hover:block border border-white">
            <Link
              href="#projects"
              className="block px-4 py-1 hover:bg-yellow-300 hover:text-black "
            >
              projects
            </Link>
            <Link
              href="#skills"
              className="block px-4 py-1 hover:bg-yellow-300 hover:text-black"
            >
              skills
            </Link>
            <Link
              href="https://medium.com/@ks2005755/iot-internet-of-things-introduction-a0197810f923"
              className="block px-4 py-1 hover:bg-yellow-300 hover:text-black"
            >
              blogs
            </Link>
            <Link
              href=""
              className="block px-4 py-1 hover:bg-yellow-300 hover:text-black"
              onClick={handleDownloadCV}
            >
              download CV
            </Link>
          </div>
        </div>
      </nav> 
      {/* Hamburger Menu Icon - Mobile only */}
      <div className="md:hidden flex justify-end w-full">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <Image src="./hamburger-icon.png" width={23} height={23} alt="menu" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-start p-5 gap-4 md:hidden">
          <Link href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ml-20 active:text-yellow-300">
              home
            </div>
          </Link>
          <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ml-20 active:text-yellow-300">
              about
            </div>
          </Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ml-20 active:text-yellow-300">
              contact
            </div>
          </Link>
          <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ml-20 active:text-yellow-300">
              projects
            </div>
          </Link>
          <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ml-20 active:text-yellow-300">
              skills
            </div>
          </Link>
          <Link href="https://medium.com/@ks2005755/iot-internet-of-things-introduction-a0197810f923" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ml-20 active:text-yellow-300">
              blogs
            </div>
          </Link>
          <button onClick={handleDownloadCV} className="ml-20 text-yellow-300 ">downloads</button>
        </div>
      )}

    </header>    
  );
};

export default NavBar;
