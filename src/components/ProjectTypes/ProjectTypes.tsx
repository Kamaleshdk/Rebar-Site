import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { projectTypes } from '../../data/content'

function resolveIcon(name: string): LucideIcon {
  const pascal = name.charAt(0).toUpperCase() + name.slice(1).replace(/-./g, (m) => m[1].toUpperCase())
  return (Icons as unknown as Record<string, LucideIcon>)[pascal] ?? Icons.Layers
}

export function ProjectTypes() {
  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <SectionHeading
          index="01"
          title="Built for complex reinforced concrete projects."
          description="From housing to high-rise, our detailing process scales to the geometry and coordination demands of the structure."
        />

        <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-5">
          {projectTypes.map((type) => {
            const Icon = resolveIcon(type.icon || 'layers')
            return (
              <div key={type.id} className="group flex flex-col justify-between gap-8 bg-paper-dim p-6 transition-colors hover:bg-paper">
                <Icon size={20} strokeWidth={1.5} className="text-steel transition-colors group-hover:text-accent" />
                <div>
                  <div className="font-display text-[15px] text-ink">{type.name}</div>
                  <div className="mt-1 font-mono text-[11px] leading-relaxed text-steel">{type.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
