export function FeaturedJobs() {
  const steps = [
    {
      number: 1,
      title: 'Intake',
      description: 'Deep dive into your talent needs and culture',
      icon: '📋'
    },
    {
      number: 2,
      title: 'Sourcing',
      description: 'Identify best-fit candidates from our network',
      icon: '🔍'
    },
    {
      number: 3,
      title: 'Screening',
      description: 'Thorough evaluation and preliminary assessment',
      icon: '✅'
    },
    {
      number: 4,
      title: 'Selection',
      description: 'Final interviews and offer preparation',
      icon: '👤'
    },
    {
      number: 5,
      title: 'Delivery',
      description: 'Onboarding support and placement success',
      icon: '🎯'
    }
  ]

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-[#f0f9fc] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-l-4 border-[#00A4CC] pl-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">The Fusion Search Process</h2>
          <p className="text-lg text-gray-600">Our proven 5-step methodology ensures perfect talent-organization alignment</p>
        </div>

        <div className="relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#00A4CC] to-transparent"></div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="relative bg-white rounded-xl p-6 border-2 border-[#00A4CC] hover:shadow-xl transition-all duration-300 text-center group"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-[#00A4CC] text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#003366] mb-2">{step.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6">
            Ready to find your perfect talent match? Let's start the fusion process.
          </p>
          <button className="inline-block bg-[#003366] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#002244] transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
