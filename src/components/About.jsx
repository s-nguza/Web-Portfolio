import { ABOUT_PARAGRAPHS, SKILLS } from '../data/content'
import PageLink from './PageLink'
import Reveal from './Reveal'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section page">
      <title>About | Siyabonga Nguza</title>
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">About</p>
          <h1>
            Technology should solve <span className="gradient-text">real problems.</span>
          </h1>
        </Reveal>

        <div className="about-grid">
          <Reveal as="article" className="card about-card">
            <h3>About me</h3>
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal as="article" className="card about-card" delay={120}>
            <h3>Technical skills</h3>
            <div className="skill-groups">
              {SKILLS.map(({ title, items }) => (
                <div key={title} className="skill-group">
                  <h4>{title}</h4>
                  <ul className="chip-list">
                    {items.map((item) => (
                      <li key={item} className="chip">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <PageLink to="/projects" label="Featured projects" />
      </div>
    </section>
  )
}
