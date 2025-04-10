"use client";
import React from "react";
import Image from "next/image";

const skills = [
  { src: "./c.svg", alt: "C" },
  { src: "./c+.svg", alt: "C++" },
  { src: "./java.svg", alt: "Java" },
  { src: "./js.svg", alt: "JavaScript" },
  { src: "./ts.svg", alt: "TypeScript" },
  { src: "./react.svg", alt: "React" },
  { src: "./css.svg", alt: "CSS" },
  { src: "./html.svg", alt: "HTML" },
  { src: "./nextjs.webp", alt: "Next.js" },
  { src: "./tw.svg", alt: "Tailwind CSS" },
  { src: "./node.svg", alt: "Node.js" },
  { src: "./express.png", alt: "Express" },
  { src: "./nest.svg", alt: "NestJS" },
  { src: "./mongodb.svg", alt: "MongoDB" },
  { src: "./msql.svg", alt: "MySQL" },
  { src: "./firebase.svg", alt: "Firebase" },
  { src: "./flutter.svg", alt: "Flutter" },
  { src: "./kotlin.svg", alt: "Kotlin" },
  { src: "./figma.svg", alt: "Figma" },
  { src: "./arduno.svg", alt: "Arduino" },
  { src: "./postman.svg", alt: "Postman" },
  { src: "./esp.png", alt: "ESP32" },
];

const animations = [
  "animate-pulse",
  "animate-spin-slow",
  "animate-float",
  "animate-wiggle",
];


const customAnimations = `

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-float {
  animation: float 3s ease-in-out infinite;
}

`;

export default function MSkillsPage() {
  return (
    <section id="skills" className="ml-10 py-20">
      <div className=" text-white py-10 min-h-screen">
        <style>{customAnimations}</style>
        <h2 className="text-2xl font-bold text-center text-yellow-400 mb-8 mr-10">Skills & Expertise</h2>
        <div className="grid grid-cols-4 sm:grid-cols-4 gap-8 justify-items-center">
          {skills.map((skill, index) => {
            const randomAnim = animations[Math.floor(Math.random() * animations.length)];
            return (
              <div key={index} className={`w-20 h-20 ${randomAnim}`}>
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={50}
                  height={50}
                  className="object-contain hover:scale-110 transition-transform duration-300 ease-in-out hover:"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
