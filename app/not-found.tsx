import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#eef7fb] px-6 py-12">
      <div className="max-w-xl text-center rounded-3xl border border-slate-200 bg-white p-10 shadow-xl">
        <p className="text-sm uppercase tracking-[0.24em] text-[#00A4CC] mb-3">Page not found</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">404</h1>
        <p className="text-slate-600 mb-8">
          The page you are looking for does not exist. Return to the homepage to continue exploring Career Fusion Consulting.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-full bg-[#00A4CC] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0091B3]">
          Back to Home
        </Link>
      </div>
    </main>
  )
}
