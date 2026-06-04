'use client'

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 py-0">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img 
            src="/images/career-fusion-logo.png" 
            alt="Career Fusion Consulting" 
            className="h-40 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center">
          <Link href="#home" className="text-gray-700 hover:text-[#003366] font-medium transition">
            Home
          </Link>
          <Link href="#services" className="text-gray-700 hover:text-[#003366] font-medium transition">
            Services
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-[#003366] font-medium transition">
            About Us
          </Link>
          <Link href="#expertise" className="text-gray-700 hover:text-[#003366] font-medium transition">
            Expertise
          </Link>
          <Link href="#contact" className="text-gray-700 hover:text-[#003366] font-medium transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4">
          <button className="bg-[#00A4CC] hover:bg-[#0091B3] text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 flex flex-col gap-4">
          <Link href="#home" className="text-gray-700 hover:text-[#003366] font-medium">Home</Link>
          <Link href="#services" className="text-gray-700 hover:text-[#003366] font-medium">Services</Link>
          <Link href="#about" className="text-gray-700 hover:text-[#003366] font-medium">About Us</Link>
          <Link href="#expertise" className="text-gray-700 hover:text-[#003366] font-medium">Expertise</Link>
          <Link href="#contact" className="text-gray-700 hover:text-[#003366] font-medium">Contact</Link>
          <button className="bg-[#00A4CC] hover:bg-[#0091B3] text-white w-full py-2 rounded-lg font-semibold transition-colors">
            Get in Touch
          </button>
        </div>
      )}
    </header>
  )
}
