import { education, navLinks, profile, year } from '../data/content'
import { scrollToId } from '../hooks/useLenis'

const columns = [
  {
    title: 'Explore',
    links: navLinks.map((l) => ({ label: l.label, id: l.id })),
  },
  {
    title: 'Contact',
    links: [
      { label: profile.email, href: profile.emailHref },
      { label: 'WhatsApp', href: profile.whatsappHref },
      { label: profile.phone, href: profile.phoneHref },
      { label: profile.linkedin, href: profile.linkedinHref },
      { label: profile.github, href: profile.githubHref },
    ],
  },
  {
    title: 'Education',
    links: education.map((e) => ({ label: e.degree })),
  },
]

export function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__columns">
          {columns.map((col) => (
            <nav className="footer__col" aria-label={col.title} key={col.title}>
              <h3 className="footer__col-title caption-strong">{col.title}</h3>
              <ul className="footer__links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {'id' in link && link.id ? (
                      <button type="button" onClick={() => scrollToId(link.id as string)}>
                        {link.label}
                      </button>
                    ) : 'href' in link && link.href ? (
                      <a href={link.href as string} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    ) : (
                      <span>{link.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="footer__legal">
          <p className="footer__copy fine-print">
            Copyright © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}