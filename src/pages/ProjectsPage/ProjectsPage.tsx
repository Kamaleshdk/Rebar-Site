import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { ProjectTypes } from '../../components/ProjectTypes/ProjectTypes'
import { Projects } from '../../components/Projects/Projects'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-103"
          title="Projects"
          description="Built for complex reinforced concrete projects — from housing to high-rise, bridges to data centers."
        />
        <ProjectTypes />
        <Projects />
      </main>
      <CTA />
      <Footer />
    </>
  )
}
