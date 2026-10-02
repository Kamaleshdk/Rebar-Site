import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const REASONS = [
  { title: 'Technical Expertise', text: 'A strong understanding of reinforcement requirements, structural drawings, and construction practices.' },
  { title: 'Precision-Focused Work', text: 'Close attention to dimensions, bar marks, quantities, laps, spacing, shapes, and other critical details.' },
  { title: 'Client-Specific Solutions', text: 'We adapt our drawings and workflows to match your specifications and preferred standards.' },
  { title: 'Clear & Practical Drawings', text: 'Drawings that are easy to review, fabricate from, and use at the construction site.' },
  { title: 'Reliable Project Support', text: 'Clear communication throughout the project, with efficient response to revisions and coordination.' },
  { title: 'Commitment to Deadlines', text: 'A workflow organized to support project schedules and deliverables.' },
]

export function WhyChooseUs() {
  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <SectionHeading index="04" title="Why choose K Rebar Service" />
        <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <div key={r.title} className="bg-paper-dim p-7">
              <span className="font-mono text-[11px] text-accent-dim">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-base font-medium text-ink">{r.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-steel">{r.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}