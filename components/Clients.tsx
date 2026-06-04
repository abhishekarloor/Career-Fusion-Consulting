export function Clients() {
  const clients = [
    { name: 'DP World', icon: '🌍' },
    { name: 'Tech Giant', icon: '💻' },
    { name: 'Finance Corp', icon: '💰' },
    { name: 'Retail Leader', icon: '🛍️' },
    { name: 'Manufacturing Pro', icon: '🏭' },
    { name: 'Healthcare Plus', icon: '🏥' },
    { name: 'Energy Global', icon: '⚡' },
    { name: 'Logistics Hub', icon: '📦' }
  ]

  return (
    <section className="py-20 md:py-28 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            We Made It Happen For Them
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A4CC] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Trusted by industry leaders and emerging companies globally
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-[#00A4CC] hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer transform hover:scale-105"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {client.icon}
              </div>
              <h3 className="font-bold text-[#003366] group-hover:text-[#00A4CC] transition-colors">
                {client.name}
              </h3>
              <div className="mt-4 w-0 h-1 bg-[#00A4CC] group-hover:w-8 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-16 pt-12 border-t-2 border-gray-200">
          <p className="text-lg text-gray-700 mb-6">
            <span className="font-bold text-[#003366]">100+ client relationships</span> spanning multiple industries and geographies
          </p>
          <button className="px-8 py-3 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#00A4CC] transition-all duration-300 shadow-lg hover:shadow-2xl">
            Become Our Partner
          </button>
        </div>
      </div>
    </section>
  )
}
