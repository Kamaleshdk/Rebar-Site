import { useState } from 'react'
import { Plus } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { faqItems } from '../../data/content'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <section className="bg-paper py-24 md:py-32">
      <Container>
        <SectionHeading index="01" title="Frequently asked questions" />

        <div className="mx-auto max-w-3xl divide-y divide-line border-t border-b border-line">
          {faqItems.map((item) => {
            const isOpen = openId === item.id
            return (
              <div key={item.id}>
                <h3>
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-[16px] text-ink">{item.question}</span>
                    <Plus
                      size={16}
                      className={`shrink-0 text-steel transition-transform duration-300 ${isOpen ? 'rotate-45 text-accent' : ''}`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-[14px] leading-relaxed text-steel">{item.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
