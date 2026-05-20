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
    const targets = SECTIONS
      .map((s) => document.getElementById(s.id))
      .filter(Boolean)

    if (targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1]
      }
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
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
