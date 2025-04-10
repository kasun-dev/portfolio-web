import Link from "next/link";
import React from "react";
import { handleDownloadCV } from "../UtilityFunctions/cvBtnUtil";



const MAboutPage = () => {

    return (
        <section id="about" className="flex h-screen pt-16">
          <div className=" w-full px-5 mt-5"
          >
              <h1 className="text-white text-2xl text-bold">About Kasun Jayamaha,</h1>
              <div className="mr-20">
            <button
              className="mb-2 px-2 py-1  mr-5 relative text-yellow-300 text-sm border border-yellow-300 rounded-md active:bg-yellow-300 active:text-black"
              onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>
            <h1 className="text-white text-l mt-3 px-8">Age: 23 | From Colombo</h1>
            <p className="text-yellow-300 text-s mt-5">
              Hello! I’m Kasun Jayamaha, a passionate software engineer currently pursuing my degree at the Sri Lanka 
              Institute of Information Technology (SLIIT). With a deep interest in technology and a creative mindset, 
              I love to think outside the box and solve problems through innovative solutions.
            </p>
            
            <p className="text-white text-sm my-5">
              I'm a problem solver with a passion for technology, particularly in Arduino, ESP32, and IoT. I love combining hardware and software to create impactful solutions. As a travel enthusiast, I gain inspiration from exploring new places, which enhances my creativity. I'm also a mobile photographer, sharing my work on Instagram at <Link href="https://www.instagram.com/click.ed_by/" className="hover:underline hover:text-yellow-300">click.ed_by</Link>.
            </p>

                <p className="text-yellow-300 text-m mt-2">
                Let’s Build Something Amazing Together! Whether it’s a complex software solution, an IoT project, or an innovative idea, 
                I’m eager to collaborate and bring your vision to life. Reach out to connect or see my work!
                </p>

                
          </div>
          
            
        </section>
    );

};

export default MAboutPage;