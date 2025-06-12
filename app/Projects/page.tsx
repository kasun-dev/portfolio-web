"use client";
import React, { use, useState } from "react";

const ProjectPage = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  const menus = [
    { title: "Frontend Projects", id: "frontend", items: ["React Portfolio", "Landing Page", "UI Clone"] },
    { title: "Backend Projects", id: "backend", items: ["REST API", "Auth System", "Microservice"] },
    { title: "Fullstack Projects", id: "fullstack", items: ["MERN App", "Blog Platform", "E-Commerce Site"] },
    { title: "IOT Projects", id: "iot", items: ["ESP32 Light Control", "Home Automation", "Firebase Monitor"] },
  ];

  return (
    <div className="min-h-screen text-yellow-400 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>

      <div className="w-full max-w-md space-y-4">
        {menus.map((menu) => (
          <div key={menu.id} className=" rounded-lg shadow p-4">
            <button
              onClick={() => toggleMenu(menu.id)}
              className="w-full text-left font-semibold text-xl"
            >
              {menu.title}
            </button>
            {openMenu === menu.id && (
              <ul className="mt-2 pl-4 list-disc text-gray-300">
                {menu.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
