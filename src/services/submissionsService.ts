import type { ContactSubmission } from '../types'

/**
 * Stores contact-form enquiries as an Excel (.xlsx) file.
 *
 * This is a static frontend with no server or database, so there is
 * nowhere for a browser to durably "save a file" on its own except the
 * browser itself. This service keeps every submission in the browser's
 * localStorage (so it survives reloads) and can export the full list to
 * a downloadable .xlsx workbook at any time — from the contact form
 * itself, or from the /admin → Enquiries page, which lists everything
 * captured on this device/browser and lets you download it as Excel.
 *
 * This is a backup/offline copy: the primary path for shared, real-time
 * enquiries across all visitors/devices is the Google Sheets integration
 * described in the README (VITE_FORM_ENDPOINT).
 *
 * Uses ExcelJS (rather than SheetJS/xlsx) purely to build and download a
 * workbook — no untrusted files are ever parsed here, which keeps this
 * clear of the parsing-related CVEs SheetJS has open.
 */

const STORAGE_KEY = 'rebar-site:submissions'

function readAll(): ContactSubmission[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch (err) {
    console.error('[submissionsService] Failed to read stored submissions', err)
    return []
  }
}

function writeAll(rows: ContactSubmission[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(rows))
  } catch (err) {
    console.error('[submissionsService] Failed to persist submissions', err)
  }
}

export function saveSubmission(payload: Omit<ContactSubmission, 'id' | 'submittedAt'>): ContactSubmission {
  const submission: ContactSubmission = {
    ...payload,
    id: `ENQ-${Date.now().toString(36).toUpperCase()}`,
    submittedAt: new Date().toISOString(),
  }
  const all = readAll()
  all.unshift(submission)
  writeAll(all)
  return submission
}

export function getSubmissions(): ContactSubmission[] {
  return readAll()
}

export function clearSubmissions() {
  writeAll([])
}

const COLUMNS: { key: keyof ContactSubmission; header: string; width: number }[] = [
  { key: 'id', header: 'ID', width: 16 },
  { key: 'submittedAt', header: 'Submitted', width: 22 },
  { key: 'name', header: 'Name', width: 20 },
  { key: 'company', header: 'Company', width: 20 },
  { key: 'email', header: 'Email', width: 26 },
  { key: 'phone', header: 'Phone', width: 16 },
  { key: 'projectType', header: 'Project Type', width: 18 },
  { key: 'service', header: 'Service', width: 24 },
  { key: 'location', header: 'Location', width: 20 },
  { key: 'message', header: 'Message', width: 50 },
]

/**
 * Builds an .xlsx workbook from the given submissions and triggers a
 * browser download. ExcelJS is dynamically imported here — most visitors
 * never click "download", so it's kept out of the main page bundle and
 * only fetched the moment it's actually needed.
 */
export async function exportSubmissionsToExcel(
  rows: ContactSubmission[] = readAll(),
  fileName = 'enquiries.xlsx'
) {
  const { default: ExcelJS } = await import('exceljs')
  const workbook = new ExcelJS.Workbook()
  workbook.creator = 'Website contact form'
  workbook.created = new Date()

  const sheet = workbook.addWorksheet('Enquiries')
  sheet.columns = COLUMNS.map((c) => ({ key: c.key, header: c.header, width: c.width }))
  sheet.getRow(1).font = { bold: true }

  rows.forEach((row) => sheet.addRow(row))

  const buffer = await workbook.xlsx.writeBuffer()
  const blob = new Blob([buffer], {
    type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}
