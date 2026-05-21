import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import SocialRail from './components/SocialRail.jsx'

const NAV_OFFSET = 72

function cleanUrl() {
  const { pathname, search } = window.location
  window.history.replaceState(null, '', pathname + search)
}

function scrollToId(id, smooth = true) {
  if (!id || id === 'top') {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    return
  }
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET
  window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
}

export default function App() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      setTimeout(() => {
        scrollToId(id, false)
        cleanUrl()
      }, 0)
    }

    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const href = link.getAttribute('href')
      if (!href || href === '#') return
      e.preventDefault()
      scrollToId(href.slice(1))
      cleanUrl()
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  return (
    <>
      <Navbar />
      <SocialRail />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
