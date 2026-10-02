/**
 * A genuine CSS 3D rotating reinforcement cage — vertical bars arranged
 * in a circle plus horizontal tie rings, spun continuously around the Y
 * axis with real perspective/rotateY/translateZ (not a flat image, video,
 * or sliding carousel). Used as the "constantly animating" hero visual
 * and as the larger 3D preview on the Technology page.
 *
 * Refined with: cylindrical shading on each bar (a gradient standing in
 * for rounded-steel highlight/shadow), a soft contact shadow and dashed
 * backdrop rings for depth, a glow on the tie rings, and a static
 * "studio light" sweep overlay that bars pass through as they rotate.
 *
 * Respects prefers-reduced-motion via the global animation override in
 * index.css (forces a single, effectively-instant rotation, i.e. a
 * static frame) — no extra handling needed here — and additionally
 * accepts `spinning` so callers can offer an explicit pause control.
 */
interface Props {
  barCount?: number
  radius?: number
  height?: number
  ringCount?: number
  size?: number
  speedSeconds?: number
  spinning?: boolean
  className?: string
}

export function RotatingRebarModel({
  barCount = 16,
  radius = 112,
  height = 240,
  ringCount = 8,
  size = 320,
  speedSeconds = 16,
  spinning = true,
  className = '',
}: Props) {
  const bars = Array.from({ length: barCount })
  const rings = Array.from({ length: ringCount })
  const mid = Math.floor((ringCount - 1) / 2)

  return (
    <div className={`relative ${className}`} style={{ perspective: '1200px' }}>
      <div className="relative mx-auto" style={{ width: size, height: size, transformStyle: 'preserve-3d' }}>
        {/* static backdrop — dashed depth rings, do not rotate */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
          <div className="h-[94%] w-[94%] rounded-full border border-dashed border-steel/40" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25">
          <div className="h-[72%] w-[72%] rounded-full border border-dashed border-steel/40" />
        </div>

        {/* soft contact shadow grounding the model */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full blur-md"
          style={{
            width: radius * 1.7,
            height: radius * 0.5,
            marginLeft: -(radius * 0.85),
            marginTop: height / 2 - radius * 0.1,
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.35) 0%, transparent 72%)',
            transform: 'rotateX(90deg)',
          }}
        />

        <div
          className="cage-spin absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            animationDuration: `${speedSeconds}s`,
            animationPlayState: spinning ? 'running' : 'paused',
          }}
        >
          {bars.map((_, i) => {
            const angle = (360 / barCount) * i
            return (
              <div key={`bar-${i}`} style={{ transformStyle: 'preserve-3d' }}>
                <div
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: 3,
                    height,
                    marginLeft: -1.5,
                    marginTop: -height / 2,
                    background: 'linear-gradient(90deg, #0a0c0d 0%, #4a5257 45%, #15181a 70%, #0a0c0d 100%)',
                    boxShadow: '0 0 1px rgba(0,0,0,0.6)',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                />
                {/* cut-end cap at the top of each bar */}
                <div
                  className="absolute left-1/2 top-1/2 rounded-full"
                  style={{
                    width: 6,
                    height: 6,
                    marginLeft: -3,
                    marginTop: -height / 2 - 3,
                    background: 'radial-gradient(circle at 35% 30%, #8a9196, #15181a 75%)',
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    transformStyle: 'preserve-3d',
                  }}
                />
              </div>
            )
          })}

          {rings.map((_, i) => {
            const y = -height / 2 + (height / (ringCount - 1)) * i
            const edgeFade = 1 - Math.abs(i - mid) / (mid + 1) * 0.35
            return (
              <div
                key={`ring-${i}`}
                className="absolute left-1/2 top-1/2 rounded-full border-2"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  marginLeft: -radius,
                  marginTop: -radius,
                  borderColor: `rgba(242,140,40,${0.85 * edgeFade})`,
                  boxShadow: `0 0 7px rgba(242,140,40,${0.3 * edgeFade})`,
                  transform: `translateY(${y}px) rotateX(90deg)`,
                  transformStyle: 'preserve-3d',
                }}
              />
            )
          })}

          {/* base + cap plates for a grounded, structural feel */}
          {[height / 2, -height / 2].map((y, i) => (
            <div
              key={`plate-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-steel/40"
              style={{
                width: radius * 2 + 24,
                height: radius * 2 + 24,
                marginLeft: -(radius + 12),
                marginTop: -(radius + 12),
                transform: `translateY(${y}px) rotateX(90deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          ))}
        </div>

        {/* static studio-light sweep — bars rotate through this, not the other way round */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen"
          style={{
            background: 'radial-gradient(circle at 28% 22%, rgba(255,255,255,0.22), transparent 45%)',
          }}
        />
      </div>
    </div>
  )
}