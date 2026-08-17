import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let lenisInstance: Lenis | null = null

/** One shared Lenis instance, driven by GSAP's ticker so ScrollTrigger stays perfectly in sync. */
export function useLenis() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisInstance = lenis

    lenis.on('scroll', ScrollTrigger.update)

    const raf = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])
}

/** Smooth-scroll to an anchor via the shared Lenis instance. */
export function scrollToId(id: string) {
  const target = document.querySelector<HTMLElement>(`#${id}`)
  if (!target) return
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset: -44 })
  } else {
    target.scrollIntoView({ behavior: 'smooth' })
  }
}