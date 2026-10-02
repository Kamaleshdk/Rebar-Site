import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'

type IconType = 'plan' | 'section' | 'table' | 'model' | 'chart' | 'dimension' | 'clash'

const DELIVERABLES: { label: string; type: IconType }[] = [
  { label: 'Reinforcement Plans', type: 'plan' },
  { label: 'Sections', type: 'section' },
  { label: 'Elevations', type: 'section' },
  { label: 'Bar Bending Schedules', type: 'table' },
  { label: 'Bar Lists', type: 'table' },
  { label: '3D Rebar Models', type: 'model' },
  { label: 'Shop Drawings', type: 'dimension' },
  { label: 'Placing Drawings', type: 'plan' },
  { label: 'Quantity Reports', type: 'chart' },
  { label: 'Coordination Reports', type: 'clash' },
]

/** A small, type-specific technical mockup — stands in for a real drawing
    without showing actual (and potentially confidential) client documents. */
function DeliverableIcon({ type, uid }: { type: IconType; uid: string }) {
  const gridId = `dgrid-${uid}`
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full">
      <defs>
        <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M10 0H0V10" fill="none" stroke="#687078" strokeOpacity="0.18" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100" height="70" fill={`url(#${gridId})`} />
      <rect x="3" y="3" width="94" height="64" fill="none" stroke="#687078" strokeWidth="1" />
      <circle cx="90" cy="10" r="2" fill="#F28C28" />

      {type === 'plan' &&
        [18, 30, 42, 54].map((y) =>
          [14, 28, 42, 56, 70, 84].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.6" fill="#687078" />
          ))
        )}

      {type === 'section' && (
        <g>
          <rect x="20" y="20" width="60" height="28" fill="none" stroke="#687078" strokeWidth="1.2" />
          {[30, 44, 58, 70].map((x) => (
            <circle key={x} cx={x} cy="34" r="3" fill="none" stroke="#F28C28" strokeWidth="1.3" />
          ))}
        </g>
      )}

      {type === 'table' && (
        <g stroke="#687078" strokeWidth="1" fill="none">
          <rect x="16" y="16" width="68" height="38" />
          <line x1="16" y1="26" x2="84" y2="26" />
          <line x1="16" y1="36" x2="84" y2="36" />
          <line x1="16" y1="46" x2="84" y2="46" />
          <line x1="40" y1="16" x2="40" y2="54" />
          <line x1="62" y1="16" x2="62" y2="54" />
        </g>
      )}

      {type === 'model' && (
        <g fill="none" stroke="#687078" strokeWidth="1">
          <path d="M50 14 L78 28 L50 42 L22 28 Z" />
          <path d="M22 28 L22 48 L50 62 L50 42" />
          <path d="M78 28 L78 48 L50 62" />
          <line x1="50" y1="14" x2="50" y2="42" stroke="#F28C28" strokeWidth="1" />
        </g>
      )}

      {type === 'chart' &&
        [18, 34, 50, 66, 82].map((x, i) => {
          const h = [16, 28, 20, 34, 24][i]
          return (
            <rect
              key={x}
              x={x - 5}
              y={54 - h}
              width="10"
              height={h}
              fill="none"
              stroke={i === 3 ? '#F28C28' : '#687078'}
              strokeWidth="1.2"
            />
          )
        })}

      {type === 'dimension' && (
        <g stroke="#687078" strokeWidth="1" fill="none">
          <line x1="16" y1="20" x2="84" y2="20" />
          <line x1="16" y1="16" x2="16" y2="24" />
          <line x1="84" y1="16" x2="84" y2="24" />
          <line x1="16" y1="34" x2="60" y2="34" />
          <line x1="16" y1="30" x2="16" y2="38" />
          <line x1="60" y1="30" x2="60" y2="38" />
          <line x1="16" y1="48" x2="40" y2="48" stroke="#F28C28" />
        </g>
      )}

      {type === 'clash' && (
        <g fill="none" strokeWidth="1.2">
          <circle cx="40" cy="35" r="16" stroke="#687078" />
          <circle cx="60" cy="35" r="16" stroke="#F28C28" />
        </g>
      )}
    </svg>
  )
}

export function Deliverables() {
  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <SectionHeading
          index="02"
          title="What you receive"
          description="Representative deliverable types — shown as technical mockups. Final formats are agreed per project."
        />
        <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {DELIVERABLES.map((item, i) => (
            <div key={item.label} className="border border-line bg-paper p-4">
              <div className="aspect-[10/7]">
                <DeliverableIcon type={item.type} uid={String(i)} />
              </div>
              <div className="mt-3 font-mono text-[11px] leading-snug text-steel">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}