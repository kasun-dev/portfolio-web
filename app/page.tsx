"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import NavBar from "./Components/NavBar";
import HomePage from "./Components/homePage";
import AboutPage from "./Components/aboutPage";
import Footer from "./Components/footer";
import ContactPage from "./Components/contactPage";
import ProjectPage from "./Components/projectsPage";
import SkillsPage from "./Components/skillPage";


function Page() {

  return (
    <div>
        {/*nav bar*/}
        <NavBar/>

        {/*body content of the web*/}
        <div>

          {/*home page*/}
          <HomePage/>

          {/*about section*/}
          <AboutPage/>

          {/*projects page start here*/}
          <ProjectPage/>

          {/*skills pages starts here*/}
          <SkillsPage/>

          {/*contact page*/}
          <ContactPage/>
          
          {/*footer is here*/}
          <Footer/>
        </div>
    </div>
  );
}

export default Page;
