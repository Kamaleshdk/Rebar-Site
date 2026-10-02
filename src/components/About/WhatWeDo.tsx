import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const ITEMS = [
  'Rebar shop drawing and detailing',
  'Reinforcement fabrication drawings',
  'Bar bending schedules (BBS)',
  'Rebar quantity take-offs and estimation',
  'Structural reinforcement documentation',
  'Drawing revisions and coordination',
  'Project-specific detailing based on client standards',
]

export function WhatWeDo() {
  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <SectionHeading index="02" title="What we do" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <div key={item} className="flex items-start gap-4 border border-line bg-paper p-6">
              <span className="font-mono text-[11px] text-accent-dim">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[14px] leading-snug text-ink">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}