import { useRef, useState } from 'react'

export default function ProjectCard({ project, onOpen }) {
  const videoRef = useRef(null)
  const [hasVideo, setHasVideo] = useState(true)

  const handleEnter = () => {
    const v = videoRef.current
    if (!v) return
    v.currentTime = 0
    v.play().catch(() => { /* autoplay blocked is fine */ })
  }
  const handleLeave = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
  }

  const gradient = `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`

  return (
    <button
      className="project-card"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onFocus={handleEnter}
      onBlur={handleLeave}
      onClick={() => onOpen(project)}
      aria-label={`Open project ${project.title}`}
    >
      <div className="project-media" style={{ background: gradient }}>
        {hasVideo && project.video ? (
          <video
            ref={videoRef}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            onError={() => setHasVideo(false)}
          />
        ) : (
          <div className="poster">{project.title}</div>
        )}
        <span className="play" aria-hidden="true">▶</span>
      </div>
      <div className="project-body">
        <div className="row">
          <h3>{project.title}</h3>
          <span className="year">{project.year}</span>
        </div>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>
        <div className="meta">
          <span className="pill">{project.platform}</span>
          <span>{project.role}</span>
          <span>{project.duration}</span>
        </div>
      </div>
    </button>
  )
}
