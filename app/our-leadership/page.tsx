import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function OurLeadership() {
  return (
    <main className="min-h-screen bg-[#eef7fb] text-slate-900">
      <Header />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[#00A4CC] mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Our Leadership
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-600 leading-8">
            Meet the experienced leaders who guide Career Fusion’s strategy, culture, and client success.
          </p>
        </div>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          {[
            {
              name: 'Madhushree A R',
              title: 'Director',
              image: './images/madhushree-ar.jpg',
              qualification: 'BCom, MBA',
              contact: '8904491648',
              description: 'Madhushree leads the strategic direction and client engagement for Career Fusion, bringing strong leadership and business expertise to every partnership.',
            },
            {
              name: 'Karthik A R',
              title: 'Co-Director',
              image: './images/karthik-ar.jpg',
              qualification: 'BSc, MBA',
              contact: '9663479949',
              description: 'Karthik oversees operations and talent strategy, ensuring smooth delivery and high-value outcomes for our clients and candidates.',
            },
          ].map((leader) => (
            <article key={leader.name} className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
              <img
                src={`./images/${leader.image}`}
                alt={leader.name}
                className="h-80 md:h-[420px] w-full object-cover object-top"
              />
              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.28em] text-[#00A4CC] mb-3">{leader.title}</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-2">{leader.name}</h2>
                <p className="text-sm text-slate-500 tracking-[0.18em] mb-4">{leader.qualification}</p>
                <p className="text-slate-600 leading-8 mb-4">{leader.description}</p>
                <p className="text-sm font-semibold text-slate-700">Contact: <span className="text-[#003366]">{leader.contact}</span></p>
              </div>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">Visionary leadership</h2>
            <p className="text-slate-600 leading-7">
              Our founders lead with a shared commitment to strategic thinking, strong client relationships, and market-driven hiring solutions.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-3">People-first culture</h2>
            <p className="text-slate-600 leading-7">
              They build a culture where candidates and clients feel supported, respected, and empowered to grow together.
            </p>
          </div>
        </section>

        <div className="mt-16 rounded-3xl border border-slate-200 bg-[#f7fcff] p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Learn more about Career Fusion</h2>
              <p className="mt-2 text-slate-600 leading-7">
                Discover how our team blends recruitment expertise and consulting experience for long-term client success.
              </p>
            </div>
            <Link href="/" className="inline-flex items-center rounded-full bg-[#00A4CC] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0091B3] transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
