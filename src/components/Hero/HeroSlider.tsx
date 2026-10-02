import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides, HERO_AUTOPLAY_MS } from '../../data/heroSlides'
import { Container } from '../shared/Container'

/**
 * Full-width hero slider: slides move horizontally, each with its own
 * background image and text. Content comes from src/data/heroSlides.ts.
 * Autoplays continuously (speed: HERO_AUTOPLAY_MS in heroSlides.ts).
 */
export function HeroSlider() {
  const count = heroSlides.length
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    if (count < 2) return
    const t = setTimeout(next, HERO_AUTOPLAY_MS)
    return () => clearTimeout(t)
  }, [index, next, count])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative h-[100svh] min-h-[620px] max-h-[900px] overflow-hidden bg-ink"
    >
      <div
        className="hero-track flex h-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {heroSlides.map((slide, i) => {
          const active = i === index
          return (
            <div
              key={slide.image + i}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
              inert={!active}
              className="relative h-full w-full shrink-0"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={i === 0 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/70 to-ink/20" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

              <Container className="relative flex h-full items-center pt-20">
                <div
                  className={`max-w-xl transition-all duration-700 ${
                    active ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="font-mono text-[11px] tracking-wider text-accent">{slide.eyebrow}</span>
                    <span className="h-px w-10 bg-steel/50" />
                  </div>
                  <h1 className="font-display text-[2.4rem] font-medium leading-[1.06] text-paper md:text-[3.5rem]">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-steel-light md:text-[17px]">
                    {slide.text}
                  </p>
                  <div className="mt-10 flex flex-wrap items-center gap-4">
                    <Link
                      to={slide.ctaTo}
                      className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 font-mono text-[13px] font-medium text-ink transition-colors hover:bg-paper"
                    >
                      {slide.ctaLabel}
                      <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                    {slide.secondaryLabel && slide.secondaryTo && (
                      <Link
                        to={slide.secondaryTo}
                        className="inline-flex items-center border border-white/25 px-6 py-3.5 font-mono text-[13px] font-medium text-paper transition-colors hover:border-white/60"
                      >
                        {slide.secondaryLabel}
                      </Link>
                    )}
                  </div>
                </div>
              </Container>
            </div>
          )
        })}
      </div>

      {/* controls */}
      <div className="absolute inset-x-0 bottom-8 z-10">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className="group flex h-6 items-center"
              >
                <span
                  className={`block h-[3px] transition-all duration-500 ${
                    i === index ? 'w-12 bg-accent' : 'w-6 bg-white/30 group-hover:bg-white/60'
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 font-mono text-[11px] text-steel-light">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-paper hover:border-white/50"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center border border-white/20 text-paper hover:border-white/50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </Container>
      </div>
    </section>
  )
}
