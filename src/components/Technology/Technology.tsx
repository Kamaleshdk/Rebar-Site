import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { technology } from '../../data/content'

export function Technology() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          index="01"
          title="Powered by engineering technology"
          description="Reinforcement modeling, coordination and drafting are built on industry-standard BIM and CAD tools."
        />

        <div className="border-t border-line">
          {technology.map((tech, i) => (
            <div
              key={tech.id}
              className="group grid grid-cols-1 items-center gap-4 border-b border-line py-6 transition-colors hover:bg-paper-dim/60 md:grid-cols-[auto_1fr_auto]"
            >
              <span className="font-mono text-[11px] text-accent-dim">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <div className="font-display text-lg text-ink">{tech.name}</div>
                <div className="mt-1 text-[13px] text-steel">{tech.description}</div>
              </div>
              <span className="justify-self-start font-mono text-[10px] uppercase tracking-wide text-steel md:justify-self-end">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
