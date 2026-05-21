export default function ProjectCard({ project }) {
  const accentGradient = `linear-gradient(135deg, ${project.accent[0]}, ${project.accent[1]})`

  return (
    <article className="project-card">
      <span
        className="project-accent"
        aria-hidden="true"
        style={{ background: accentGradient }}
      />

      <div className="project-body">
        <header className="project-head">
          <div>
            <h3>{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          <span className="project-year">{project.year}</span>
        </header>

        <div className="project-meta">
          <span className="pill">{project.platform}</span>
          <span className={`pill pill-${project.type === 'Team project' ? 'team' : 'solo'}`}>
            {project.type}
          </span>
          {project.demo && (
            <a
              className="pill pill-demo"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Watch demo <span aria-hidden="true"></span>
            </a>
          )}
        </div>

        <p className="project-desc">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>

        <div className="project-stack">
          {project.stack.map((t) => <span className="tag" key={t}>{t}</span>)}
        </div>

        {project.links?.length > 0 && (
          <div className="project-links">
            {project.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href?.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {l.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
