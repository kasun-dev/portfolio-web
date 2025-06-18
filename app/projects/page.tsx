"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProjectPage = () => {
  const [activeType, setActiveType] = useState("All");

  const projects = [
    {
      imgSrc: "./food-delivery.png",
      alt: "Food Delivery App",
      title: "Food Delivery Platform",
      description: "A fullstack food delivery platform using microservices for restaurant, delivery, and payment services.",
      repo: "https://github.com/Food-Delivery-App-SLIIT-DS-Project",
      link: "",
      type: "Fullstack",
      technologies: ["MERN Stack", "GRPC", "Docker", "Kafka", "MongoDB"],
    },
    {
      imgSrc: "./portfolio.png",
      alt: "Portfolio Website",
      title: "Personal Portfolio",
      description: "A responsive portfolio website built using Next.js and Tailwind CSS to showcase personal projects and skills.",
      repo: "https://github.com/kasun-dev/portfolio-web",
      link: "https://kasun-dev.github.io/portfolio-web",
      type: "Frontend",
      technologies: ["Next.js", "Tailwind CSS", "React","GitHub Pages"],
    },
    {
      imgSrc: "./esp32-research.png",
      alt: "ESP32 Research Project",
      title: "ESP32 Research Project",
      description: "A collection of personal ESP32-based IoT experiments for self-learning. Continuously updated with code, circuit diagrams, and explanations.",
      repo: "https://github.com/kasun-dev/ESP32-IoT-Research-Experiments",
      link: "",
      type: "IoT",
      technologies: ["ESP32", "Firebase", "Arduino", "React","Flutter","Bluetooth & WiFi"],
    },
    {
      imgSrc: "./country-search.png",
      alt: "Country Search App",
      title: "Country Search App",
      description: "A frontend app that allows users to search for countries and view detailed information using REST Countries API.",
      repo: "https://github.com/kasun-dev/countrySearch-Frontend",
      link: "https://country-search-frontend.vercel.app/",
      type: "Frontend",
      technologies: ["React", "REST API", "CSS Modules"],
    },
    {
      imgSrc: "./nourish-lanka.png",
      alt: "Nourish Lanka",
      title: "Nourish Lanka - Food Donation System",
      description: "A donation-based system to connect food donors with NGOs and underprivileged communities.",
      repo: "https://github.com/OsinduV/NourishLanka-Food_Donation_System-MERN",
      link: "",
      type: "Fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      imgSrc: "./finance-backend.png",
      alt: "Finance Tracker Backend",
      title: "Finance Tracker Backend",
      description: "A backend API for managing user finances including income, expenses, and analytics.",
      repo: "https://github.com/kasun-dev/FinancialTracker-NodeBackend",
      link: "",
      type: "Backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    },
    {
      imgSrc: "./pawpal.png",
      alt: "PawPal Pet App",
      title: "PawPal - Pet Care and Adoption App",
      description: "A mobile-first platform to adopt pets, get vet advice, and manage pet care routines.",
      repo: "https://github.com/SLIIT-3Y-S1/UEE_PetsAdoption",
      link: "",
      type: "Mobile",
      technologies: ["Flutter", "Firebase"],
    },
    {
      imgSrc: "./hms.png",
      alt: "Hospital Management System",
      title: "Hospital Management System",
      description: "A system to manage hospital workflows including patients, appointments, billing, and staff.",
      repo: "https://github.com/SLIIT-3Y-S1/CSSE_HMS",
      link: "",
      type: "Fullstack",
      technologies: ["Next.js", "Nest.js", "Prism", "SQL", "Tailwind CSS"],
    },
    {
      imgSrc: "./todo-app.png",
      alt: "Todo List App",
      title: "Wht to Do - Todo List App",
      description: "A mobile todo app that helps users manage daily tasks with a clean and intuitive interface.",
      repo: "https://github.com/kasun-dev/whtTODO",
      link: "",
      type: "Mobile",
      technologies: ["Kotlin", "Android SDK", "MVVM", "Room Database"],
    },
    {
      imgSrc: "./laundryPro.png",
      alt: "Laundry Management System",
      title: "Laundry Management System",
      description: "Java-Servelets based system for managing laundry services, including user management and order tracking.",
      repo: "https://github.com/kasun-dev/laundryProProject",
      link: "",
      type: "Fullstack",
      technologies: ["MySQL", "Java", "CSS", "Java Servlets", "JSP"],
    },
  ];

  const types = ["All", "Frontend", "Backend", "Fullstack", "Mobile", "IoT"];

  const filteredProjects =
    activeType === "All"
      ? projects
      : projects.filter((proj) => proj.type === activeType);

  return (
    <div className="flex flex-col items-center justify-start py-16 px-4 text-white max-w-7xl mx-auto overflow-x-hidden">

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-1 border-2 font-semibold rounded transition ${
              activeType === type
                ? "bg-yellow-300 text-black border-yellow-300"
                : "text-yellow-300 border-yellow-300 hover:bg-yellow-400 hover:text-black"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="hover:border border-yellow-300 rounded-lg pb-4 flex flex-col items-start hover:shadow-lg transition bg-gray-900"
          >
            <img
              src={project.imgSrc}
              alt={project.alt}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <div className="px-4">
              <h2 className="text-xl font-bold text-yellow-300">{project.title}</h2>
              <p className="text-sm text-gray-300 mt-1">{project.description}</p>
              <div className="text-xs text-yellow-400 mt-2">
                {project.technologies.join(", ")}
              </div>
              <div className="flex mt-4 gap-3 text-sm flex-wrap">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-300 text-black px-3 py-1 rounded font-semibold hover:bg-yellow-400 transition"
                  >
                    Repo
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-300 text-black px-3 py-1 rounded font-semibold hover:bg-yellow-400 transition"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
