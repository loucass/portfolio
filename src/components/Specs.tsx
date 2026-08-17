import { useRef } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { featuredStack, specGroups } from '../data/content'
import { useSectionReveal } from '../lib/anim'
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
              <li className="spec-card" data-reveal key={group.label}>
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

        <div className="specs__featured" data-reveal>
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
    </section>
  )
}