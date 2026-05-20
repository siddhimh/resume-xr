const SKILLS = [
  {
    icon: '◆',
    title: 'XR Development',
    desc: 'Building immersive apps across headsets and devices with production-grade interaction systems.',
    tags: ['Unity XR', 'Unreal', 'OpenXR', 'visionOS', 'Meta Quest']
  },
  {
    icon: '◇',
    title: 'Spatial UI / UX',
    desc: 'Designing spatial interfaces, hand-tracking flows, and comfortable interaction grammars.',
    tags: ['SwiftUI', 'RealityKit', 'MRTK', 'Figma']
  },
  {
    icon: '▲',
    title: 'WebXR & 3D Web',
    desc: 'Bringing AR/VR to the open web with Three.js, React Three Fiber, and WebXR APIs.',
    tags: ['Three.js', 'R3F', 'WebXR', 'WebGL']
  },
  {
    icon: '●',
    title: 'Engineering',
    desc: 'Solid foundations in C#, C++, Swift, and TypeScript with a focus on performance.',
    tags: ['C#', 'C++', 'Swift', 'TypeScript', 'Python']
  },
  {
    icon: '✶',
    title: 'Real-time Graphics',
    desc: 'Shaders, lighting, and rendering tuned for the constraints of head-mounted displays.',
    tags: ['Shader Graph', 'HLSL', 'URP', 'Lighting']
  },
  {
    icon: '◐',
    title: 'AR / Computer Vision',
    desc: 'Marker, plane, and image tracking on mobile and headset platforms.',
    tags: ['ARKit', 'ARCore', 'Vuforia', '8th Wall']
  },
  {
    icon: '✦',
    title: '3D & Content Pipeline',
    desc: 'Asset prep, optimization, and pipelines from Blender into engines.',
    tags: ['Blender', 'glTF', 'USDZ', 'FBX']
  },
  {
    icon: '◉',
    title: 'Tooling & Collab',
    desc: 'Shipping with version control, CI, and tight design-engineering loops.',
    tags: ['Git', 'Perforce', 'GitHub Actions', 'Notion']
  }
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <span className="eyebrow">Skills</span>
        <h2>A toolkit for <span className="display">spatial software.</span></h2>
        <p className="lead">
          The set of disciplines I draw on to take an XR idea from sketch to shipped.
        </p>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-card" key={s.title}>
              <div className="icon" aria-hidden="true">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="skill-tags">
                {s.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
