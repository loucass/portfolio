import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { achievements } from '../data/content'
import { prefersReducedMotion } from '../lib/anim'

export function Achievements() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      // Headline rises in as the section enters.
      gsap.from('[data-ach-line]', {
        y: 30,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: 'top 70%' },
      })

      // Cards flip in from below, then the whole section pins briefly
      // while the numbers "tick" up against scroll position.
      gsap.from('[data-ach-card]', {
        y: 80,
        autoAlpha: 0,
        rotateX: -12,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: { trigger: ref.current, start: 'top 45%' },
      })

      gsap.fromTo(
        '[data-count]',
        { innerText: 0 },
        {
          innerText: (_index: number, target: HTMLElement) => Number(target.dataset.count),
          snap: { innerText: 1 },
          duration: 1.6,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 40%',
            end: 'center 40%',
            scrub: 0.5,
          },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="tile tile--dark-2 achievements" id="achievements" aria-label="Achievements">
      <div className="achievements__inner">
        <p className="caption caption-strong achievements__eyebrow" data-ach-line>
          Achievements
        </p>
        <h2 className="display-lg achievements__title" data-ach-line>
          National level.
        </h2>

        <ul className="achievements__grid">
          {achievements.map((a) => {
            const digits = a.rank.replace(/\D/g, '')
            const prefix = a.rank.slice(0, a.rank.length - digits.length)
            return (
              <li className="achievement-card" data-ach-card key={a.label}>
                <p className="achievement-card__rank display-lg">
                  {prefix && <span className="achievement-card__affix">{prefix}</span>}
                  <span data-count={digits}>{digits}</span>
                </p>
                <h3 className="achievement-card__label tagline">{a.label}</h3>
                <p className="achievement-card__detail">{a.detail}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}