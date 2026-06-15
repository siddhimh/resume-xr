import { Link, Navigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { getProjectById, getVideoEmbed } from '../data/projects.js'
import SocialRail from '../components/SocialRail.jsx'
import CaseStudySection from '../components/CaseStudySection.jsx'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = getProjectById(id)
  const embed = project ? getVideoEmbed(project.demo) : null
  const caseStudy = project?.caseStudy

  useEffect(() => {
    window.scrollTo(0, 0)
    if (project?.title) {
      document.title = `${project.title} — Siddhi Mhatre`
    }
    return () => {
      document.title = 'Siddhi Mhatre'
    }
  }, [id, project?.title])

  if (!project || (!project.demo && !project.caseStudy)) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <header className="project-detail-nav">
        <div className="container project-detail-nav-inner">
          <Link to="/" className="project-back">← Back to portfolio</Link>
          <span className="brand">SIDDHI MHATRE</span>
        </div>
      </header>

      <SocialRail />

      <main className="project-detail">
        <div className="container">
          <header className="project-detail-head">
            <div>
              <h1>{project.title}</h1>
              <p className="project-detail-tagline">
                {caseStudy?.summary || project.tagline}
              </p>
            </div>
            <span className="project-year">{project.year}</span>
          </header>

          <div className="project-meta">
            <span className="pill">{project.platform}</span>
            <span className={`pill pill-${project.type === 'Team project' ? 'team' : 'solo'}`}>
              {project.type}
            </span>
            {caseStudy?.focus && (
              <span className="pill">Focus: {caseStudy.focus}</span>
            )}
          </div>

          {embed?.type === 'video' && (
            <div className="project-detail-video">
              <video src={embed.src} controls playsInline preload="metadata" />
            </div>
          )}

          {embed?.type === 'iframe' && (
            <div className="project-detail-video">
              <iframe
                src={embed.src}
                title={`${project.title} demo`}
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          )}

          {!embed && (
            <div className="project-detail-video project-detail-video--placeholder">
              <div className="video-placeholder-inner">
                <span className="video-placeholder-icon" aria-hidden="true">▶</span>
                <span className="video-placeholder-text">Demo video coming soon</span>
              </div>
            </div>
          )}

          {caseStudy ? (
            caseStudy.sections.map((section) => (
              <CaseStudySection key={section.title} section={section} />
            ))
          ) : (
            <>
              <section className="project-detail-section">
                <h2>Overview</h2>
                <p className="project-detail-desc">{project.description}</p>
              </section>

              <section className="project-detail-section">
                <h2>Highlights</h2>
                <ul className="project-detail-highlights">
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </section>
            </>
          )}

         
        </div>
      </main>
    </>
  )
}
