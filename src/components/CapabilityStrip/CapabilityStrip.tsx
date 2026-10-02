import { Container } from '../shared/Container'

const CAPABILITIES = [
  '2D DETAILING',
  '3D BIM MODELING',
  'BBS',
  'QUANTITY TAKEOFF',
  'SHOP DRAWINGS',
  'COORDINATION',
]

export function CapabilityStrip() {
  return (
    <div className="border-b border-line bg-paper">
      <Container>
        <div className="scrollbar-thin flex items-stretch overflow-x-auto">
          {CAPABILITIES.map((item, i) => (
            <div
              key={item}
              className={`flex shrink-0 items-center gap-3 py-4 pr-8 ${i !== 0 ? 'pl-8 border-l border-line' : ''}`}
            >
              <span className="font-mono text-[10px] text-accent-dim">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-mono text-[11px] tracking-wide text-steel whitespace-nowrap">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
