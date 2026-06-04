export function About() {
  const values = [
    {
      title: 'Integrity',
      description: 'Transparent dealings and ethical practices in every interaction.',
      icon: '🤝'
    },
    {
      title: 'Agility',
      description: 'Rapid response times and adaptable sourcing strategies.',
      icon: '⚡'
    },
    {
      title: 'Synergy',
      description: 'Believing that the right "fusion" creates value beyond measure.',
      icon: '👥'
    }
  ]

  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are Section */}
        <div className="mb-20">
          <div className="border-l-4 border-[#00A4CC] pl-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Who We Are</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl p-8 border border-gray-200 mb-6">
                <h3 className="text-2xl font-bold text-[#00A4CC] mb-4">Strategic Fusion</h3>
                <p className="text-gray-600 leading-relaxed">
                  At Career Fusion Consulting, we dont just fill vacancies; we synthesize opportunities. We specialize in the fusion of top-tier talent with forward-thinking organizations, ensuring a perfect cultural and professional fit.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-[#00A4CC] mb-4">Industry Prowess</h3>
                <p className="text-gray-600 leading-relaxed">
                  With years of collective experience across recruitment, executive search, and HR consulting, our team brings deep domain expertise to help businesses scale with the right human infrastructure.
                </p>
              </div>
            </div>

            {/* Vision & Mission */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200 mb-6">
                <h3 className="text-2xl font-bold text-[#003366] mb-4 flex items-center gap-2">
                  <span>🎯</span> Our Vision & Mission
                </h3>
                <p className="text-gray-700 font-semibold text-lg leading-relaxed">
                  To be the best most trusted talent catalyst, creating seamless connections that drive global organizational excellence and individual career growth.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-[#003366] mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00A4CC] text-xl font-bold">✓</span>
                    <span className="text-gray-600">Deep Industry Expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00A4CC] text-xl font-bold">✓</span>
                    <span className="text-gray-600">Global Talent Network</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00A4CC] text-xl font-bold">✓</span>
                    <span className="text-gray-600">Strategic Matching Process</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00A4CC] text-xl font-bold">✓</span>
                    <span className="text-gray-600">Post-Placement Support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* The Fusion Foundation */}
        <div>
          <div className="border-l-4 border-[#00A4CC] pl-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">The Fusion Foundation</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#00A4CC] hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-2xl font-bold text-[#003366] mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
