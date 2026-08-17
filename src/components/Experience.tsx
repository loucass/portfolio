import { useRef } from 'react'
import { experience } from '../data/content'
import { useSectionReveal } from '../lib/anim'

export function Experience() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  return (
    <section ref={ref} className="tile tile--dark experience" id="experience" aria-label="Experience">
      <div className="experience__inner">
        <p className="caption caption-strong experience__eyebrow" data-reveal>
          Experience
        </p>
        <h2 className="display-lg experience__title" data-reveal>
          Built in production, under load.
        </h2>
        <p className="lead-airy experience__sub" data-reveal>
          1,000+ concurrent users. Zero race conditions. That's the standard.
        </p>

        <ol className="experience__list">
          {experience.map((job) => (
            <li className="experience__item" data-reveal key={`${job.company}-${job.period}`}>
              <div className="experience__meta">
                <p className="experience__period caption">{job.period}</p>
                <p className="experience__tag caption">
                  {job.type} · {job.location}
                </p>
              </div>
              <div className="experience__body">
                <h3 className="experience__role display-md">
                  {job.role} · <span className="experience__company">{job.company}</span>
                </h3>
                <ul className="experience__points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}