import Link from "next/link";
import React from "react";
import Animate from "../Components/softwareEngineerWording";
import { motion } from "framer-motion";

const MHomePage = () => {

    return (
        <motion.section id="home" 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
        className="flex h-screen w-full">
              <div className=" mx-auto w-full px-5">
                {/* Profile Image on top */}
                <div className="flex justify-center">
                  <img
                    src="./profilepicture.webp"
                    alt="Profile picture"
                    className="w-40  object-cover"
                  />
                </div>
                <h1 className="text-yellow-300 text-l">Hello Welcome,</h1>
                <h1 className="text-white text-3xl font-bold">I`m Kasun Jayamaha</h1>
                {/* Animating text */}
                <Animate />
                <p className="text-yellow-300 text-s mt-2">
                  With a passion for solving problems through code. I specialize
                  in creating efficient, scalable solutions and love turning ideas
                  into impactful digital experiences.
                </p>
                <p className="text-yellow-300 text-m mt-2">
                  Let’s build something amazing together!
                </p>
                <div className="flex justify-end mt-4 mr-20">
                  
                <div className="relative inline-block">
                  <button className="px-3 py-1 text-yellow-300 text-sm border border-yellow-300 rounded-md hover:bg-yellow-300 hover:text-black mr-20 relative">
                    <Link href="#contact">contact me</Link>
                    <span className="absolute top-1 right-0.5 transform translate-x-1/2 -translate-y-1/2 flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"></span>
                    </span>
                  </button>
                </div>

                </div>
              </div>

           
          </motion.section>
    );
}   
export default MHomePage;