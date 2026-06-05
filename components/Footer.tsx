import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img 
              src="./images/career-fusion-logo.png" 
              alt="Career Fusion Consulting" 
              className="h-24 w-auto mb-4"
            />
            <p className="text-blue-100 text-sm leading-relaxed">
              Empowering careers, connecting talent with opportunity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-blue-100 hover:text-[#00A4CC] transition">Home</Link>
              </li>
              <li>
                <Link href="#services" className="text-blue-100 hover:text-[#00A4CC] transition">Services</Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-100 hover:text-[#00A4CC] transition">About</Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-100 hover:text-[#00A4CC] transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-blue-100">✓ Executive Search</span></li>
              <li><span className="text-blue-100">✓ Permanent Recruitment</span></li>
              <li><span className="text-blue-100">✓ RPO Solutions</span></li>
              <li><span className="text-blue-100">✓ Talent Mapping</span></li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div>
                <p className="text-blue-100 text-sm mb-1">Email</p>
                <a href="mailto:careerfusionconsulting@gmail.com" className="text-[#00A4CC] hover:text-blue-200 transition">
                  careerfusionconsulting@gmail.com
                </a>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-blue-100 hover:text-[#00A4CC] transition text-lg">f</a>
                <a href="#" className="text-blue-100 hover:text-[#00A4CC] transition text-lg">in</a>
                <a href="#" className="text-blue-100 hover:text-[#00A4CC] transition text-lg">tw</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2026 Career Fusion Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-blue-100">
              <Link href="#" className="hover:text-[#00A4CC] transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-[#00A4CC] transition">Terms & Conditions</Link>
              <Link href="#" className="hover:text-[#00A4CC] transition">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
