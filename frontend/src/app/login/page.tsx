'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { LogIn, User, Lock } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setCargando(true)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })

      const data = await response.json()
      
      if (response.ok) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        router.push('/dashboard')
      } else {
        alert(data.message || 'Error al iniciar sesión')
      }
    } catch {
      alert('Error de conexión')
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">        <div className="text-center mb-8">          <div className="flex justify-center mb-4">            <div className="bg-blue-600 text-white p-3 rounded-full">              <LogIn className="h-8 w-8" />            </div>          </div>          <h1 className="text-3xl font-bold text-gray-900 mb-2">Iniciar Sesión</h1>          <p className="text-gray-600">Accede a tu cuenta de Rifas Mi Casa RD</p>        </div>        <div className="bg-white rounded-lg shadow-lg p-8">          <form onSubmit={handleLogin} className="space-y-6">            <div>              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">                Correo Electrónico              </label>              <div className="relative">                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">                  <User className="h-5 w-5 text-gray-400" />                </div>                <input                  id="email"                  type="email"                  value={email}                  onChange={(e) => setEmail(e.target.value)}                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"                  placeholder="tu@email.com"                  required                />              </div>            </div>            <div>              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">                Contraseña              </label>              <div className="relative">                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">                  <Lock className="h-5 w-5 text-gray-400" />                </div>                <input                  id="password"                  type="password"                  value={password}                  onChange={(e) => setPassword(e.target.value)}                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"                  placeholder="••••••••"                  required                />              </div>            </div>            <button              type="submit"              disabled={cargando}              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-3"            >              {cargando ? (                <>                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>                  Iniciando Sesión...                </>              ) : (                <>                  <LogIn className="h-5 w-5" />                  Iniciar Sesión                </>              )}            </button>          </form>          <div className="mt-6 text-center">            <p className="text-sm text-gray-600">              ¿No tienes una cuenta?{' '}              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">                Regístrate aquí              </a>            </p>          </div>        </div>      </div>    </div>  )}
