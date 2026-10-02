import { Navbar } from '../../components/Navbar/Navbar'
import { HeroSlider } from '../../components/Hero/HeroSlider'
import { CapabilityStrip } from '../../components/CapabilityStrip/CapabilityStrip'
import { WhyItMatters } from '../../components/Workflow/WhyItMatters'
import { QuickLinks } from '../../components/QuickLinks/QuickLinks'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <CapabilityStrip />
        <WhyItMatters />
        <QuickLinks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
