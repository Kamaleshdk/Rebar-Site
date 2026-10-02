import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../../config/siteConfig'
import { Container } from '../shared/Container'

const LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Technology', to: '/technology' },
  { label: 'Process', to: '/process' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0 })
  }, [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img src={siteConfig.logoMark} alt="" className="h-9 w-auto" />
          <span className="font-display text-[15px] font-medium tracking-tight text-paper">
            {siteConfig.companyName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className={`font-mono text-[12px] tracking-wide transition-colors hover:text-paper ${
                location.pathname === link.to ? 'text-paper' : 'text-steel-light'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="border border-accent bg-accent px-5 py-2.5 font-mono text-[12px] font-medium text-ink transition-colors hover:bg-transparent hover:text-accent"
          >
            Get a Quote
          </Link>
        </div>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center border border-white/15 text-paper lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div
        className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <Container className="flex flex-col gap-1 border-t border-white/10 bg-ink py-4">
            {LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="border-b border-white/5 py-3 font-mono text-sm text-steel-light hover:text-paper"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-3 border border-accent bg-accent px-5 py-3 text-center font-mono text-[12px] font-medium text-ink"
            >
              Get a Quote
            </Link>
          </Container>
        </div>
      </div>
    </header>
  )
}
