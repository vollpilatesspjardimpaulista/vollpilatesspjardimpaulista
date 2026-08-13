import React from 'react'
import Hero from '../components/Sobre'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import FeatureGrid from '../components/FeatureGrid'
import CTA from '../components/CTA'
import ServicesGrid from '../components/ServicesGrid'
import Gallery from '../components/Gallery'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        
        <Section id="benefits" title="Por que fazer pilates?">
          <p className="text-center text-gray-600 mb-8">O que você busca?</p>
          <FeatureGrid />
        </Section>

        <CTA />

        <Section id="services" title="Além disso, nossas aulas são indicadas para:">
          <ServicesGrid />
        </Section>

        <Section id="space" title="Conheça nosso Espaço">
          <Gallery />
        </Section>

        <Section id="feedbacks" title="Depoimentos de nossos alunos">
          <Testimonials />
        </Section>

        <ContactSection />

        <Footer />
      </main>
    </>
  )
}
