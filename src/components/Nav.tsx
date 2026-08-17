import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { navLinks, profile } from '../data/content'
import { scrollToId } from '../hooks/useLenis'
import { prefersReducedMotion } from '../lib/anim'

export function Nav() {
  const navRef = useRef<HTMLElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null)

    const onScroll = () => {
      const pos = window.scrollY + 100
      let current = ''
      for (const s of sections) {
        if (pos >= s.offsetTop) current = s.id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            start: 0,
            end: 'max',
            scrub: 0.3,
          },
        },
      )
    }, navRef)
    return () => ctx.revert()
  }, [])

  return (
    <header ref={navRef} className="nav" role="banner">
      <div className="nav__progress" ref={barRef} aria-hidden="true" />
      <nav className="nav__bar" aria-label="Primary">
        <button
          type="button"
          className="nav__brand"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="nav__logo" aria-hidden="true">
            L
          </span>
          Lucas Monir
        </button>

        <ul className="nav__links">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                className={`nav__link${active === link.id ? ' nav__link--active' : ''}`}
                onClick={() => scrollToId(link.id)}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <a className="nav__phone btn-dark-utility" href={profile.whatsappHref}>
          WhatsApp me
        </a>
      </nav>
    </header>
  )
}