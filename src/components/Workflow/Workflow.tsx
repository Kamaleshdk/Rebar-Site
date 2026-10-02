import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const STEPS = [
  ['RECEIVE', 'Structural drawings / BIM model'],
  ['REVIEW', 'Drawing and constructability review'],
  ['MODEL', 'Create reinforcement model'],
  ['DETAIL', 'Generate reinforcement drawings'],
  ['COORDINATE', 'Resolve conflicts and RFIs'],
  ['QA/QC', 'Internal checking'],
  ['DELIVER', 'Final drawings, models and schedules'],
]

export function Workflow() {
  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <SectionHeading index="01" title="A clearer path from drawing to detail" />

        <div className="relative">
          <div className="absolute left-[13px] top-2 bottom-2 hidden w-px bg-line md:block" />
          <div className="flex flex-col divide-y divide-line md:divide-y-0">
            {STEPS.map(([title, desc], i) => (
              <div key={title} className="grid grid-cols-[28px_1fr] gap-6 py-6 md:grid-cols-[28px_140px_1fr] md:items-center">
                <span className="relative z-10 flex h-7 w-7 items-center justify-center border border-steel bg-paper-dim font-mono text-[10px] text-steel">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-base text-ink">{title}</span>
                <span className="text-[14px] text-steel">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
