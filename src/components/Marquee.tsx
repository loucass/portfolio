import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { marqueeItems } from '../data/content'
import { prefersReducedMotion } from '../lib/anim'

const ITEM_COUNT = marqueeItems.length
const STEP = 180 / (ITEM_COUNT - 1)
const RADIUS = 560
const SPEED = 6

/** The stack as a rotating 3D band — items arc around, facing the viewer. */
export function Marquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (prefersReducedMotion()) return
    const track = trackRef.current
    if (!track) return
    const items = Array.from(track.children) as HTMLElement[]
    let angle = 0

    const tick = (_time: number, deltaTime: number) => {
      angle = (angle + deltaTime * SPEED * 0.01) % 360
      track.style.transform = `rotateY(${angle}deg)`
      for (let i = 0; i < items.length; i++) {
        const c = Math.cos((i * STEP + angle) * (Math.PI / 180))
        items[i].style.opacity = String(0.1 + 0.9 * Math.max(0, c))
        items[i].style.scale = String(0.5 + 0.5 * ((c + 1) / 2))
        items[i].style.zIndex = String(Math.round(c * 10) + 10)
      }
    }

    gsap.ticker.add(tick)
    return () => gsap.ticker.remove(tick)
  }, [])

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__stage">
        <div className="marquee__track" ref={trackRef}>
          {marqueeItems.map((item, i) => (
            <span
              key={item}
              className="marquee__item"
              style={{
                transform: `translate(-50%, -50%) rotateY(${i * STEP}deg) translateZ(${RADIUS}px)`,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <ul className="marquee__fallback">
        {marqueeItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}