import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Fale Conosco</h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center text-2xl">
              💬
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-sm text-gray-600 mb-4">Agende seu horário direto no chat</p>
            <a href="https://wa.me/5511999999999" className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg">
              Abrir WhatsApp
            </a>
          </div>

          <div className="bg-white rounded-lg p-8 text-center shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              ☎️
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">Telefone</h3>
            <p className="text-sm text-gray-600 mb-4">(11) 9999-9999</p>
            <a href="tel:+551199999999" className="inline-block px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-50">
              Ligar Agora
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Localização</h3>
          <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Mapa (insira um iframe do Google Maps aqui)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
