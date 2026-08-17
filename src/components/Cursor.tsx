import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { prefersReducedMotion } from '../lib/anim'

const HOVER_SELECTOR = 'a, button, .project-card, .channel-card, .spec-pill, .edu-card'

/** Accent-blue dot with a lagging ring that reacts to interactive elements. */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion()) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    setEnabled(true)
    document.documentElement.classList.add('has-cursor')
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, x: -100, y: -100 })

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' })
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' })
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.4, ease: 'power3.out' })
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.4, ease: 'power3.out' })

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      dotX(e.clientX)
      dotY(e.clientY)
      ringX(e.clientX)
      ringY(e.clientY)
    }
    const onOver = (e: PointerEvent) => {
      const el = e.target as Element | null
      if (el?.closest?.(HOVER_SELECTOR)) ring.classList.add('is-hover')
    }
    const onOut = (e: PointerEvent) => {
      const rel = e.relatedTarget as Element | null
      if (!rel?.closest?.(HOVER_SELECTOR)) ring.classList.remove('is-hover')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerout', onOut, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerout', onOut)
      gsap.killTweensOf([dot, ring])
      document.documentElement.classList.remove('has-cursor')
    }
  }, [])

  if (!enabled) return null
  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
