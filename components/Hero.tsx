import Link from 'next/link'

export function Hero() {
  return (
    <section id="home" className="relative bg-cover bg-center bg-no-repeat py-8 md:py-12 overflow-hidden min-h-[calc(100vh-80px)]" style={{backgroundImage: "url('/images/hero-bg.jpg')"}}>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003366]/70 via-[#002244]/70 to-[#003366]/70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Empowering Careers,<br /><span className="text-[#00A4CC]">Connecting Talent</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-blue-100 mb-8 font-semibold">
            Your Strategic Human Capital Partner
          </p>

          {/* Description */}
          <p className="text-lg text-blue-50 mb-12 max-w-3xl mx-auto leading-relaxed">
            At Career Fusion Consulting, we synthesize opportunities by connecting top-tier talent with forward-thinking organizations. We believe in the perfect fusion of professional excellence and cultural fit.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/#services" className="inline-flex items-center justify-center bg-[#00A4CC] hover:bg-[#0088AA] text-[#003366] font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
              Explore Our Services
            </Link>
            <Link href="/#about" className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#003366] font-bold py-4 px-10 rounded-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 transform">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#00A4CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
