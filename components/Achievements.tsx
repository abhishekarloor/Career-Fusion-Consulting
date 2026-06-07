export function Achievements() {
  const achievements = [
    {
      icon: '🏆',
      number: '1000+',
      label: 'Successful Placements'
    },
    {
      icon: '🌍',
      number: '50+',
      label: 'Global Clients'
    },
    {
      icon: '👥',
      number: '15+',
      label: 'Years Experience'
    },
    {
      icon: '⭐',
      number: '98%',
      label: 'Client Satisfaction'
    }
  ]

  const industries = [
    {
      icon: '💻',
      title: 'Technology & Software',
      description: 'Deep expertise in tech talent across all levels'
    },
    {
      icon: '🏦',
      title: 'Banking & Financial Services',
      description: 'Specialized recruitment for finance sector'
    },
    {
      icon: '⚕️',
      title: 'Healthcare & Life Sciences',
      description: 'Medical and pharma industry specialists'
    },
    {
      icon: '🏭',
      title: 'Manufacturing & Engineering',
      description: 'Engineering and manufacturing expertise'
    }
  ]

  return (
    <>
      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#003366] to-[#002544] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Our Track Record</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((item, idx) => (
              <div key={idx} className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
                <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2 text-[#00A4CC]">{item.number}</div>
                <p className="text-blue-50 text-lg font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section id="industry-expertise" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="border-l-4 border-[#00A4CC] pl-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">Industry Expertise</h2>
            <p className="text-lg text-gray-600">Deep vertical expertise across diverse sectors ensuring understanding of specific talent requirements</p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 border border-gray-200 hover:border-[#00A4CC] hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{industry.icon}</div>
                <h3 className="text-xl font-bold text-[#003366] mb-3">{industry.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
