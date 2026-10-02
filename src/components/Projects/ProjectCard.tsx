import type { Project } from '../../types'

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: (p: Project) => void }) {
  return (
    <button
      onClick={() => onOpen(project)}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden border border-line bg-ink-soft p-6 text-left"
    >
      <svg className="absolute inset-0 h-full w-full text-white/[0.05]" aria-hidden="true">
        <defs>
          <pattern id={`p-${project.id}`} width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0 0 0 0 36" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#p-${project.id})`} />
      </svg>

      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
        <span className="font-mono text-[10px] tracking-wider text-accent">{project.id}</span>
        <h3 className="mt-2 font-display text-xl font-medium text-paper">{project.project_name}</h3>
        <p className="mt-1 font-mono text-[11px] text-steel-light">{project.project_type} · {project.location}</p>
      </div>

      <div className="absolute right-5 top-5 h-8 w-8 border border-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  )
}
