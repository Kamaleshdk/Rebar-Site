import { useState } from 'react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { projects } from '../../data/content'
import type { Project } from '../../types'
import { ProjectCard } from './ProjectCard'
import { ProjectModal } from './ProjectModal'

export function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section className="bg-ink py-24 md:py-32">
      <Container>
        <SectionHeading
          light
          index="02"
          title="Selected projects"
          description="A sample of the project types and scopes we work across. Replace with real project data in src/data/content.ts."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setActive} />
          ))}
        </div>
      </Container>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
