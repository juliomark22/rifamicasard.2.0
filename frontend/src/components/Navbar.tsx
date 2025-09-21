import Link from 'next/link'
import { Home, Ticket, Users, Shuffle, LogIn } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors">
              <Ticket className="h-8 w-8" />
              <span className="text-xl font-bold">Rifas Mi Casa RD</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link href="/sorteo" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10">
                <Shuffle className="h-5 w-5" />
                <span className="font-medium">Sorteos</span>
              </Link>
              <Link href="/boletos" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10">
                <Ticket className="h-5 w-5" />
                <span className="font-medium">Boletos</span>
              </Link>
              <Link href="/afiliados" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10">
                <Users className="h-5 w-5" />
                <span className="font-medium">Afiliados</span>
              </Link>
              <Link href="/admin" className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors px-3 py-2 rounded-md hover:bg-white hover:bg-opacity-10">
                <Home className="h-5 w-5" />
                <span className="font-medium">Admin</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/login" className="flex items-center space-x-2 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-lg font-medium transition-colors">
              <LogIn className="h-5 w-5" />
              <span>Iniciar Sesión</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
