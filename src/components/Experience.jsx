const ITEMS = [
  {
    when: 'Jan 2026 — Present',
    role: 'Lead Developer · AI Workflow Dashboarding Platform',
    where: 'New York University, Department of Faculty Affairs · Brooklyn, NY',
    bullets: [
      'Designed and built a React-based faculty support portal with workflow dashboards for tracking requests, policy resources, approval status, and administrative actions, translating complex policy workflows into a usable interface that reduced manual queries by 88%.',
      'Built a policy-grounded LLM chatbot using structured retrieval pipelines over institutional documents, improving response accuracy by 92% and reducing query resolution time from hours to 4–5 minutes while supporting human-in-the-loop review.'
    ]
  },
  {
    when: 'Sep 2023 — Jun 2025',
    role: 'Software Development Engineer',
    where: 'Jio Platforms Limited (JPL) · Mumbai, India',
    bullets: [
      'Developed internal HR and enterprise workflow products across onboarding, offboarding, approvals, surveys, and employee lifecycle processes, translating manual operational workflows into structured digital systems.',
      'Built a Node.js and MongoDB workflow and survey engine with scheduled task flows, structured data capture, real-time reporting, and reusable backend services, replacing legacy SharePoint processes and reducing turnaround time by 85%.',
      'Implemented supporting platform services including OCR/LLM-based document parsing, queue-based SMS/email notifications, SAML 2.0 authentication with Passport.js, logging, monitoring, and alerting to improve reliability and traceability across production workflows.'
    ]
  },
  {
    when: 'Mar 2023 — Sep 2023',
    role: 'Backend Developer Intern',
    where: 'Jio Platforms Limited (JPL) · Mumbai, India',
    bullets: [
      'Optimized high-volume file upload workflows by improving request handling and backend processing, reducing average latency by 70–80% and supporting faster batch uploads.',
      'Integrated SAP HANA APIs into a shared microservices architecture and refactored authentication logic, improving reuse across 5 core services and strengthening backend reliability.'
    ]
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
              <ul className="timeline-bullets">
                {i.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
