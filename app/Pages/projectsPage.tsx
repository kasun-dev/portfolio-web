import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = () => {

    return (
        <section id="projects" className="flex h-screen justify-self-center items-center ">
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


    );

}

export default ProjectPage;