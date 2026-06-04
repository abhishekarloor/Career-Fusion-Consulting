export function ThoughtCentre() {
  const sections = [
    {
      title: 'News',
      description: 'The news, the views, the updates, the press releases, the media coverage, everything.',
      color: 'from-blue-500 to-blue-600',
      icon: '📰',
      link: 'View All'
    },
    {
      title: 'Resources',
      description: 'The blogs, the case studies, the whitepapers. Find all the articles and infographics.',
      color: 'from-purple-500 to-purple-600',
      icon: '📚',
      link: 'View All'
    },
    {
      title: 'Reports',
      description: 'The numbers, the reports, the statistics. Gain insights into industry trends.',
      color: 'from-green-500 to-green-600',
      icon: '📊',
      link: 'View All'
    }
  ]

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A4CC] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#003366] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4">
            Thought Centre
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A4CC] to-transparent mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Industry insights, trends, and expert perspectives
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              {/* Image/Placeholder */}
              <div className={`h-64 bg-gradient-to-br ${section.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300"></div>
                <span className="text-7xl opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                  {section.icon}
                </span>
              </div>

              {/* Content */}
              <div className="p-8 bg-white border-2 border-gray-200 group-hover:border-[#00A4CC] transition-colors duration-300">
                <h3 className="text-2xl font-bold text-[#003366] mb-3">{section.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {section.description}
                </p>
                <button className="text-[#00A4CC] font-bold hover:text-[#003366] transition-colors duration-300 flex items-center gap-2">
                  {section.link}
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <article className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00A4CC] hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-[#00A4CC]/20 text-[#00A4CC] text-xs font-bold rounded-full">NEWS</span>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            <h4 className="font-bold text-[#003366] mb-2 group-hover:text-[#00A4CC] transition-colors">
              Career Fusion Wins Industry Excellence Award
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Recognized for innovation in recruitment and talent management
            </p>
            <a href="#" className="text-[#00A4CC] text-sm font-bold hover:underline">
              Read more →
            </a>
          </article>

          <article className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00A4CC] hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 text-xs font-bold rounded-full">RESOURCE</span>
              <span className="text-gray-500 text-sm">1 week ago</span>
            </div>
            <h4 className="font-bold text-[#003366] mb-2 group-hover:text-[#00A4CC] transition-colors">
              The Future of Talent Acquisition: 2024 Report
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Comprehensive analysis of emerging trends in recruitment
            </p>
            <a href="#" className="text-[#00A4CC] text-sm font-bold hover:underline">
              Download →
            </a>
          </article>

          <article className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#00A4CC] hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-bold rounded-full">REPORT</span>
              <span className="text-gray-500 text-sm">3 weeks ago</span>
            </div>
            <h4 className="font-bold text-[#003366] mb-2 group-hover:text-[#00A4CC] transition-colors">
              Global Talent Market Insights Q4 2024
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              Market data and statistics on hiring trends worldwide
            </p>
            <a href="#" className="text-[#00A4CC] text-sm font-bold hover:underline">
              View Report →
            </a>
          </article>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t-2 border-gray-200">
          <button className="px-8 py-3 bg-[#003366] text-white font-bold rounded-lg hover:bg-[#00A4CC] transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105">
            Explore Thought Centre
          </button>
        </div>
      </div>
    </section>
  )
}
