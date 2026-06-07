'use client'

import { useState, useEffect } from 'react'

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const testimonials = [
    {
      quote: "Career Fusion transformed our recruitment process. Their deep industry expertise and personalized approach helped us build a world-class team that drives innovation.",
      author: "Buban Ganguly",
      position: "VP - Human Resources",
      company: "DP World",
      emoji: "🌟"
    },
    {
      quote: "The executive search capabilities are unmatched. They provided candidates with not just technical expertise but cultural fit that elevated our organization.",
      author: "Sarah Johnson",
      position: "Chief People Officer",
      company: "Global Banking Solutions",
      emoji: "💼"
    },
    {
      quote: "Exceptional talent mapping and RPO services. Career Fusion helped us scale our workforce across 15 countries without compromising on quality.",
      author: "Michael Chen",
      position: "Director of Talent",
      company: "Retail MNC Inc.",
      emoji: "🚀"
    },
    {
      quote: "Their focus on diversity and inclusion brought fresh perspectives to our leadership team. Career Fusion doesn't just fill positions; they build better organizations.",
      author: "Priya Sharma",
      position: "Managing Director",
      company: "Manufacturing Excellence Ltd",
      emoji: "🎯"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#003366] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#00A4CC] rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-[#00A4CC]/20 text-[#00A4CC] rounded-full text-sm font-bold mb-4">
            CLIENT TESTIMONIALS
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-[#003366] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00A4CC] to-transparent mx-auto"></div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#003366]/5 to-[#00A4CC]/5 rounded-3xl p-12 md:p-16 border-2 border-[#00A4CC]/20 backdrop-blur-sm">
            {/* Quote Mark */}
            <div className="mb-8">
              <svg className="w-16 h-16 text-[#00A4CC] opacity-20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5S0 3.75 0 5v10c0 1-2 4-6 4s-8.646-4-8-10" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="min-h-48 flex flex-col justify-center">
              <p className="text-2xl md:text-3xl text-[#003366] font-bold leading-relaxed mb-8">
                &quot;{testimonials[current].quote}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#00A4CC] to-[#003366] rounded-full flex items-center justify-center text-white text-3xl">
                  {testimonials[current].emoji}
                </div>
                <div>
                  <p className="font-bold text-lg text-[#003366]">{testimonials[current].author}</p>
                  <p className="text-sm text-gray-600">{testimonials[current].position}</p>
                  <p className="text-xs text-[#00A4CC] font-semibold mt-1">{testimonials[current].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === current
                    ? 'bg-[#00A4CC] w-8'
                    : 'bg-gray-300 hover:bg-[#00A4CC]/50'
                }`}
              />
            ))}
          </div>

          {/* Testimonial Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {testimonials.map((testimonial, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  idx === current
                    ? 'bg-[#00A4CC] text-white shadow-lg'
                    : 'bg-gray-100 text-[#003366] hover:bg-gray-200'
                }`}
              >
                {testimonial.author}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
