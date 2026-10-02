interface Props {
  index: string // e.g. "02" — drawing-sheet style section index
  title: string
  description?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeading({ index, title, description, light = false, align = 'left' }: Props) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      <div className={`flex items-baseline gap-3 mb-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`font-mono text-xs tracking-wider ${light ? 'text-accent' : 'text-accent-dim'}`}>
          {index}
        </span>
        <span className={`h-px w-8 ${light ? 'bg-steel-light/50' : 'bg-steel/40'}`} />
      </div>
      <h2 className={`font-display text-3xl md:text-[2.75rem] leading-[1.08] font-medium ${light ? 'text-paper' : 'text-ink'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15px] leading-relaxed ${light ? 'text-steel-light' : 'text-steel'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
