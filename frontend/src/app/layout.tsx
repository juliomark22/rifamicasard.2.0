import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rifas Mi Casa RD - Sorteos de Casa',
  description: 'Participa en nuestros sorteos de casas. Compra boletos, gana premios, cambia tu vida.',
  keywords: 'rifas, casa, sorteo, premios, boleto, ganar, vivienda',
  openGraph: {
    title: 'Rifas Mi Casa RD',
    description: 'Sorteos de casas en República Dominicana',
    type: 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>&copy; 2025 Rifas Mi Casa RD. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
