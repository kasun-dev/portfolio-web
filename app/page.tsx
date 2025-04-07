"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from "./InquiryForm";


function Page() {
  //handle download button
  const handleDownloadCV = () => {
    window.open('./cv.pdf', '_blank');
  };
  //nav bar 
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
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

  //form connect


  return (
    <div>
      <header className="sticky top-2.5 z-10 flex items-center w-full mt-2.5 px-5">
        {/* Logo Image */}
        <Image src="./logo.png" width={55} height={55} alt="logo image" />

        {/* Nav bar */}
        <nav className="flex justify-center w-full text-sm">
          <Link
            href="#home"
            className={`mx-8 ${
              activeSection === "home" ? "text-yellow-300" : "hover:text-yellow-300"
            }`}
          >
            home
          </Link>
          <Link
            href="#about"
            className={`mx-8 ${
              activeSection === "about" ? "text-yellow-300" : "hover:text-yellow-300"
            }`}
          >
            about
          </Link>
          <Link
            href="#contact"
            className={`mx-8 ${
              activeSection === "contact" ? "text-yellow-300" : "hover:text-yellow-300"
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


        {/*body content of the web*/}
        <div>

          {/*home page*/}
          <section id="home" className="flex h-screen items-center">
            {/* Two-column layout */}
            <div className="grid grid-cols-2 w-full px-10">
              {/* Column 1 - Welcome Note */}
              <div className="flex flex-col justify-center ml-20">
                <h1 className="text-yellow-300 text-xl">Hello Welcome,</h1>
                <h1 className="text-white text-5xl font-bold">I`m Kasun Jayamaha</h1>
                <h1 className="text-white text-xs text-center ml-20 pl-20">software Engineer</h1>
                <p className="text-yellow-300 text-m mt-2">
                  with a passion for solving problems through code. I specialize
                </p>
                <p className="text-yellow-300 text-m">
                  in creating efficient, scalable solutions and love turning ideas
                </p>
                <p className="text-yellow-300 text-m">into impactful digital experiences.</p>
                <p className="text-yellow-300 text-m mt-2">
                  Let’s build something amazing together!
                </p>
                <div className="flex justify-end mt-4 mr-20">
                  
                <div className="relative inline-block">
                  <button className="px-4 py-2 text-yellow-300 text-sm border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black mr-20 relative">
                    <Link href="#contact">contact me</Link>
                    <span className="absolute top-1 right-0.5 transform translate-x-1/2 -translate-y-1/2 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                    </span>
                  </button>
                </div>

                </div>
              </div>

              {/* Column 2 - Profile Picture */}
              <div className="flex justify-center items-center ">
                <img
                  src="./profilepic.png"
                  alt="Profile picture"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105 mt-20"
                />
              </div>
            </div>
          </section>
          {/*about section*/}
          <section id="about" className="flex h-screen items-center">
            {/* Two-column layout */}
            <div className="grid grid-cols-2 w-full px-10">
              {/* Column 1 - Welcome Note */}
              <div className="flex flex-col justify-center ml-20">
                <h1 className="text-white text-3xl text-bold">About Kasun Jayamaha,</h1>
               
                <div className="flex justify-end mr-20">
                  <button
                    className="px-4 py-2 text-yellow-300 text-sm border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black mr-20"
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </button>
                </div>

                
                <h1 className="text-white text-xl mt-3 px-8">Age: 23 | From Colombo</h1>
                <p className="text-yellow-300 text-m mt-2 px-8">
                  Hello! I’m Kasun Jayamaha, a passionate software engineer currently pursuing my degree at the Sri Lanka 
                  Institute of Information Technology (SLIIT). With a deep interest in technology and a creative mindset, 
                  I love to think outside the box and solve problems through innovative solutions.
                </p>
                <p className='text-l mt-2 px-8 text-m mb-1'>
                  Key Interests and Skills:
                </p>
                <ul className='pl-11 pr-8 ist-none hover:list-disc text-white'>
                    <li className='mt-2'>
                       Problem Solver: I turn ideas into impactful, scalable digital solutions that deliver meaningful results.
                    </li>
                    <li className='mt-2'>
                      Tech Enthusiast: I have a keen interest in Arduino, ESP32, and IoT technologies. These areas are where I combine my love for 
                      technology with hands-on experience, working on projects that bridge the gap between software and hardware.
                    </li>
                    <li>
                    Travel Enthusiast: Exploring new places and cultures fuels my creativity and helps me approach problems from diverse perspectives.
                    </li>
                    <li className='mt-2'>
                    Mobile Photographer: Capturing stories through my Instagram handle,
                    <Link
                      href={'https://www.instagram.com/click.ed_by/'} className='hover:underline hover:text-yellow-300 px-1 hover:border hover:border-yellow-300 '>click.ed_by
                    </Link>
                    . allows me to express creativity visually.
                    </li>
                </ul>
                <p className="text-yellow-300 text-m mt-2 px-8">
                Let’s Build Something Amazing Together! Whether it’s a complex software solution, an IoT project, or an innovative idea, 
                I’m eager to collaborate and bring your vision to life. Reach out to connect or see my work!
                </p>
                
                
              </div>

              {/* Column 2 - Profile Picture */}
              <div className="flex justify-center items-center ">
                <img
                  src="./profilepicabt.png"
                  alt="Profile picture"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </section>

          {/*projects page start here*/}
          <section id="projects" className="flex h-screen justify-self-center items-center">
              <div className="flex flex-col ">
                <h1 className="text-white text-3xl font-bold mb-10 ml-10">Project's Highlights</h1>

                <div className="flex flex-row ">
                  {/* Project Card - PawPal */}
                  <div className="relative border border-yellow-300 w-80 h-96 mx-3 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md overflow-hidden group">
                    <h1 className="text-yellow-300 text-m text-center font-bold mt-2">
                      PawPal
                    </h1>
                    <h1 className="text-white text-sm text-center font-semibold">
                      [pet related mobile app]
                    </h1>
                    

                    {/* PawPal Image */}
                    <Image
                      src="./pawpal.png"
                      width={345}
                      height={345}
                      alt="pawpal"
                      className="w-full h-56 px-2 pt-4 object-cover transition-opacity duration-300 group-hover:blur-sm group-hover:opacity-40"
                    />

                    {/* Description Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                      <p className="text-white text-sm bg-black bg-opacity-70 rounded-md p-2">
                        PawPal is a mobile app designed for pet lovers. It includes features like pet adoption, lost pet tracking, donations, and a community space for pet enthusiasts.
                      </p>
                      {/* Buttons */}
                    <div className="flex flex-row justify-center mt-4">
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 text-yellow-300 hover:text-black hover:bg-yellow-300">
                        <Link
                        href={'https://www.figma.com/design/F1QJrmVUbH8uYb2c9M3uBA/pawpal?node-id=0-1&t=grPbMRP04FMnuKsV-1'}>Demo</Link>
                      </button>
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 hover:text-yellow-300 hover:bg-opacity-0 text-black bg-yellow-300">
                      <Link
                        href={'https://github.com/SLIIT-3Y-S1/UEE_PetsAdoption.git'}>Repository</Link>
                      </button>
                    </div>
                    </div>
                  </div>

                  {/* Project Card - norish */}
                  <div className="relative border border-yellow-300 w-80 h-96 mx-3 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md overflow-hidden group">
                    <h1 className="text-yellow-300 text-m text-center font-bold mt-2">
                      Nourish Lanka
                    </h1>
                    <h1 className="text-white text-sm text-center font-semibold">
                      [web-based food donation management]
                    </h1>

                    {/* PawPal Image */}
                    <Image
                      src="./norishlk.png"
                      width={345}
                      height={345}
                      alt="norish"
                      className="w-full h-56 px-2 pt-4 object-cover transition-opacity duration-300 group-hover:blur-sm group-hover:opacity-40"
                    />

                    {/* Description Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                      <p className="text-white text-sm bg-black bg-opacity-70 rounded-md p-2">
                      Nourish Lanka is a web-based food donation platform that connects donors and recipients to combat hunger and reduce food waste in Sri Lanka.
                       It enables individuals and organizations to donate surplus food, view donation requests, schedule pickups or deliveries, and track donation 
                       history, fostering a community-driven approach to addressing food insecurity.
                      </p>
                      {/* Buttons */}
                    <div className="flex flex-row justify-center mt-4">
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 text-yellow-300 hover:text-black hover:bg-yellow-300">
                        Demo
                      </button>
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 hover:text-yellow-300 hover:bg-opacity-0 text-black bg-yellow-300">
                      <Link
                        href={'https://github.com/OsinduV/NourishLanka-Food_Donation_System-MERN.git'}>Repository</Link>
                      </button>
                    </div>
                  </div>
                    </div>

                    

                  {/* Project Card - hms */}
                  <div className="relative border border-yellow-300 w-80 h-96 mx-3 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md overflow-hidden group">
                    <h1 className="text-yellow-300 text-m text-center font-bold mt-2">
                      H-Link
                    </h1>
                    <h1 className="text-white text-sm text-center font-semibold">
                      [hospial management system]
                    </h1>

                    {/* PawPal Image */}
                    <Image
                      src="./hms.png"
                      width={345}
                      height={345}
                      alt="hms"
                      className="w-full h-56 px-2 pt-4 object-cover transition-opacity duration-300 group-hover:blur-sm group-hover:opacity-40"
                    />

                    {/* Description Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                      <p className="text-white text-sm bg-black bg-opacity-70 rounded-md p-2">
                      H-Link is a web-based hospital management system designed to streamline and enhance hospital operations by managing 
                      core functionalities such as patient records, doctor consultations, appointments, and billing. The system aims to 
                      improve operational efficiency, reduce manual processes, and enhance the overall patient experience.
                      </p>
                      {/* Buttons */}
                    <div className="flex flex-row justify-center mt-4">
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 text-yellow-300 hover:text-black hover:bg-yellow-300">
                      <Link
                        href={'https://www.figma.com/design/0nE8s6GlJZCh0OjQBZs8jb/hlink?node-id=0-1&t=YaQGUNAVtBD0Qxva-1'}>Demo</Link>
                      </button>
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 hover:text-yellow-300 hover:bg-opacity-0 text-black bg-yellow-300">
                      <Link
                        href={'https://github.com/SLIIT-3Y-S1/CSSE_HMS.git'}>Repository</Link>
                      </button>
                    </div>
                  </div>
                    </div>

                    

                  {/* Project Card - hms */}
                  <div className="relative border border-yellow-300 w-80 h-96 mx-3 transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-md overflow-hidden group">
                    <h1 className="text-yellow-300 text-m text-center font-bold mt-2">
                      IdeoMix
                    </h1>
                    <h1 className="text-white text-sm text-center font-semibold">
                      [business insvestors and entrepreneur connecting web]
                    </h1>

                    {/* PawPal Image */}
                    <Image
                      src="./ideomx.png"
                      width={345}
                      height={345}
                      alt="pawpal"
                      className="w-full h-56 px-2 pt-4 object-cover transition-opacity duration-300 group-hover:blur-sm group-hover:opacity-40"
                    />

                    {/* Description Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                      <p className="text-white text-sm bg-black bg-opacity-70 rounded-md p-2">
                      IdeoMix is a platform designed to bridge the gap between investors and entrepreneurs. Its primary goal is to connect entrepreneurs 
                      with innovative ideas to potential investors who are looking for promising opportunities. The platform facilitates communication, 
                      idea sharing, and investment matching through user-friendly tools.
                      </p>
                       {/* Buttons */}
                    <div className="flex flex-row justify-center mt-4">
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 text-yellow-300 hover:text-black hover:bg-yellow-300">
                      <Link
                        href={'https://kasun-dev.github.io/ideomix/'}>Hosting</Link>
                      </button>
                      <button className="mx-2 my-2 p-1 rounded-md border border-yellow-300 hover:text-yellow-300 hover:bg-opacity-0 text-black bg-yellow-300">
                      <Link
                        href={'https://github.com/SLIIT-3Y-S1/CSSE_HMS.git'}>Repository</Link>
                      </button>
                    </div>
                    </div>

                   
                  </div>
                  
                </div>
              </div>
            </section>


          {/*skills pages starts here*/}
          <section id="skills" className="flex h-screen items-center">
            {/* Two-column layout */}
            <div className="grid grid-cols-2 w-full px-10">
              {/* Column 1 - Welcome Note */}
              <div className="flex flex-col justify-center ml-20">
                <h1 className="text-white text-3xl text-bold mb-5">Skills & Expertise</h1>

                <div className='ml-20'>

                <h1 className="text-yellow-300 text-sm mb-2 mt-3 px-8">Programming Languages</h1>
                <div className='flex flex-row border border-yellow-300 px-1 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <Image
                  src={'./c.svg'}
                  width={50}
                  height={50}
                  alt='c' className='transition-transform duration-300 ease-in-out transform hover:scale-110 ml-20 mr-5'/>
                  <Image
                  src={'./c+.svg'}
                  width={50}
                  height={50}
                  alt='c+' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5 '/>
                  <Image
                  src={'./java.svg'}
                  width={50}
                  height={50}
                  alt='java' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  <Image
                  src={'./js.svg'}
                  width={50}
                  height={50}
                  alt='js' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  <Image
                  src={'./ts.svg'}
                  width={50}
                  height={50}
                  alt='ts' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  
                  
                </div>
                <h1 className="text-yellow-300 text-sm mb-2 mt-3 px-8">Frontend Development</h1>
                
                <div className='flex flex-row border border-yellow-300 px-1 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <Image
                  src={'./react.svg'}
                  width={50}
                  height={50}
                  alt='react' className='transition-transform duration-300 ease-in-out transform hover:scale-110 ml-20 mr-5'/>
                  <Image
                  src={'./css.svg'}
                  width={50}
                  height={50}
                  alt='css' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5 '/>
                  <Image
                  src={'./html.svg'}
                  width={50}
                  height={50}
                  alt='html' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  <Image
                  src={'./nextjs.webp'}
                  width={50}
                  height={50}
                  alt='next' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  <Image
                  src={'./tw.svg'}
                  width={50}
                  height={50}
                  alt='tw' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  
                  
                </div>
                  
                <h1 className="text-yellow-300 text-sm mb-2 mt-3 px-8">Backend Development</h1>

                <div className='flex flex-row border border-yellow-300 px-1 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <Image
                  src={'./node.svg'}
                  width={50}
                  height={50}
                  alt='node' className='transition-transform duration-300 ease-in-out transform hover:scale-110 ml-20 mr-5'/>
                  <Image
                  src={'./express.png'}
                  width={50}
                  height={50}
                  alt='express' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5 '/>
                  <Image
                  src={'./nest.svg'}
                  width={50}
                  height={50}
                  alt='nest' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  
                </div>
                <h1 className="text-yellow-300 text-sm mb-2 mt-3 px-8">Database Technologies</h1>

                <div className='flex flex-row border border-yellow-300 px-1 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <Image
                  src={'./mongodb.svg'}
                  width={50}
                  height={50}
                  alt='mongodb' className='transition-transform duration-300 ease-in-out transform hover:scale-110 ml-20 mr-5'/>
                  <Image
                  src={'./msql.svg'}
                  width={50}
                  height={50}
                  alt='msql' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5 '/>
                  <Image
                  src={'./firebase.svg'}
                  width={50}
                  height={50}
                  alt='firebase' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  
                </div>
                
                <h1 className="text-yellow-300 text-sm mb-2 mt-3 px-8">Mobile Development</h1>

                <div className='flex flex-row border border-yellow-300 px-1 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <Image
                  src={'./flutter.svg'}
                  width={50}
                  height={50}
                  alt='flutter' className='transition-transform duration-300 ease-in-out transform hover:scale-110 ml-20 mr-5'/>
                  <Image
                  src={'./kotlin.svg'}
                  width={50}
                  height={50}
                  alt='kotlin' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5 '/>
                  
                </div>
                <h1 className="text-yellow-300 text-sm mb-2 mt-3 px-8">Others</h1>

                <div className='flex flex-row border border-yellow-300 px-1 py-1 rounded-md transition-transform duration-300 ease-in-out transform hover:scale-105'>
                  <Image
                  src={'./figma.svg'}
                  width={50}
                  height={50}
                  alt='figma' className='transition-transform duration-300 ease-in-out transform hover:scale-110 ml-20 mr-5'/>
                  <Image
                  src={'./arduno.svg'}
                  width={50}
                  height={50}
                  alt='arduno' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5 '/>
                  <Image
                  src={'./postman.svg'}
                  width={50}
                  height={50}
                  alt='postman' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  <Image
                  src={'./esp.png'}
                  width={50}
                  height={50}
                  alt='esp' className='transition-transform duration-300 ease-in-out transform hover:scale-110 mx-5'/>
                  
                </div>


                </div>
                
              </div>

              {/* Column 2 - Profile Picture */}
              <div className="flex justify-center items-center ">
                <img
                  src="./bgpenta.png"
                  alt="Profile picture"
                  
                />
              </div>
            </div>
          </section>

          {/*contact page starts here*/}
          <section id="contact" className="flex h-screen items-center">
            {/* Two-column layout */}
            <div className="grid grid-cols-2 w-full px-10">
              {/* Column 1 - Welcome Note */}
              <div className="flex flex-col justify-center ml-20">
                <h1 className="text-white text-3xl font-bold mb-5">Contact Information</h1>

                <table className="table-fixed text-yellow-300 ml-20 ">
                  
                  <tbody>
                    <tr>
                      <td className='flex flex-row mt-4'>
                      <Image 
                        src="./at.png" 
                        width={18} 
                        height={18} 
                        alt="downarrow" 
                        className="ml-1 mb-5" 
                      />
                         </td>
                      <td>
                        <Link href={'https://mail.google.com/mail/?view=cm&fs=1&to=ks2005755@gmail.com&su=Contact%20through%20the%20portfolio&body=Add%20your%20concerns'}
                          className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                          ks2005755@gmail.com
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./whatsapp.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://wa.me/qr/CD35YS53WK6JP1'}
                            className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                            (+94) 76 085 3136
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./linkedin.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://www.linkedin.com/in/kasun-jayamaha-32963829b/'}
                              className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                              www.linkedin.com/kasun-jayamaha
                        </Link>
                        </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./github.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://github.com/kasun-dev'}
                                    className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                                    www.github.com/kasun-dev
                        </Link>
                      
                       </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./facebook.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://www.facebook.com/profile.php?id=100031979594182&mibextid=ZbWKwL'}
                                className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                                 www.facebook.com/don-kasun-jayamaha
                        </Link>
                        </td>
                    </tr>
                    <tr>
                      <td className='flex flex-row mt-4'>
                        <Image 
                          src="./instagram.png" 
                          width={18} 
                          height={18} 
                          alt="downarrow" 
                          className="ml-1 mb-5" 
                        />
                         </td>
                      <td>
                        <Link href={'https://www.instagram.com/kx.0023/'}
                                  className='hover:bg-yellow-300 hover:text-black px-2 py-1 rounded-md'>
                                  www.instagram.com/kx.0023
                        </Link>
                        
                        </td>
                    </tr>
                    

                  </tbody>
                </table>

               
              </div>

              
              <div className="flex justify-center items-center ">
              <div className="relative w-full h-screen">
                {/* Background Image */}
                <img
                  src="./bgpenta.png"
                  alt="Profile picture"
                  className="w-full h-full object-cover"
                  
                />

                {/* Form Overlay */}
                <div className="absolute inset-0 flex items-center justify-start ml-20">
                 <ContactForm />
                </div>
              </div>

              </div>
            </div>
            <div>
            
            </div>
          </section>
          {/*footer is here*/}
          <footer>
            <div className='text-center text-sm bg-black bg-opacity-50 pt-3 pb-2 ml-20'>
            <p>© 2024 Kasun Jayamaha. All rights reserved.</p>
            <p>Built with React and Tailwind CSS | Hosted on Github pages</p>
            </div>
            
            
          </footer>
        </div>
    </div>
  );
}

export default Page;
