import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { AboutPage } from './pages/AboutPage/AboutPage'
import { ServicesPage } from './pages/ServicesPage/ServicesPage'
import { ProjectsPage } from './pages/ProjectsPage/ProjectsPage'
import { TechnologyPage } from './pages/TechnologyPage/TechnologyPage'
import { ProcessPage } from './pages/ProcessPage/ProcessPage'
import { ResourcesPage } from './pages/ResourcesPage/ResourcesPage'
import { ContactPage } from './pages/ContactPage/ContactPage'
import { NotFound } from './pages/NotFound/NotFound'

// Admin (Excel export tooling) is code-split since most visitors never load it.
const Admin = lazy(() => import('./pages/Admin/Admin').then((m) => ({ default: m.Admin })))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} /> 
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/admin"
          element={
            <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-paper font-mono text-sm text-steel">Loading…</div>}>
              <Admin />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
