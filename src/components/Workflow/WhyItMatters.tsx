import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const STAGES = [
  'STRUCTURAL DRAWINGS',
  'REBAR MODEL',
  'COORDINATION',
  'DETAILING',
  'BBS',
  'FABRICATION',
  'SITE INSTALLATION',
]

export function WhyItMatters() {
  return (
    <section className="bg-ink-soft py-24 text-paper md:py-32">
      <Container>
        <SectionHeading
          index="01"
          light
          title="From structural design to fabrication-ready detail."
          description="Accurate detailing is the link between engineering intent and what gets built. It supports constructability, coordination, fabrication and the documentation trail that keeps a project moving."
        />

        <div className="mt-4 overflow-x-auto">
          <div className="flex min-w-[760px] items-stretch gap-0 md:min-w-0">
            {STAGES.map((stage, i) => (
              <div key={stage} className="flex flex-1 items-center">
                <div className="flex-1 border-t border-white/15 py-6">
                  <div className="font-mono text-[10px] text-accent">{String(i + 1).padStart(2, '0')}</div>
                  <div className="mt-2 font-mono text-[12px] tracking-wide text-steel-light">{stage}</div>
                </div>
                {i < STAGES.length - 1 && (
                  <svg width="20" height="20" viewBox="0 0 20 20" className="mx-1 shrink-0 self-start mt-5 text-steel-light/50">
                    <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1" fill="none" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
          {['Constructability', 'Coordination', 'Fabrication', 'Documentation'].map((item) => (
            <div key={item}>
              <div className="h-px w-8 bg-accent" />
              <div className="mt-3 font-display text-base text-paper">{item}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
