import { useEffect, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [hasVideo, setHasVideo] = useState(true)

  useEffect(() => {
    setHasVideo(true)
    if (!project) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  const gradient = `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-media" style={{ background: gradient }}>
          {hasVideo && project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              controls
              playsInline
              onError={() => setHasVideo(false)}
            />
          ) : (
            <div className="poster">{project.title}</div>
          )}
        </div>
        <div className="modal-body">
          <div className="head">
            <div>
              <h2>{project.title}</h2>
              <div className="sub">{project.tagline}</div>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close">×</button>
          </div>
          <p className="desc">{project.description}</p>
          <div className="modal-info">
            <div><div className="k">Year</div><div className="v">{project.year}</div></div>
            <div><div className="k">Role</div><div className="v">{project.role}</div></div>
            <div><div className="k">Platform</div><div className="v">{project.platform}</div></div>
            <div><div className="k">Duration</div><div className="v">{project.duration}</div></div>
          </div>
          <h3 style={{ marginTop: 4, marginBottom: 8 }}>Highlights</h3>
          <ul style={{ paddingLeft: 18, margin: '0 0 18px', color: 'var(--text-soft)' }}>
            {project.highlights.map((h) => <li key={h} style={{ marginBottom: 6 }}>{h}</li>)}
          </ul>
          <div className="modal-stack">
            {project.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
          </div>
          <div className="modal-actions">
            {project.links?.map((l) => (
              <a key={l.label} href={l.href} className="btn" target="_blank" rel="noreferrer">
                {l.label} <span className="btn-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
