"use client";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/homePage";
import AboutPage from "./Pages/aboutPage";
import MFooter from "./Components/footerM";
import ContactPage from "./Pages/contactPage";
import ProjectPage from "./Pages/projectsPage";
import SkillsPage from "./Pages/skillPage";
import MHomePage from "./mobilePages/homePage";
import MAboutPage from "./mobilePages/aboutPage";
import MContactPage from "./mobilePages/contactPage";

function Page() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor 
    const isMobileDevice = /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    setIsMobile(isMobileDevice);
  }, []);

  if (isMobile === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-#0a0a0a">
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin">
      </div>
      </div>
      
    );
  }

  return (
    <div>
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}

      {/* Body */}
      <div>
        {isMobile ? (
          <>
            <MHomePage />
            <MAboutPage />
            <MContactPage />
          </>
        ) : (
          <>
            <HomePage />
            <AboutPage />
            <ProjectPage />
            <SkillsPage />
            <ContactPage />
          </>
        )}
      </div>

      {/* Footer */}
      <MFooter />
    </div>
  );
}

export default Page;
