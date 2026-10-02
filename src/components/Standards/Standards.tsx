import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { standards } from '../../data/content'

export function Standards() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading
          index="03"
          title="Working to project-specific standards"
          description="We detail to the design standard specified for your project. Only standards we currently support are listed below."
        />

        <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
          {standards.map((std) => (
            <div key={std.id} className="reg-corners border border-line bg-paper-dim p-6 text-ink">
              <div className="font-display text-xl font-medium">{std.name}</div>
              <p className="mt-2 text-[12px] leading-relaxed text-steel">{std.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
