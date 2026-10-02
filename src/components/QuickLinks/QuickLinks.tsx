import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const ITEMS = [
  { to: '/about', title: 'About', desc: 'How accurate detailing connects design to fabrication.' },
  { to: '/services', title: 'Services', desc: 'Rebar detailing, 3D modeling, BBS, shop drawings and more.' },
  { to: '/projects', title: 'Projects', desc: 'Project types we detail and a sample of our work.' },
  { to: '/technology', title: 'Technology', desc: 'The BIM and CAD tools behind every model — plus a live 3D preview.' },
  { to: '/process', title: 'Process', desc: 'Our seven-step workflow and quality-controlled review.' },
  { to: '/resources', title: 'Resources', desc: 'Answers to common questions about working with us.' },
]

export function QuickLinks() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading index="02" title="Explore the site" />

        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group flex flex-col justify-between gap-8 bg-paper p-7 transition-colors hover:bg-paper-dim"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-lg text-ink">{item.title}</span>
                <ArrowUpRight
                  size={18}
                  className="text-steel transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
              <p className="text-[13px] leading-relaxed text-steel">{item.desc}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
