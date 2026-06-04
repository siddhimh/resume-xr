import { PROJECTS } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

// Group projects by category, preserving the order each category first appears.
function groupByCategory(projects) {
  const order = []
  const map = new Map()
  for (const p of projects) {
    const key = p.category || 'Other'
    if (!map.has(key)) {
      map.set(key, [])
      order.push(key)
    }
    map.get(key).push(p)
  }
  return order.map((category) => ({ category, items: map.get(category) }))
}

export default function Projects() {
  const groups = groupByCategory(PROJECTS)

  return (
    <section id="projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <span className="eyebrow">Work</span>
            <h2>Recent Projects.</h2>
            <p className="lead">
              A few things I&rsquo;ve been building lately, across XR, spatial
              computing, and the 3D web.
            </p>
          </div>
        </div>

        <div className="projects-categories">
          {groups.map((group) => (
            <div className="project-category" key={group.category}>
              <h3 className="project-category-title">{group.category}</h3>
              <div className="projects-grid">
                {group.items.map((p) => (
                  <ProjectCard key={p.id} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
