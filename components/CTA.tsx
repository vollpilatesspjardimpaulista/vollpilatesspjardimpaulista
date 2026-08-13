import React from 'react'

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-pink-100 py-12 my-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">Clique no botão ao lado e agende sua aula experimental grátis</h3>
          <p className="text-sm text-gray-700">Primeira aula sem compromisso</p>
        </div>
        <a 
          href="#contact" 
          className="px-8 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg transition whitespace-nowrap"
        >
          Agende seu horário
        </a>
      </div>
    </section>
  )
}
