import { Container } from './Container'
import { TechnicalGrid } from './TechnicalGrid'

interface Props {
  dwg: string
  title: string
  description?: string
}

/** Dark banner used at the top of every dedicated page (below the fixed Navbar). */
export function PageHeader({ dwg, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
      <TechnicalGrid className="text-white/[0.06]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <Container className="relative">
        <div className="mb-5 flex items-center gap-3">
          <span className="font-mono text-[11px] tracking-wider text-accent">{dwg}</span>
          <span className="h-px w-10 bg-steel/40" />
          <span className="font-mono text-[11px] tracking-wider text-steel-light">REV. A</span>
        </div>
        <h1 className="font-display text-3xl font-medium leading-[1.08] text-paper md:text-5xl">{title}</h1>
        {description && (
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-steel-light">{description}</p>
        )}
      </Container>
    </section>
  )
}
