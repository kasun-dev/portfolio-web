import About from "./Components/About";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Timeline from "./Components/Timeline";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Education />
      <Contact />
    </>
  );
}
