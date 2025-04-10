import Link from "next/link";
import React from "react";
import Animate from "../Components/softwareEngineerWording";
import { motion } from "framer-motion";

const HomePage = () => {

    return (
        <motion.section id="home" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}

        className="flex h-screen items-center">
            {/* Two-column layout */}
            <div className="grid grid-cols-2 w-full px-10">
              {/* Column 1 - Welcome Note */}
              <div className="flex flex-col justify-center ml-20">
                <h1 className="text-yellow-300 text-xl">Hello Welcome,</h1>
                <h1 className="text-white text-5xl font-bold">I`m Kasun Jayamaha</h1>
                {/* Animating text */}
                <Animate/>
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
                  src="./profilepic.webp"
                  alt="Profile picture"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105 mt-20"
                />
              </div>
            </div>
          </motion.section>
    );
}   
export default HomePage;