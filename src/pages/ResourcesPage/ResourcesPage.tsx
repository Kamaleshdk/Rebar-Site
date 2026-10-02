import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { FAQ } from '../../components/FAQ/FAQ'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-106"
          title="Resources"
          description="Answers to the questions we hear most often about scope, software, formats and getting started."
        />
        <FAQ />
      </main>
      <CTA />
      <Footer />
    </>
  )
}
