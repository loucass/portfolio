import { useRef } from 'react'
import { profile } from '../data/content'
import { useSectionReveal } from '../lib/anim'
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, WhatsappIcon } from './Icons'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: profile.emailHref,
    icon: <MailIcon size={20} />,
  },
  {
    label: 'WhatsApp',
    value: profile.whatsapp,
    href: profile.whatsappHref,
    icon: <WhatsappIcon size={20} />,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: profile.phoneHref,
    icon: <PhoneIcon size={20} />,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedin,
    href: profile.linkedinHref,
    icon: <LinkedinIcon size={20} />,
  },
  {
    label: 'GitHub',
    value: profile.github,
    href: profile.githubHref,
    icon: <GithubIcon size={20} />,
  },
]

export function Contact() {
  const ref = useRef<HTMLElement>(null)
  useSectionReveal(ref)

  return (
    <section ref={ref} className="tile tile--light contact" id="contact" aria-label="Contact">
      <div className="contact__inner">
        <p className="caption caption-strong contact__eyebrow" data-reveal>
          Contact
        </p>
        <h2 className="contact__title display-lg" data-reveal>
          Let&apos;s build something reliable.
        </h2>
        <p className="lead-airy contact__sub" data-reveal>
          Open to backend and full-stack engineering roles — remote or on-site in Alexandria.
        </p>

        <div className="contact__cta" data-reveal>
          <a className="btn-primary contact__mail" href={profile.emailHref}>
            <MailIcon size={17} />
            {profile.email}
          </a>
          <a className="btn-secondary-pill" href={profile.whatsappHref} target="_blank" rel="noopener noreferrer">
            <WhatsappIcon size={16} />
            WhatsApp me
          </a>
          <a className="btn-secondary-pill" href={profile.phoneHref}>
            <PhoneIcon size={16} />
            {profile.phone}
          </a>
        </div>

        <ul className="contact__channels">
          {channels.map((channel) => (
            <li data-reveal key={channel.label}>
              <a className="channel-card" href={channel.href} target={channel.href.startsWith('http') ? '_blank' : undefined} rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                <span className="channel-card__icon">{channel.icon}</span>
                <span className="channel-card__meta">
                  <span className="channel-card__label caption">{channel.label}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p className="contact__location caption">
          <MapPinIcon size={14} />
          {profile.location}
        </p>
      </div>
    </section>
  )
}