import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { FeaturedJobs } from '@/components/FeaturedJobs'
import { Achievements } from '@/components/Achievements'
import { Stats } from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'
import { Clients } from '@/components/Clients'
import { About } from '@/components/About'
import { ThoughtCentre } from '@/components/ThoughtCentre'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <FeaturedJobs />
      <Stats />
      <Achievements />
      <Testimonials />
      <Clients />
      <About />
      <ThoughtCentre />
      <Contact />
      <Footer />
    </main>
  )
}
