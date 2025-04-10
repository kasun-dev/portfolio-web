import React from "react";
import Image from "next/image";

const SkillsPage = () => {

    return (
        <section id="skills" className="flex h-screen items-center ">
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
    );
};

export default SkillsPage