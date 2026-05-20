export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="fade-in">
          <span className="hero-tag">
            <span className="dot" />
            Available for XR / spatial roles · 2026
          </span>
          <h1>
            Building <span className="display">immersive</span> experiences
            for the next computing platform.
          </h1>
          <p className="lead">
            I&rsquo;m Siddhi &mdash; an XR &amp; spatial computing developer designing and shipping
            interactive software for Vision Pro, Meta Quest, mobile AR, and the open web.
            From Unity and Unreal to WebXR and OpenXR, I bring ideas off the screen
            and into space.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              See selected work <span className="btn-arrow">↗</span>
            </a>
            <a href="#contact" className="btn">Get in touch</a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="k">Focus</span>
              <span className="v">Spatial UX · Interaction</span>
            </div>
            <div>
              <span className="k">Stack</span>
              <span className="v">Unity · Unreal · WebXR</span>
            </div>
            <div>
              <span className="k">Based</span>
              <span className="v">India · Remote-friendly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
