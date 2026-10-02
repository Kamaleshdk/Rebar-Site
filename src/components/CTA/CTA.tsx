import { Link } from 'react-router-dom'
import { ArrowRight, Upload } from 'lucide-react'
import { Container } from '../shared/Container'
import { TechnicalGrid } from '../shared/TechnicalGrid'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-soft py-24 text-paper md:py-28">
      <TechnicalGrid className="text-white/[0.05]" />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-medium leading-tight md:text-[2.75rem]">
          Have a project that needs detailing?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-[15px] leading-relaxed text-steel-light">
          Send us your structural drawings, scope or BIM model and we'll review the requirements.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-[13px] font-medium text-ink transition-colors hover:bg-paper"
          >
            Request a Quote
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 font-mono text-[13px] font-medium text-paper transition-colors hover:border-white/50"
          >
            <Upload size={14} />
            Send Project Files
          </Link>
        </div>
      </Container>
    </section>
  )
}
