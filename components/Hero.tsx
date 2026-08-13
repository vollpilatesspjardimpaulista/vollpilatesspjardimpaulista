"use client"
import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-4">Transforme seu corpo com Pilates</h1>
            <p className="text-lg text-gray-700 mb-6">Aulas personalizadas, estúdio acolhedor e instrutores certificados.</p>
            <div className="flex gap-4">
              <a href="#classes" className="px-6 py-3 bg-indigo-600 text-white rounded-lg">Agende uma aula</a>
              <a href="#contact" className="px-6 py-3 border border-gray-200 rounded-lg">Fale conosco</a>
            </div>
          </div>
          <div className="h-64 bg-gray-100 rounded-lg" aria-hidden>
            {/* Placeholder para imagem / ilustração */}
          </div>
        </div>
      </div>
    </section>
  )
}
