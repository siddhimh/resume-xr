import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

export default function Navbar() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const probe = window.scrollY + 140
      let current = SECTIONS[0].id
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id)
        if (el && el.offsetTop <= probe) {
          current = s.id
        }
      }
      const doc = document.documentElement
      const atBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 4
      if (atBottom) current = SECTIONS[SECTIONS.length - 1].id
      setActive(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">SIDDHI MHATRE</a>
        <nav className="nav-links">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'active' : ''}
              aria-current={active === s.id ? 'true' : undefined}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
