// A bullet can be a plain string, or an object { label, text } that renders
// with a bold lead-in label — e.g. "Real-Time Pipeline: each gesture maps to…".
function Bullet({ item }) {
  if (item && typeof item === 'object') {
    return (
      <li>
        <strong className="bullet-label">{item.label}:</strong> {item.text}
      </li>
    )
  }
  return <li>{item}</li>
}

export default function CaseStudySection({ section }) {
  return (
    <section className="project-detail-section">
      <h2>{section.title}</h2>

      {section.paragraphs?.map((p, i) => (
        <p key={i} className="project-detail-desc">{p}</p>
      ))}

      {section.bullets && (
        <ul className="project-detail-highlights">
          {section.bullets.map((item, i) => (
            <Bullet key={i} item={item} />
          ))}
        </ul>
      )}

      {section.groups?.map((group) => (
        <div key={group.subtitle} className="case-study-group">
          <h3>{group.subtitle}</h3>
          <ul className="project-detail-highlights">
            {group.bullets.map((item, i) => (
              <Bullet key={i} item={item} />
            ))}
          </ul>
        </div>
      ))}

      {section.steps && (
        <ol className="project-detail-steps">
          {section.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      )}

      {section.images?.map((img) => (
        <figure key={img.src} className="case-study-figure">
          <img
            src={`${import.meta.env.BASE_URL}${img.src.replace(/^\//, '')}`}
            alt={img.alt}
            loading="lazy"
          />
          {img.caption && <figcaption>{img.caption}</figcaption>}
        </figure>
      ))}

      {section.stats && (
        <div className="case-study-stats">
          {section.stats.map((stat) => (
            <div key={stat.label} className="case-study-stat">
              <span className="case-study-stat-value">{stat.value}</span>
              <span className="case-study-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
