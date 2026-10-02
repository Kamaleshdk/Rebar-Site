import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { Services } from '../../components/Services/Services'
import { Deliverables } from '../../components/Deliverables/Deliverables'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-102"
          title="What we detail"
          description="Reinforcement detailing services spanning structural elements, BIM coordination and fabrication-ready documentation."
        />
        <Services />
        <Deliverables />
      </main>
      <CTA />
      <Footer />
    </>
  )
}
