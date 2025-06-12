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
import MSkillsPage from "./mobilePages/skillPage";

function Page() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isMobileDevice = /android|iphone|ipad|ipod/i.test(userAgent.toLowerCase());
    setIsMobile(isMobileDevice);
  }, []);

  // Scroll to section after DOM and mobile check
  useEffect(() => {
    if (isMobile !== null && typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace("#", "");
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100); // wait for components to render
      }
    }
  }, [isMobile]);

  if (isMobile === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-#0a0a0a">
        <p className="text-yellow-400 text-lg">Loading...</p>
        <div className="w-5 h-5 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>

      {/* Body */}
      <div>
        {isMobile ? (
          <>
            <MHomePage />
            <MAboutPage />
            <MSkillsPage />
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
