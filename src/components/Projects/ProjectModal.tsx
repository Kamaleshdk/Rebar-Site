import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import type { Project } from '../../types'

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const rows: [string, string][] = [
    ['Project Type', project.project_type],
    ['Location', project.location],
    ['Scope', project.scope],
    ['Software', project.software],
    ['Deliverables', project.deliverables],
  ]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="reg-corners relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-white/15 bg-ink-soft p-8 text-paper md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center border border-white/20 text-steel-light hover:text-paper"
        >
          <X size={16} />
        </button>

        <span className="font-mono text-[11px] text-accent">{project.id}</span>
        <h2 id="project-modal-title" className="mt-3 font-display text-2xl font-medium md:text-3xl">
          {project.project_name}
        </h2>
        <p className="mt-4 max-w-lg text-[14px] leading-relaxed text-steel-light">{project.description}</p>

        <dl className="mt-8 grid grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-2">
          {rows.map(([label, value]) => (
            <div key={label}>
              <dt className="font-mono text-[10px] tracking-wide text-steel-light">{label.toUpperCase()}</dt>
              <dd className="mt-1 text-[14px] text-paper">{value || '—'}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
