import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ProjectModal from './components/ProjectModal.jsx'

export default function App() {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects onOpen={setActiveProject} />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  )
}
