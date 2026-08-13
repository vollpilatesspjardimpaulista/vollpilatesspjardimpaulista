import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-lg mb-4">DOM PILATES</h4>
            <p className="text-sm text-gray-400">Estúdio de Pilates em São Paulo</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white">Início</a></li>
              <li><a href="#benefits" className="hover:text-white">Por que fazer</a></li>
              <li><a href="#space" className="hover:text-white">Nosso Espaço</a></li>
              <li><a href="#contact" className="hover:text-white">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">
                📷 Instagram
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">
                f Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Dom Pilates Studio. Todos os direitos reservados.
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="mb-4">
            <h5 className="font-semibold text-pink-500 mb-2">#SigoNossoInstagram</h5>
            <img src="/images/gallery1.svg" alt="instagram" className="w-20 h-20 mx-auto rounded-lg" />
          </div>
        </div>
      </div>
    </footer>
  )
}
