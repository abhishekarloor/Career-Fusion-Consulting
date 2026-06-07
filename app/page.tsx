import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { FeaturedJobs } from '@/components/FeaturedJobs'
import { Achievements } from '@/components/Achievements'
import { Testimonials } from '@/components/Testimonials'
import { Clients } from '@/components/Clients'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <FeaturedJobs />
      <Achievements />
      <Testimonials />
      <Clients />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
