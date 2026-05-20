const ITEMS = [
  {
    when: '2024 — Present',
    role: 'XR & Spatial Computing Developer',
    where: 'Freelance · Selected studios',
    blurb: 'Designing and shipping spatial experiences for Apple Vision Pro, Meta Quest, and WebXR. Working with clients across entertainment, training, and product.'
  },
  {
    when: '2023 — 2024',
    role: 'Unity / AR Developer',
    where: 'Independent studio',
    blurb: 'Built mobile AR tools and prototype headset apps. Owned the interaction layer and rendering tuning across multiple shipped titles.'
  },
  {
    when: '2022 — 2023',
    role: 'Software Developer · 3D Web',
    where: 'Early-stage startup',
    blurb: 'Built interactive 3D experiences in the browser using Three.js and React. Helped move a 2D product into a spatially-aware UI.'
  }
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">Experience</span>
        <h2>A short <span className="display">timeline.</span></h2>
        <div className="timeline" style={{ marginTop: 32 }}>
          {ITEMS.map((i) => (
            <div className="timeline-item" key={i.role + i.when}>
              <div className="when">{i.when}</div>
              <h3>{i.role}</h3>
              <div className="where">{i.where}</div>
              <p>{i.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
