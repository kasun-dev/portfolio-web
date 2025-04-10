import Link from "next/link";
import React from "react";
import { handleDownloadCV } from "../UtilityFunctions/cvBtnUtil";


const AboutPage = () => {

    return (
        <section id="about" className="flex h-screen items-center ">
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
    );

};

export default AboutPage;