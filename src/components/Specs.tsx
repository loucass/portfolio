import { useEffect, useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import gsap from 'gsap'
import { featuredStack, specGroups } from '../data/content'
import { prefersReducedMotion, useSectionReveal } from '../lib/anim'
import {
  BoxIcon,
  CodeIcon,
  DatabaseIcon,
  FlaskIcon,
  LayoutIcon,
  RadioIcon,
  ServerIcon,
  ShieldIcon,
} from './Icons'

const categoryMeta: Record<string, { color: string; icon: ReactNode }> = {
  Languages: { color: '#d97706', icon: <CodeIcon size={20} /> },
  Backend: { color: '#0066cc', icon: <ServerIcon size={20} /> },
  Databases: { color: '#7c3aed', icon: <DatabaseIcon size={20} /> },
  'Messaging & Queues': { color: '#ea580c', icon: <RadioIcon size={20} /> },
  'API & Security': { color: '#059669', icon: <ShieldIcon size={20} /> },
  Frontend: { color: '#0891b2', icon: <LayoutIcon size={20} /> },
  Testing: { color: '#db2777', icon: <FlaskIcon size={20} /> },
  'Tools & Infra': { color: '#475569', icon: <BoxIcon size={20} /> },
}

export function Specs() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      // The category cards assemble from scattered positions as the
      // section scrolls into view.
      gsap.from('.spec-card', {
        xPercent: () => gsap.utils.random(-22, 22),
        yPercent: () => gsap.utils.random(-55, 30),
        rotation: () => gsap.utils.random(-5, 5),
        autoAlpha: 0,
        ease: 'none',
        stagger: 0.05,
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 78%',
          end: 'center 40%',
          scrub: 0.5,
        },
      })

      // The core-stack pills assemble from scattered positions while the
      // block is pinned for one viewport of scroll.
      gsap.to('[data-pin]', {
        scrollTrigger: {
          trigger: '.specs__pin',
          start: 'top 65%',
          end: 'bottom 35%',
          pin: true,
          scrub: 0.5,
        },
      })
      gsap.from('.spec-pill', {
        xPercent: () => gsap.utils.random(-80, 80),
        yPercent: () => gsap.utils.random(-200, 80),
        rotation: () => gsap.utils.random(-35, 35),
        autoAlpha: 0,
        ease: 'none',
        stagger: 0.04,
        clearProps: 'transform,opacity,visibility',
        scrollTrigger: {
          trigger: '.specs__pin',
          start: 'top 65%',
          end: 'bottom 35%',
          scrub: 0.5,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="tile tile--parchment specs" id="specs" aria-label="Specifications">
      <div className="specs__inner">
        <p className="caption caption-strong specs__eyebrow" data-reveal>
          Specs
        </p>
        <h2 className="display-lg specs__title" data-reveal>
          The stack.
        </h2>

        <ul className="specs__grid">
          {specGroups.map((group) => {
            const meta = categoryMeta[group.label] ?? {
              color: '#0066cc',
              icon: <BoxIcon size={20} />,
            }
            return (
              <li className="spec-card" key={group.label}>
                <span className="spec-card__icon" style={{ background: `${meta.color}1f`, color: meta.color }}>
                  {meta.icon}
                </span>
                <h3 className="spec-card__label caption-strong">{group.label}</h3>
                <ul className="spec-card__items">
                  {group.items.map((item) => (
                    <li className="spec-card__item" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            )
          })}
        </ul>

        <div className="specs__pin">
          <div className="specs__featured" data-pin>
            <p className="caption specs__featured-title">Core stack</p>
            <ul className="specs__pills">
              {featuredStack.map((tech) => (
                <li
                  className="spec-pill"
                  key={tech.name}
                  style={
                    {
                      '--tech': tech.color,
                    } as CSSProperties
                  }
                >
                  <span className="spec-pill__dot" aria-hidden="true" />
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}