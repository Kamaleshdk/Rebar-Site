import { useState } from 'react'
import { Play, Pause } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { RotatingRebarModel } from '../shared/RotatingRebarModel'
import { TechnicalGrid } from '../shared/TechnicalGrid'

/**
 * The site's "3D animation" — a real CSS 3D rotating reinforcement cage,
 * presented in a video-player-style frame (HUD labels, a play/pause
 * control) rather than an embedded video file, since no licensed footage
 * is available to source. Placed on the Technology page, where a 3D BIM
 * modeling preview is contextually relevant.
 */
export function Model3DShowcase() {
  const [spinning, setSpinning] = useState(true)

  return (
    <section className="bg-ink-soft py-24 text-paper md:py-32">
      <Container>
        <SectionHeading
          light
          index="02"
          title="A live look at the model"
          description="Reinforcement isn't detailed in 2D alone — every drawing and schedule we issue is derived from a coordinated 3D model like this one."
        />

        <div className="reg-corners relative overflow-hidden border border-white/15 bg-ink">
          <TechnicalGrid className="text-white/[0.05]" />

          <div className="relative flex items-center justify-between border-b border-white/10 px-5 py-3">
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-wider text-steel-light">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              3D REBAR MODEL — LIVE PREVIEW
            </div>
            <span className="font-mono text-[10px] text-steel-light">GRID C4 · EL +12.400</span>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center py-16 md:min-h-[440px]">
            <RotatingRebarModel size={300} spinning={spinning} speedSeconds={18} />
          </div>

          <div className="relative flex items-center justify-between border-t border-white/10 px-5 py-3">
            <button
              onClick={() => setSpinning((v) => !v)}
              aria-pressed={spinning}
              className="flex items-center gap-2 border border-white/15 px-3 py-1.5 font-mono text-[11px] text-steel-light transition-colors hover:border-white/40 hover:text-paper"
            >
              {spinning ? <Pause size={12} /> : <Play size={12} />}
              {spinning ? 'Pause rotation' : 'Resume rotation'}
            </button>
            <span className="font-mono text-[10px] text-steel-light">CAGE · N4 Ø16 @200 · TIE Ø10</span>
          </div>
        </div>
      </Container>
    </section>
  )
}
