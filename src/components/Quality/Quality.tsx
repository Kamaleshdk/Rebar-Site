import { Check } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const ITEMS = [
  'Drawing review',
  'Model checking',
  'Reinforcement verification',
  'Bar mark consistency',
  'BBS verification',
  'Coordination review',
  'Revision tracking',
  'Final QA/QC',
]

export function Quality() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            light
            index="02"
            title="Detailing with a quality-controlled workflow"
            description="Every set of drawings passes through a structured internal review before issue."
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-white/10 py-3">
                <Check size={14} className="shrink-0 text-accent" strokeWidth={2} />
                <span className="text-[14px] text-steel-light">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
