import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const HIGHLIGHTS = ['Rebar Detailing', 'Shop Drawings', 'BBS', 'Quantity Estimation']

export function About() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:items-center">
          {/* PLACEHOLDER — replace intro.svg with a real photo (e.g. intro.jpg)
              in public/images/about/, then update the src below to match. */}
                    <div className="reg-corners relative aspect-[4/3] overflow-hidden border border-line">
            <video
              src="/images/about/Intro.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              Your browser does not support video playback.
            </video>
          </div>

          <div>
            <SectionHeading
              index="01"
              title="Welcome to K Rebar Service"
              description="K Rebar Service provides professional rebar detailing, shop drawing, quantity estimation, and reinforcement documentation services for construction projects."
            />

            <div className="space-y-5 text-[15px] leading-relaxed text-steel">
              <p>
                We work closely with <span className="text-ink">engineers, contractors, fabricators, detailers,
                and construction professionals</span> to transform structural designs into clear, accurate,
                fabrication-ready reinforcement drawings.
              </p>
              <p>
                Accurate rebar detailing plays an important role in reducing material waste, avoiding site
                complications, and keeping construction work on schedule — from{' '}
                <span className="text-ink">residential and commercial buildings</span> to large-scale
                structural projects.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-line pt-6">
              {HIGHLIGHTS.map((h) => (
                <span key={h} className="border border-line px-3 py-1.5 font-mono text-[11px] text-steel">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}