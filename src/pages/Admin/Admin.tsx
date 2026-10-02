import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, Trash2 } from 'lucide-react'
import { Container } from '../../components/shared/Container'
import { getSubmissions, clearSubmissions, exportSubmissionsToExcel } from '../../services/submissionsService'
import type { ContactSubmission } from '../../types'

export function Admin() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([])

  useEffect(() => {
    setSubmissions(getSubmissions())
  }, [])

  function handleClear() {
    if (!confirm('Clear all locally saved enquiries from this browser? This cannot be undone.')) return
    clearSubmissions()
    setSubmissions([])
  }

  return (
    <div className="min-h-screen bg-paper text-ink">
      <div className="border-b border-line bg-ink text-paper">
        <Container className="flex items-center justify-between py-5">
          <Link to="/" className="flex items-center gap-2 font-mono text-[12px] text-steel-light hover:text-paper">
            <ArrowLeft size={14} /> Back to site
          </Link>
          <span className="font-mono text-[11px] text-accent">ADMIN · ENQUIRIES</span>
        </Container>
      </div>

      <Container className="py-16">
        <h1 className="font-display text-3xl font-medium">Enquiries</h1>
        <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-steel">
          Every submission from the contact form on this site is saved here and can be downloaded as an Excel
          (.xlsx) workbook. This list is a <strong>local backup stored in this browser only</strong> — it is not
          a shared, multi-device inbox. For real-time, shared enquiries across every visitor and device, set{' '}
          <code className="font-mono text-[12px]">VITE_FORM_ENDPOINT</code> to a deployed Google Apps Script Web
          App URL (see <code className="font-mono text-[12px]">google-apps-script/Code.gs</code> and the README) —
          each enquiry then also lands as a new row in a shared Google Sheet the moment it's submitted, with no
          manual export needed. This page and its download button remain useful as an offline-safe backup either way.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={() => void exportSubmissionsToExcel(submissions)}
            disabled={submissions.length === 0}
            className="flex items-center gap-2 bg-ink px-5 py-2.5 font-mono text-[12px] text-paper disabled:opacity-40"
          >
            <Download size={14} /> Download all as Excel
          </button>
          <button
            onClick={handleClear}
            disabled={submissions.length === 0}
            className="flex items-center gap-2 border border-line px-5 py-2.5 font-mono text-[12px] text-ink hover:border-red-700 hover:text-red-700 disabled:opacity-40"
          >
            <Trash2 size={14} /> Clear all
          </button>
          <span className="ml-auto font-mono text-[11px] text-steel">
            {submissions.length} {submissions.length === 1 ? 'enquiry' : 'enquiries'} saved on this device
          </span>
        </div>

        <div className="mt-8 border border-line bg-paper-dim">
          {submissions.length === 0 ? (
            <div className="flex min-h-[220px] items-center justify-center p-8 text-center font-mono text-[12px] text-steel">
              No enquiries yet. Submissions made through the contact form on this browser will appear here.
            </div>
          ) : (
            <div className="max-h-[560px] overflow-auto">
              <table className="w-full min-w-[900px] border-collapse text-left text-[12px]">
                <thead>
                  <tr className="bg-paper">
                    {['ID', 'Submitted', 'Name', 'Company', 'Email', 'Phone', 'Project Type', 'Service', 'Location', 'Message'].map((h) => (
                      <th key={h} className="border-b border-line px-4 py-2.5 font-mono text-[10px] text-steel">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr key={s.id} className="border-b border-line/60 align-top">
                      <td className="px-4 py-2.5 font-mono text-[11px] text-steel">{s.id}</td>
                      <td className="px-4 py-2.5 text-steel">{new Date(s.submittedAt).toLocaleString()}</td>
                      <td className="px-4 py-2.5 text-ink">{s.name}</td>
                      <td className="px-4 py-2.5 text-steel">{s.company}</td>
                      <td className="px-4 py-2.5 text-steel">{s.email}</td>
                      <td className="px-4 py-2.5 text-steel">{s.phone}</td>
                      <td className="px-4 py-2.5 text-steel">{s.projectType}</td>
                      <td className="px-4 py-2.5 text-steel">{s.service}</td>
                      <td className="px-4 py-2.5 text-steel">{s.location}</td>
                      <td className="px-4 py-2.5 max-w-xs text-steel">{s.message}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
