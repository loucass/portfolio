import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Reveals every [data-reveal] child of `scope` with a staggered rise-in when the scope scrolls into view. */
export function useSectionReveal(scope: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!scope.current || prefersReducedMotion()) return
    const ctx = gsap.context(() => {
      gsap.from('[data-reveal]', {
        y: 28,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.08,
        scrollTrigger: {
          trigger: scope.current,
          start: 'top 78%',
        },
      })
    }, scope)
    return () => ctx.revert()
  }, [scope])
}