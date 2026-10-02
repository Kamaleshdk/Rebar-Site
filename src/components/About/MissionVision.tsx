import { Eye, Target } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

const CARDS = [
  {
    icon: Eye,
    label: 'OUR VISION',
    text: 'To establish K Rebar Service as a trusted name in rebar detailing and estimation by combining technical expertise, modern workflows, and a strong commitment to quality — contributing to better-planned, more efficient construction projects.',
  },
  {
    icon: Target,
    label: 'OUR MISSION',
    text: 'To provide accurate, practical, and reliable rebar detailing solutions that help our clients execute their projects with greater confidence and efficiency — continuously improving our processes, quality, and schedules.',
  },
]

export function MissionVision() {
  return (
    <section className="bg-paper-dim py-20 md:py-28">
      <Container>
        <SectionHeading index="04" title="Vision & mission" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((c) => {
            const Icon = c.icon
            return (
              <div key={c.label} className="reg-corners border border-line bg-paper p-8 md:p-10">
                <Icon size={22} strokeWidth={1.5} className="text-accent" />
                <div className="mt-5 font-mono text-[11px] tracking-wider text-accent-dim">{c.label}</div>
                <p className="mt-4 text-[15px] leading-relaxed text-steel">{c.text}</p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}