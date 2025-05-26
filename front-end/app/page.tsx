import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
//import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { FeaturedSection } from "@/components/featured-section"
import { Footer } from "@/components/footer"
//import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ServicesSection />
     
      <FeaturedSection />
    
      <Footer />
    </main>
  )
}

