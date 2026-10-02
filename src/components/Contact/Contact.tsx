import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react'
import { Container } from '../shared/Container'
import { SectionHeading } from '../shared/SectionHeading'
import { siteConfig } from '../../config/siteConfig'
import { submitEnquiry, exportSubmissionsToExcel } from '../../services/contactService'
import type { SubmitResult } from '../../services/contactService'

const FIELD_CLASS =
  'w-full border border-line bg-paper px-4 py-3 text-[14px] text-ink placeholder:text-steel/60 focus:border-ink outline-none transition-colors'

export function Contact() {
  const [result, setResult] = useState<SubmitResult | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    const form = new FormData(e.currentTarget)
    const payload = {
      name: String(form.get('name') || ''),
      company: String(form.get('company') || ''),
      email: String(form.get('email') || ''),
      phone: String(form.get('phone') || ''),
      projectType: String(form.get('projectType') || ''),
      service: String(form.get('service') || ''),
      location: String(form.get('location') || ''),
      message: String(form.get('message') || ''),
    }
    const res = await submitEnquiry(payload)
    setResult(res)
    setSubmitting(false)
    if (res.status !== 'error') e.currentTarget.reset()
  }

  return (
    <section className="bg-paper-dim py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading index="01" title="Submit a project enquiry" description="Tell us about the project and we'll follow up with next steps." />

            <div className="mt-10 space-y-5 border-t border-line pt-8">
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-[14px] text-steel hover:text-ink">
                <Mail size={16} /> {siteConfig.email}
              </a>
              <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-3 text-[14px] text-steel hover:text-ink">
                <Phone size={16} /> {siteConfig.phone}
              </a>
              <div className="flex items-center gap-3 text-[14px] text-steel">
                <MapPin size={16} /> {siteConfig.address}
              </div>
              <a href={siteConfig.linkedin} className="flex items-center gap-3 text-[14px] text-steel hover:text-ink">
                <ExternalLink size={16} /> {siteConfig.linkedin}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2" noValidate>
            <div className="sm:col-span-1">
              <label htmlFor="name" className="mb-1.5 block font-mono text-[11px] text-steel">NAME</label>
              <input id="name" name="name" required className={FIELD_CLASS} placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="company" className="mb-1.5 block font-mono text-[11px] text-steel">COMPANY</label>
              <input id="company" name="company" className={FIELD_CLASS} placeholder="Company name" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] text-steel">EMAIL</label>
              <input id="email" name="email" type="email" required className={FIELD_CLASS} placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="mb-1.5 block font-mono text-[11px] text-steel">PHONE</label>
              <input id="phone" name="phone" className={FIELD_CLASS} placeholder="+1 000 000 0000" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="projectType" className="mb-1.5 block font-mono text-[11px] text-steel">PROJECT TYPE</label>
              <select id="projectType" name="projectType" className={FIELD_CLASS} defaultValue="">
                <option value="" disabled>Select project type</option>
                {['Residential', 'Commercial', 'Industrial', 'Infrastructure', 'Bridges', 'High-Rise', 'Data Centers', 'Warehouses', 'Other'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="service" className="mb-1.5 block font-mono text-[11px] text-steel">REQUIRED SERVICE</label>
              <select id="service" name="service" className={FIELD_CLASS} defaultValue="">
                <option value="" disabled>Select a service</option>
                {['Rebar Detailing', '3D Rebar Modeling', 'Bar Bending Schedules', 'Shop & Placing Drawings', 'Quantity Takeoff', 'Rebar Estimation', 'Rebar Optimization', 'RFI / Drawing Coordination'].map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="location" className="mb-1.5 block font-mono text-[11px] text-steel">PROJECT LOCATION</label>
              <input id="location" name="location" className={FIELD_CLASS} placeholder="City, Country" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] text-steel">MESSAGE</label>
              <textarea id="message" name="message" rows={5} required className={FIELD_CLASS} placeholder="Scope, drawings available, timeline…" />
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 bg-ink px-7 py-3.5 font-mono text-[13px] font-medium text-paper transition-colors hover:bg-accent hover:text-ink disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Submit Project Enquiry'}
              </button>

              {result && (
                <div role="status" className="mt-4">
                  <p className={`text-[13px] leading-relaxed ${result.status === 'error' ? 'text-red-700' : 'text-steel'}`}>
                    {result.message}
                  </p>
                  {result.status !== 'error' && (
                    <button
                      type="button"
                      onClick={() => void exportSubmissionsToExcel()}
                      className="mt-3 inline-flex items-center gap-2 font-mono text-[12px] text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-dim"
                    >
                      <Download size={13} /> Download enquiries as Excel
                    </button>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
