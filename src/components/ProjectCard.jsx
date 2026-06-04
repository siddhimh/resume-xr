import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
  const accentGradient = `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`
  const hasDetail = Boolean(project.demo || project.caseStudy)
  const detailPath = `/projects/${project.id}`

  // Accent-gradient "poster" doubles as the link target when a detail page exists.
  const media = (
    <>
      <span className="project-card-eyebrow">{project.platform}</span>
      <h3 className="project-card-title">{project.title}</h3>
    </>
  )

  return (
    <article className="project-card">
      {hasDetail ? (
        <Link
          className="project-card-media"
          to={detailPath}
          style={{ background: accentGradient }}
          aria-label={`${project.title} — view details`}
        >
          {media}
        </Link>
      ) : (
        <div className="project-card-media" style={{ background: accentGradient }}>
          {media}
        </div>
      )}

      <div className="project-body">
        <div className="project-meta">
          <span className="pill">{project.year}</span>
          <span className={`pill pill-${project.type === 'Team project' ? 'team' : 'solo'}`}>
            {project.type}
          </span>
        </div>

        <p className="project-tagline">{project.tagline}</p>
        <p className="project-desc">{project.description}</p>

        {hasDetail && (
          <Link className="project-detail-link" to={detailPath}>
            View details <span aria-hidden="true">→</span>
          </Link>
        )}
      </div>
    </article>
  )
}
