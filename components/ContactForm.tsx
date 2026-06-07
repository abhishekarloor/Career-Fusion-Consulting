'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'

type ContactFormProps = {
  onClose?: () => void
}

export function ContactForm({ onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: '',
    _honey: ''
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'sending') return

    if (formData._honey) {
      console.warn('Honeypot triggered - likely spam, not submitting')
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      const response = await fetch('https://formsubmit.co/careerfusionconsulting@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.enquiry,
          _honey: formData._honey,
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', enquiry: '', _honey: '' })
      if (onClose) {
        onClose()
      }
    } catch (error) {
      console.error('Contact form send error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-[#003366] mb-1">Full Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#003366] mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
          placeholder="your.email@example.com"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#003366] mb-1">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-[#003366] mb-1">Your Enquiry</label>
        <textarea
          name="enquiry"
          value={formData.enquiry}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
          placeholder="Tell us about your recruitment needs..."
        ></textarea>
      </div>
      <input
        type="text"
        name="_honey"
        value={formData._honey}
        onChange={handleChange}
        autoComplete="off"
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />
      <button
        type="submit"
        className="w-full bg-[#003366] text-white font-semibold py-3 rounded-lg hover:bg-[#002244] transition-colors"
      >
        {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
      </button>

      {status === 'success' && (
        <p className="mt-3 text-sm text-green-700">Thank you! Your enquiry has been sent.</p>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-700">Submission failed. Please try again later.</p>
      )}
    </form>
  )
}
