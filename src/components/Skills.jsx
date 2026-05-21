const SKILLS = [
  {
    label: 'XR & Immersive Interaction',
    items: [
      'Unity', 'C#', 'OpenXR', 'XR Interaction Toolkit', 'Meta Quest',
      'AR Foundation', 'ARCore', 'WebXR', 'Photon', 'Mediapipe'
    ]
  },
  {
    label: 'Spatial Visualization & 3D',
    items: [
      'Three.js', 'React Three Fiber', 'Mapbox GL JS', 'Deck.gl',
      'GeoJSON', 'Blender', 'Mixamo'
    ]
  },
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'C++']
  },
  {
    label: 'Web & Backend',
    items: [
      'React', 'Next.js', 'Node.js', 'Express',
      'REST APIs', 'MongoDB', 'Redis', 'Docker'
    ]
  },
  {
    label: 'AI, Vision & Tooling',
    items: [
      'LLM Integration', 'RAG', 'OpenCV', 'OCR',
      'Git', 'Unity Version Control'
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2>What I work with.</h2>
    
        <div className="skills-grid">
          {SKILLS.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3 className="skill-group-label">{group.label}</h3>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
