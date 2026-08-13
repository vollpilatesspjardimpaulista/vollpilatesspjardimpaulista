import React from 'react'

const services = [
  { title: 'Reabilitação', desc: 'Programas de recuperação personalizada' },
  { title: 'Idosos', desc: 'Melhora mobilidade, flexibilidade e equilíbrio' },
  { title: 'Gestantes', desc: 'Preparação e recuperação no pós-parto' },
  { title: 'Dores Crônicas', desc: 'Alívio e fortalecimento muscular profundo' },
]

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s, idx) => (
        <div key={idx} className="bg-pink-50 rounded-lg p-6 text-center hover:bg-pink-100 transition">
          <div className="w-12 h-12 rounded-full bg-pink-200 mx-auto mb-4 flex items-center justify-center text-pink-600 font-bold">
            {idx + 1}
          </div>
          <h4 className="font-semibold text-gray-900 mb-2">{s.title}</h4>
          <p className="text-sm text-gray-700">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
