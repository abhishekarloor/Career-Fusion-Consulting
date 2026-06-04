'use client'

import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form Data:', formData)
    alert('Thank you for your enquiry! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', enquiry: '' })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-[#00A4CC] pl-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Let's Ignite Growth</h2>
          <p className="text-lg text-gray-600">Get in touch with our team to discuss your recruitment needs</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#003366] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#003366] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#003366] mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#003366] mb-2">Your Enquiry</label>
                <textarea
                  name="enquiry"
                  value={formData.enquiry}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00A4CC]"
                  placeholder="Tell us about your recruitment needs..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#003366] text-white font-semibold py-3 rounded-lg hover:bg-[#002244] transition-colors"
              >
                Send Enquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#00A4CC] text-2xl">📧</span>
                  <div>
                    <p className="font-semibold text-[#003366]">Email</p>
                    <p className="text-gray-600">careerfusionconsulting@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#00A4CC] text-2xl">📞</span>
                  <div>
                    <p className="font-semibold text-[#003366]">Phone</p>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Executive Search
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Permanent Recruitment
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> RPO Solutions
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Talent Mapping
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#003366] mb-4">Why Partner With Us?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> 15+ years of expertise
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Global talent network
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#00A4CC]">✓</span> Customized solutions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
