"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { handleDownloadCV } from "./UtilityFunctions/cvBtnUtil";

const NavBar = () => {
  const [activeSection, setActiveSection] = useState<string>("");

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
      <nav className="flex justify-center w-full text-sm">
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
              href=""
              className="block px-4 py-1 hover:bg-yellow-300 hover:text-black"
              onClick={handleDownloadCV}
            >
              download CV
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
