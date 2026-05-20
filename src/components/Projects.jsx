import { PROJECTS } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects({ onOpen }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2>Recent <span className="display">projects.</span></h2>
            <p className="lead">
              A few things I&rsquo;ve built across headsets, phones, and the open web.
              Hover any card for a preview &mdash; click for the full case.
            </p>
          </div>
          <a className="btn" href="#contact">Looking for something specific? <span className="btn-arrow">↗</span></a>
        </div>
        <div className="projects-grid">
          {PROJECTS.slice(0, 4).map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  )
}
