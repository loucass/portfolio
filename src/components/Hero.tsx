import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../data/content'
import { scrollToId } from '../hooks/useLenis'
import { prefersReducedMotion } from '../lib/anim'
import { DownloadIcon, MapPinIcon } from './Icons'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from('[data-hero-line]', {
        y: 42,
        autoAlpha: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.12,
      }).from(
        '[data-hero-cta]',
        { y: 20, autoAlpha: 0, duration: 0.7, ease: 'power3.out', stagger: 0.1 },
        '-=0.5',
      )
      gsap.from('[data-hero-status]', {
        autoAlpha: 0,
        scale: 0.9,
        duration: 0.7,
        ease: 'power3.out',
        delay: 0.9,
      })

      // The whole hero rises and fades as the next section arrives.
      gsap.to('[data-hero-inner]', {
        yPercent: -12,
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom 45%',
          scrub: 0.6,
        },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="hero" aria-label="Introduction">
      <div className="hero__inner" data-hero-inner>
        <p className="hero__caption caption" data-hero-line>
          {profile.role}
        </p>
        <h1 className="hero__headline hero-display">
          <span className="hero__line" data-hero-line>
            Introducing <span className="hero__name">Lucas.</span>
          </span>
          <span className="hero__line" data-hero-line>
            Systems that stay fast,
          </span>
          <span className="hero__line" data-hero-line>
            consistent &amp; correct.
          </span>
        </h1>
        <p className="hero__lead lead" data-hero-line>
          {profile.summary}
        </p>
        <div className="hero__ctas" data-hero-cta>
          <button type="button" className="btn-primary" onClick={() => scrollToId('experience')}>
            View Experience
          </button>
          <a
            className="btn-secondary-pill"
            href={`${import.meta.env.BASE_URL}LucasMonirResume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon size={15} />
            View the CV
          </a>
          <button
            type="button"
            className="btn-secondary-pill"
            onClick={() => scrollToId('contact')}
          >
            Talk to Lucas
          </button>
        </div>
        <div className="hero__status" data-hero-status>
          <span className="hero__status-dot" aria-hidden="true" />
          <span className="caption">Available for backend &amp; full-stack roles</span>
          <span className="hero__status-sep" aria-hidden="true" />
          <MapPinIcon size={13} />
          <span className="caption">{profile.location}</span>
        </div>
      </div>

      <p className="hero__scroll caption" aria-hidden="true">
        Scroll to explore
      </p>
    </section>
  )
}