import React from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h2>
          <div className="w-16 h-1 bg-pink-500 mx-auto" />
        </div>
        <div>{children}</div>
      </div>
    </section>
  )
}
