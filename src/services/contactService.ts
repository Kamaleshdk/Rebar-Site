import type { ContactSubmission } from '../types'
import { saveSubmission, exportSubmissionsToExcel } from './submissionsService'

/**
 * Handles contact-form enquiries.
 *
 * Primary path: if VITE_FORM_ENDPOINT is set to a Google Apps Script Web
 * App URL (see /google-apps-script/Code.gs and the README), each
 * submission is sent there in real time and appended as a row in a
 * shared Google Sheet — visible instantly across every visitor/device,
 * no manual download required. The endpoint also works with any other
 * JSON-accepting POST target (Formspree, Web3Forms, a Supabase function,
 * etc.).
 *
 * Every submission is *also* saved locally via submissionsService (an
 * exportable .xlsx workbook — see /admin) as a backup/offline copy, and
 * as the only record if no endpoint is configured at all.
 *
 * Note on Google Apps Script specifically: Apps Script Web Apps don't
 * return CORS headers a browser can read, so the request is sent with
 * `mode: 'no-cors'`. That means we can't confirm the sheet actually
 * accepted the row from the browser response alone — but in practice, if
 * the request went out, the row lands in the sheet. If you need a
 * guaranteed delivery confirmation, use an endpoint that supports CORS
 * (Formspree, Web3Forms, a Supabase function) instead.
 */

export type SubmitResult =
  | { status: 'saved'; message: string }
  | { status: 'saved-and-sent'; message: string }
  | { status: 'error'; message: string }

const GOOGLE_SCRIPT_HOST = 'script.google.com'

export async function submitEnquiry(
  payload: Omit<ContactSubmission, 'id' | 'submittedAt'>
): Promise<SubmitResult> {
  const submission = saveSubmission(payload)
  const endpoint = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

  if (!endpoint) {
    return {
      status: 'saved',
      message: 'Thank you — your enquiry has been saved. Download it any time from /admin → Enquiries.',
    }
  }

  const isGoogleAppsScript = endpoint.includes(GOOGLE_SCRIPT_HOST)

  try {
    if (isGoogleAppsScript) {
      // Apps Script Web Apps don't handle a JSON preflight request or
      // return browser-readable CORS headers, so we send it as a
      // "simple request" (text/plain body, no custom headers that would
      // trigger a preflight) and don't attempt to read the response.
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(submission),
      })
    } else {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submission),
      })
      if (!response.ok) {
        throw new Error(`Endpoint responded with ${response.status}`)
      }
    }

    return {
      status: 'saved-and-sent',
      message: 'Thank you — your enquiry has been sent and saved. We will get back to you shortly.',
    }
  } catch (err) {
    console.error('[contactService] Failed to send enquiry to configured endpoint', err)
    return {
      status: 'error',
      message: 'Your enquiry was saved locally, but sending it to our team failed. Please try again or email us directly.',
    }
  }
}

/** Re-exported for convenience so components can trigger a download directly. */
export { exportSubmissionsToExcel }
