import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { services } from '../../data/content'
import { ServiceCard } from './ServiceCard'

export function Services() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="01"
            title="What we detail"
            description="Reinforcement detailing services spanning structural elements, BIM coordination and fabrication documentation."
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </Container>
    </section>
  )
}
