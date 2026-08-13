import '../styles/globals.css'
import React from 'react'

export const metadata = {
  title: 'Voll Pilates',
  description: 'Landing page sofisticada de Pilates',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
