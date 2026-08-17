import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { projects } from '../data/content'
import { prefersReducedMotion, useSectionReveal } from '../lib/anim'
import { ArrowRightIcon, GithubIcon } from './Icons'

export function Projects() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      // Project cards assemble from scattered positions as the section
      // scrolls into view.
      gsap.from('.project-card', {
        xPercent: () => gsap.utils.random(-18, 18),
        yPercent: () => gsap.utils.random(-40, 25),
        rotation: () => gsap.utils.random(-4, 4),
        autoAlpha: 0,
        ease: 'none',
        stagger: 0.07,
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'center 45%',
          scrub: 0.5,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="tile tile--light projects" id="projects" aria-label="Projects">
      <div className="projects__inner">
        <p className="caption caption-strong projects__eyebrow" data-reveal>
          Projects
        </p>
        <h2 className="display-lg projects__title" data-reveal>
          Solve Real World Issues.
        </h2>

        <ul className="projects__grid">
          {projects.map((project) => (
            <li className="project-card" key={project.title}>
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