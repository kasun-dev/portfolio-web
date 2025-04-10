"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/aboutPage";
import Footer from "./Components/footer";
import ContactPage from "./Pages/contactPage";
import ProjectPage from "./Pages/projectsPage";
import SkillsPage from "./Pages/skillPage";
import MHomePage from "./mobilePages/homePage";


function Page() {

  return (
    <div>
        {/*nav bar*/}
        <NavBar/>

        {/*body content of the web*/}
        <div>

          {/*home page*/}
          <HomePage/>
          <MHomePage/>

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
