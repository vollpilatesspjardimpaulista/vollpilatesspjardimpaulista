import React from 'react'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Section from '../components/Section'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Section id="about" title="Sobre">
          <p>Informações sobre o estúdio e os benefícios do Pilates.</p>
        </Section>
        <Section id="classes" title="Aulas">
          <p>Tipos de aulas, horários e pacotes.</p>
        </Section>
        <Section id="team" title="Equipe">
          <p>Apresentação dos instrutores e suas qualificações.</p>
        </Section>
        <Section id="contact" title="Contato">
          <p>Formulário de contato, telefone e localização.</p>
        </Section>
      </main>
    </>
  )
}
