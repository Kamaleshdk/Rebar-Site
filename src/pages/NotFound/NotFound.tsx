import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-center text-paper">
      <span className="font-mono text-[11px] text-accent">ERROR 404</span>
      <h1 className="mt-4 font-display text-3xl font-medium">Page not found</h1>
      <p className="mt-3 max-w-sm text-[14px] text-steel-light">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="mt-8 border border-white/20 px-6 py-3 font-mono text-[13px] hover:border-white/50">
        Back to home
      </Link>
    </div>
  )
}
