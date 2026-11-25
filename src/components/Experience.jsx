import { EXPERIENCE } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import Reveal from './Reveal'
import './Experience.css'

export default function Experience() {
  const timelineRef = useReveal({ threshold: 0.1 })

  return (
    <section id="experience" className="section">
      <div className="container experience-layout">
        <Reveal className="section-header experience-header">
          <p className="eyebrow">Experience</p>
          <h2>My journey so far</h2>
          <p>Building experience across software, technology and innovation.</p>
        </Reveal>

        <div>
          <ol ref={timelineRef} className="timeline">
            {EXPERIENCE.map(({ year, company, role, location, highlights }, index) => (
              <Reveal as="li" key={`${company}-${role}`} className="timeline-item" delay={index * 140}>
                <span className="timeline-dot" aria-hidden="true"></span>
                <article className="card experience-card">
                  <p className="experience-year">{year}</p>
                  <h3>{company}</h3>
                  <p className="experience-role">{role}</p>
                  {location && <p className="experience-location">{location}</p>}
                  {highlights.length > 0 && (
                    <ul className="chip-list">
                      {highlights.map((item) => (
                        <li key={item} className="chip">
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </Reveal>
            ))}
          </ol>
          <p className="timeline-end">What&rsquo;s next?</p>
        </div>
      </div>
    </section>
  )
}
