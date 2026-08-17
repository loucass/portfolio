import { useRef } from 'react'
import { projects } from '../data/content'
import { useSectionReveal } from '../lib/anim'
import { ArrowRightIcon, GithubIcon } from './Icons'

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  return (
    <section ref={ref} className="tile tile--light projects" id="projects" aria-label="Projects">
      <div className="projects__inner">
        <p className="caption caption-strong projects__eyebrow" data-reveal>
          Projects
        </p>
        <h2 className="display-lg projects__title" data-reveal>
          Selected work.
        </h2>
        <p className="lead-airy projects__sub" data-reveal>
          Systems built end to end — tracked, tested, and shipped.
        </p>

        <ul className="projects__grid">
          {projects.map((project) => (
            <li className="project-card" data-reveal key={project.title}>
              <div className="project-card__top">
                <GithubIcon size={22} />
                <span className="project-card__repo caption">{project.repo}</span>
              </div>
              <h3 className="project-card__title body-strong">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <ul className="project-card__chips">
                {project.tags.map((tag) => (
                  <li className="chip" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              <a
                className="project-card__link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ArrowRightIcon size={15} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}