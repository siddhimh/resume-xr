export default function About() {
  return (
    <section id="about">
      <div className="container about-grid">
        <div>
          <span className="eyebrow">About</span>
          <h2>A little about me.</h2>
        </div>
        <div className="about">
         
          <p>
            I&rsquo;m a Master&rsquo;s student in Computer Science at NYU,
            focused on XR and spatial computing. I&rsquo;m drawn to immersive spaces,
            places where software is not just something you click through, 
            but something you can enter, move around in, and discover through interaction.
          </p>
          <p>
            XR interests me because it sits between art, computing, and human experience. 
            It can turn passive observation into active curiosity: a story becomes a space, 
            a lesson becomes something you do with your hands, 
            and data becomes something you can see in relation to the world around you. 
            I&rsquo;m especially interested in building experiences that support learning, collaboration, 
            cultural storytelling, and spatial understanding.
          </p>
          <p>
            Before NYU, I spent two years at Jio Platforms working on production
            backend system, AI document pipelines, real-time
            notification services, and enterprise workflow tools. That
            foundation grounds how I build today: I want immersive work to feel
            expressive and curious, but also reliable, scalable, and ready for
            real users.
          </p>
         

          <div className="about-edu">
            <span className="eyebrow">Education</span>
            <ul>
              <li>
                <div className="edu-row">
                  <strong>New York University</strong>
                  <span className="when">Sep 2025 &ndash; May 2027</span>
                </div>
                <span className="muted">M.S. Computer Science</span>
              </li>
              <li>
                <div className="edu-row">
                  <strong>University of Mumbai</strong>
                  <span className="when">Jul 2019 &ndash; May 2023</span>
                </div>
                <span className="muted">B.E. Computer Engineering</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
