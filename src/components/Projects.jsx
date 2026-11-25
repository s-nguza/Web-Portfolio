import { PROJECTS } from '../data/content'
import Icon from './Icon'
import PageLink from './PageLink'
import Reveal from './Reveal'
import './Projects.css'

const STATUS_LABELS = {
  'in-progress': 'In progress',
  completed: 'Completed',
}

function initials(title) {
  return title
    .split(/\s+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function ProjectCard({ title, description, image, tags, status, url }) {
  return (
    <article className={`project-card${url ? ' is-linked' : ''}`}>
      <div className="project-media">
        {image ? (
          <img src={image} alt={`${title} screenshot`} loading="lazy" />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>{initials(title)}</span>
          </div>
        )}
        <span className={`status-badge status-${status}`}>
          <span className="status-dot" aria-hidden="true"></span>
          {STATUS_LABELS[status]}
        </span>
      </div>

      <div className="project-body">
        <h3 className="project-title">
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              {title}
              <Icon name="arrow-up-right" size={18} />
            </a>
          ) : (
            title
          )}
        </h3>
        <p>{description}</p>
        {tags.length > 0 && (
          <ul className="chip-list" aria-label={`${title} technologies`}>
            {tags.map((tag) => (
              <li key={tag} className="chip">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section page">
      <title>Projects | Siyabonga Nguza</title>
      <div className="container">
        <Reveal className="section-header">
          <p className="eyebrow">Featured projects</p>
          <h1>Things I&rsquo;ve built</h1>
          <p>
            A collection of projects where I turn ideas into practical solutions, explore new
            technologies and learn by building real-world applications.
          </p>
        </Reveal>

        <ul className="projects-grid">
          {PROJECTS.map((project, index) => (
            <Reveal as="li" key={project.title} delay={(index % 2) * 120}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </ul>

        <PageLink to="/experience" label="Experience" />
      </div>
    </section>
  )
}
