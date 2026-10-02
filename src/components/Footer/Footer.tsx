import { Link } from 'react-router-dom'
import { siteConfig } from '../../config/siteConfig'
import { Container } from '../shared/Container'

const COLUMNS = [
  { title: 'Navigation', links: [['Home', '/'], ['About', '/about'], ['Process', '/process']] },
  { title: 'Services', links: [['Services', '/services'], ['Technology', '/technology'], ['Projects', '/projects']] },
  { title: 'Resources', links: [['FAQ & Resources', '/resources'], ['Enquiries', '/admin']] },
  { title: 'Contact', links: [['Contact', '/contact']] },
]

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-ink py-16 text-paper">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <img src={siteConfig.logo} alt={siteConfig.companyName} className="h-14 w-auto" />
            <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed text-steel-light">
              {siteConfig.tagline}
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-[11px] tracking-wide text-steel-light">{col.title.toUpperCase()}</div>
              <ul className="mt-4 space-y-2.5">
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="text-[13px] text-steel-light hover:text-paper">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[12px] text-steel-light sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} {siteConfig.companyName}. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="/privacy.html" className="hover:text-paper">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-paper">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
