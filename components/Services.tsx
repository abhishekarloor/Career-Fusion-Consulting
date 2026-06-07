import Link from 'next/link'

export function Services() {
  const services = [
    {
      icon: '👔',
      title: 'Executive Search',
      description: 'Targeting passive talent and high-impact leadership positions with deep-dive methodology and global network.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '📋',
      title: 'Permanent Recruitment',
      description: 'Strategic hires for long-term growth, ensuring perfect cultural and professional fit.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '⚙️',
      title: 'RPO Solutions',
      description: 'Full-scale recruitment process outsourcing with end-to-end talent management.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '🔍',
      title: 'Talent Mapping',
      description: 'Proactive market intelligence and strategic talent identification for future needs.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🌍',
      title: 'Diversity & Inclusion',
      description: 'Building inclusive workplaces by connecting diverse talent across all levels.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '💡',
      title: 'Digital First Hiring',
      description: 'Technology-enabled recruitment solutions for faster, smarter hiring decisions.',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: '🎯',
      title: 'Leadership Hiring',
      description: 'Executive-level placements with rigorous assessment and cultural alignment.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: '📊',
      title: 'Research & Consulting',
      description: 'Market insights and strategic advice on talent acquisition and retention.',
      color: 'from-teal-500 to-teal-600'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A4CC] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003366] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#00A4CC]/20 text-[#00A4CC] rounded-full text-sm font-bold mb-4">
            ROCKET OUR EXPERTISE
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#003366] mb-4">
            We Make Customer Delight Happen
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A4CC] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive talent solutions designed for organizations of all sizes
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-gray-200 hover:border-[#00A4CC]"
            >
              {/* Color bar at top */}
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>

              {/* Icon background */}
              <div className={`h-24 bg-gradient-to-br ${service.color} opacity-30 group-hover:opacity-50 transition-all duration-300 flex items-center justify-center`}>
                <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#003366] mb-3 group-hover:text-[#00A4CC] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link href="/#contact" className="inline-flex text-[#00A4CC] font-bold text-sm hover:text-[#003366] transition-colors flex items-center gap-2 group-hover:gap-3">
                  Explore <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>

              {/* Hover effect corner */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#00A4CC] opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-2xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t-2 border-gray-200">
          <p className="text-lg text-gray-700 mb-6">
            Looking for a specific talent solution?
          </p>
          <Link href="/#industry-expertise" className="inline-flex px-8 py-3 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#00A4CC] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}
