"use client"
import React, { useEffect, useState } from 'react'

const navItems = [
  { id: 'home', label: 'Início' },
  { id: 'benefits', label: 'Por que fazer' },
  { id: 'space', label: 'Nosso Espaço' },
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
      { root: null, threshold: 0.4 }
    )

    sections.forEach(s => s && observer.observe(s))

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-center">
        <ul className="flex gap-8 bg-white/25 backdrop-blur-md rounded-full px-8 py-3 items-center shadow-lg border border-white/30">
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.id === 'home' ? '#' : `#${item.id}`}
                className={`text-sm font-semibold transition-colors ${
                  active === item.id 
                    ? 'text-pink-500' 
                    : 'text-white hover:text-white/80'
                }`}
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
