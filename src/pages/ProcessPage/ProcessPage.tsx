import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { Workflow } from '../../components/Workflow/Workflow'
import { Quality } from '../../components/Quality/Quality'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-105"
          title="A clearer path from drawing to detail"
          description="A structured, seven-step workflow from receipt of structural drawings through to final, quality-checked deliverables."
        />
        <Workflow />
        <Quality />
      </main>
      <CTA />
      <Footer />
    </>
  )
}
