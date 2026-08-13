"use client"
import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/images/hero.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/10" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
          Transforme seu corpo com Pilates
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Aulas personalizadas, estúdio acolhedor e instrutores certificados.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
            href="#benefits" 
            className="px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105"
          >
            Agende sua aula experimental grátis
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition"
          >
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  )
}
