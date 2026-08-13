"use client"
import React, { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'classes', label: 'Aulas' },
  { id: 'contact', label: 'Contato' },
]

export default function Navbar() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navItems.map(i => document.getElementById(i.id))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { root: null, threshold: 0.6 }
    )

    sections.forEach(s => s && observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-bold text-lg">Voll Pilates</div>
        <ul className="flex gap-6">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.id === 'home' ? '#' : `#${item.id}`}
                className={`hover:opacity-80 ${active === item.id ? 'text-indigo-600 font-semibold' : 'text-gray-700'}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
