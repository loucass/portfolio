import { useRef } from 'react'
import { education } from '../data/content'
import { useSectionReveal } from '../lib/anim'
import { GraduationIcon } from './Icons'

export function Education() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  return (
    <section ref={ref} className="tile tile--light education" id="education" aria-label="Education">
      <div className="education__inner">
        <p className="caption caption-strong education__eyebrow" data-reveal>
          Education
        </p>
        <h2 className="display-lg education__title" data-reveal>
          Education.
        </h2>

        <ul className="education__grid">
          {education.map((edu) => {
            const inProgress = edu.period.includes('Expected')
            return (
              <li className="edu-card" data-reveal key={edu.degree}>
                <span className="edu-card__icon" aria-hidden="true">
                  <GraduationIcon size={22} />
                </span>
                <div className="edu-card__body">
                  <h3 className="edu-card__degree body-strong">{edu.degree}</h3>
                  <p className="edu-card__school lead-airy">{edu.school}</p>
                  <p className="edu-card__period">
                    <span className={`edu-badge${inProgress ? ' edu-badge--live' : ''}`}>
                      <span className="edu-badge__dot" aria-hidden="true" />
                      {edu.period}
                    </span>
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}