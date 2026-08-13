import React from 'react'

const features = [
  { title: 'Melhorar a saúde', text: 'Melhora tônus muscular, flexibilidade e postura.' },
  { title: 'Alívio da dor', text: 'Ajuda no alívio de dores crônicas e postura.' },
  { title: 'Qualidade de vida', text: 'Melhora disposição e bem-estar geral.' },
  { title: 'Desempenho', text: 'Potencializa desempenho em outras atividades.' },
]

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((f, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-2">
          <img 
            src={`/images/gallery${(idx % 3) + 1}.svg`} 
            alt={f.title} 
            className="w-full h-32 object-cover"
          />
          <div className="p-6">
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
