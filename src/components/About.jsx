export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">About</span>
          <h2>From screens to <span className="display">space.</span></h2>
        </div>
        <div className="about">
          <p>
            I&rsquo;m a developer focused on extended reality and spatial computing &mdash;
            the layer where software stops being a window and starts being a place. I work
            across the full XR stack: from low-level interaction systems and rendering to
            polished, ship-ready experiences.
          </p>
          <p>
            Lately I&rsquo;ve been building for Apple Vision Pro and Meta Quest,
            prototyping in WebXR for the open web, and exploring how spatial UI patterns
            translate across headsets, phones, and beyond. I care a lot about comfort,
            clarity, and craft &mdash; the small details that make virtual things feel real.
          </p>
          <p>
            Outside of work I&rsquo;m usually playing with new hardware, sketching
            interaction concepts, or breaking something in Unity to learn how it works.
          </p>
        </div>
      </div>
    </section>
  )
}
