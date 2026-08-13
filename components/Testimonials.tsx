import React from 'react'

const testimonials = [
  { 
    name: 'Ana Silva',
    text: 'Melhorei muito minha postura e alívio das dores nas costas. Recomendo muito!',
    image: '/images/gallery1.svg'
  },
  { 
    name: 'Carlos Santos',
    text: 'Instrutores muito atenciosos e ambiente acolhedor. Voltei a me sentir bem!',
    image: '/images/gallery2.svg'
  },
  { 
    name: 'Marina Costa',
    text: 'Primeiro estúdio que consigo acompanhar e fazer a diferença. Muito feliz!',
    image: '/images/gallery3.svg'
  },
]

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, idx) => (
        <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
          <div className="flex gap-4 mb-4">
            <img 
              src={t.image} 
              alt={t.name} 
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-xs text-pink-500">★★★★★</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 italic">"{t.text}"</p>
        </div>
      ))}
    </div>
  )
}
