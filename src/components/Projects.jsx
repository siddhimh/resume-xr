import { PROJECTS } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <span className="eyebrow">Work</span>
            <h2>Recent Projects.</h2>
            <p className="lead">
              A few of the things I&rsquo;ve been building recently, mostly
              across XR, spatial computing, and the 3D web.
            </p>
          </div>
        </div>
        <div className="projects-grid">
          {PROJECTS.slice(0, 4).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
