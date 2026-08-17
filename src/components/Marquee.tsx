import { marqueeItems } from '../data/content'

const doubled = [...marqueeItems, ...marqueeItems]

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item tagline">
            {item}
            <span className="marquee__dot">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}