import { useState } from 'react'
import * as Icons from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Service } from '../../types'

function resolveIcon(name: string): LucideIcon {
  const key = name
    .split('-')
    .map((p, i) => (i === 0 ? p : p.charAt(0).toUpperCase() + p.slice(1)))
    .join('')
  const PascalKey = key.charAt(0).toUpperCase() + key.slice(1)
  return (Icons as unknown as Record<string, LucideIcon>)[PascalKey] ?? Icons.Ruler
}

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [hover, setHover] = useState(false)
  const Icon = resolveIcon(service.icon || 'ruler')

  return (
    <div
      className="reg-corners group relative flex h-full flex-col border border-line bg-paper p-7 text-ink transition-colors hover:border-ink/30"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-start justify-between">
        <span className="font-mono text-[11px] text-accent-dim">{service.id ?? String(index + 1).padStart(2, '0')}</span>
        <Icon
          size={20}
          strokeWidth={1.5}
          className={`text-steel transition-transform duration-300 ${hover ? '-translate-y-0.5 translate-x-0.5 text-accent' : ''}`}
        />
      </div>

      <h3 className="mt-6 font-display text-lg font-medium leading-snug text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-steel">{service.short_description}</p>

      <div
        className={`mt-6 h-px w-full bg-line transition-colors duration-300 ${hover ? 'bg-accent' : ''}`}
      />
      <p className={`mt-4 text-[13px] leading-relaxed text-steel transition-opacity duration-300 ${hover ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
        {service.description}
      </p>
    </div>
  )
}
