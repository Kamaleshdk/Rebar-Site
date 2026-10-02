import { Navbar } from '../../components/Navbar/Navbar'
import { PageHeader } from '../../components/shared/PageHeader'
import { About } from '../../components/About/About'
import { WhatWeDo } from '../../components/About/WhatWeDo'
import { Approach } from '../../components/About/Approach'
import { MissionVision } from '../../components/About/MissionVision'
import { WhyChooseUs } from '../../components/About/WhyChooseUs'
import { CTA } from '../../components/CTA/CTA'
import { Footer } from '../../components/Footer/Footer'

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          dwg="DWG NO. RD-101"
          title="About K Rebar Service"
          description="Precision in every bar. Confidence in every project."
        />
        <About />
        <WhatWeDo />
        <Approach />
        <MissionVision />
        <WhyChooseUs />
      </main>
      <CTA />
      <Footer />
    </>
  )
}