import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { Technology } from '../../components/Technology/Technology'
import { Model3DShowcase } from '../../components/Technology/Model3DShowcase'
import { Standards } from '../../components/Standards/Standards'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function TechnologyPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-104"
          title="Powered by engineering technology"
          description="Reinforcement modeling, coordination and drafting, built on industry-standard BIM and CAD tools — detailed to the standards your project specifies."
        />
        <Technology />
        <Model3DShowcase />
        <Standards />
      </main>
      <CTA />
      <Footer />
    </>
  )
}
