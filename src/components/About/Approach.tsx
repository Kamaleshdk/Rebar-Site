import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const VALUES = [
  { title: 'Accuracy', text: 'Careful interpretation of structural drawings and reinforcement requirements.' },
  { title: 'Clarity', text: 'Well-organized drawings that are easy for engineers, fabricators, and site teams to understand.' },
  { title: 'Coordination', text: 'Close attention to structural details and potential reinforcement conflicts.' },
  { title: 'Consistency', text: 'Standardized detailing practices across every project.' },
  { title: 'Timely Delivery', text: 'Efficient workflows designed to meet agreed project schedules.' },
  { title: 'Flexibility', text: 'Ability to work according to different client requirements, drawing standards, and project specifications.' },
]

export function Approach() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          index="03"
          title="Our approach"
          description="Effective detailing is more than producing drawings — it requires a clear understanding of structural plans, reinforcement requirements, constructability, and fabrication needs."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((v, i) => (
            <div key={v.title} className="reg-corners border border-line bg-paper p-7">
              <span className="font-mono text-[11px] text-accent-dim">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-display text-lg font-medium text-ink">{v.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-steel">{v.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}