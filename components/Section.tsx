import React from 'react'

export default function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="min-h-screen flex items-center" style={{ paddingTop: 96 }}>
      <div className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="prose text-gray-700">{children}</div>
      </div>
    </section>
  )
}
