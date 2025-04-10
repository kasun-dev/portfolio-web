import Link from "next/link";
import React from "react";
import { handleDownloadCV } from "../UtilityFunctions/cvBtnUtil";


const MAboutPage = () => {

    return (
        <section id="about" className="flex h-screen md:hidden pt-16 ">
          <div className=" w-full px-5 mt-5">
              <h1 className="text-white text-2xl text-bold">About Kasun Jayamaha,</h1>
              <div className="mr-20">
            <button
              className="mb-2 px-2 py-1 ml-auto mr-5 text-yellow-300 text-sm border border-yellow-300 rounded-md active:bg-yellow-300 active:text-black"
              onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
            <h1 className="text-white text-l mt-3 px-8">Age: 23 | From Colombo</h1>
            <p className="text-yellow-300 text-s mt-2">
              Hello! I’m Kasun Jayamaha, a passionate software engineer currently pursuing my degree at the Sri Lanka 
              Institute of Information Technology (SLIIT). With a deep interest in technology and a creative mindset, 
              I love to think outside the box and solve problems through innovative solutions.
            </p>
            <p className='text-l mt-2 px-auto text-m mb-1'>
                  Key Interests and Skills:
                </p>
                <ul className='px-auto ist-none list-disc text-white pl-2'>
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
                <p className="text-yellow-300 text-m mt-2">
                Let’s Build Something Amazing Together! Whether it’s a complex software solution, an IoT project, or an innovative idea, 
                I’m eager to collaborate and bring your vision to life. Reach out to connect or see my work!
                </p>
          </div>
          
            
            

        </section>
    );

};

export default MAboutPage;