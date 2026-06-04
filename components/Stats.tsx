export function Stats() {
  const stats = [
    {
      icon: '🎯',
      number: '1000+',
      label: 'Successful Placements',
      description: 'Transforming careers across industries'
    },
    {
      icon: '🌍',
      number: '50+',
      label: 'Global Clients',
      description: 'Trusted by Fortune 500 companies'
    },
    {
      icon: '👥',
      number: '5M+',
      label: 'Candidate Database',
      description: 'Extensive talent network'
    },
    {
      icon: '⭐',
      number: '98%',
      label: 'Client Satisfaction',
      description: 'Excellence in every engagement'
    },
    {
      icon: '🏆',
      number: '15+',
      label: 'Years of Excellence',
      description: 'Proven track record'
    },
    {
      icon: '💼',
      number: '1000+',
      label: 'CXOs Placed',
      description: 'Leadership hiring expertise'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#003366] to-[#001f3f] text-white overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A4CC] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00A4CC] rounded-full mix-blend-multiply filter blur-3xl opacity-10" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Track Record</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A4CC] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-white/75 max-w-3xl mx-auto">
            Proven expertise and measurable impact across industries and geographies
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:border-[#00A4CC] hover:bg-white/15 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00A4CC]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <h3 className="text-4xl font-bold text-[#00A4CC] mb-2">{stat.number}</h3>
                <p className="text-xl font-semibold text-white mb-2">{stat.label}</p>
                <p className="text-white/70 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-lg text-white/80 mb-6">
            Ready to become part of our success story?
          </p>
          <button className="px-8 py-3 bg-[#00A4CC] text-[#003366] font-bold rounded-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}
