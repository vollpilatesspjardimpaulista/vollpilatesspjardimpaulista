import React from 'react'

export default function Gallery() {
  const images = [
    { src: '/images/gallery1.svg', title: 'Espaço Principal' },
    { src: '/images/gallery2.svg', title: 'Sala de Aulas' },
    { src: '/images/gallery3.svg', title: 'Equipamentos' },
  ]
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {images.map((img, idx) => (
        <div 
          key={idx} 
          className="rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105"
        >
          <img 
            src={img.src} 
            alt={img.title} 
            className="w-full h-64 object-cover"
          />
          <div className="bg-white p-4">
            <p className="text-sm text-gray-600 text-center">{img.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
