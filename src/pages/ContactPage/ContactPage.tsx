import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { Contact } from '../../components/Contact/Contact'
import { Footer } from '../../components/Footer/Footer'

export function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-107"
          title="Have a project that needs detailing?"
          description="Send us your structural drawings, scope or BIM model and we'll review the requirements."
        />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
