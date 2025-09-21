"use client"

'use client'

import { useState, useEffect } from 'react'
import { Ticket, Search, Filter } from 'lucide-react'

export default function BoletosPage() {
  const [boletos, setBoletos] = useState<Boleto[]>([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    // Aquí cargarías los boletos desde tu API
    fetchBoletos()
  }, [])

  const fetchBoletos = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/boletos`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
        }
      })
      const data = await response.json()
      setBoletos(data)
    } catch (error) {
      console.error('Error cargando boletos:', error)
    }
  }

  const boletosFiltrados = boletos.filter(boleto => 
    boleto.numero.toString().includes(busqueda) ||
    boleto.estado?.toLowerCase().includes(busqueda.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Ticket className="h-10 w-10 text-blue-600" />
          Gestión de Boletos
        </h1>
        <p className="text-xl text-gray-600">Administra todos los boletos de la rifa</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar boleto por número o estado..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filtrar
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {boletosFiltrados.map(boleto => (
            <div key={boleto.id} className={`border-2 rounded-lg p-4 transition-all ${              boleto.estado === 'vendido'                 ? 'border-green-500 bg-green-50'                 : boleto.estado === 'reservado'                ? 'border-yellow-500 bg-yellow-50'                : 'border-gray-300 bg-gray-50'            }`}>
              <div className="text-center">                <div className="text-2xl font-bold text-gray-900 mb-2">#{boleto.numero}</div>                <div className={`text-sm font-medium ${                  boleto.estado === 'vendido' ? 'text-green-700' :                  boleto.estado === 'reservado' ? 'text-yellow-700' :                  'text-gray-700'                }`}>
                  {boleto.estado?.toUpperCase() || 'DISPONIBLE'}
                </div>                {boleto.comprador && (                  <div className="text-xs text-gray-600 mt-2">                    {boleto.comprador}                  </div>                )}              </div>            </div>          ))}        </div>      </div>    </div>  )}

interface Boleto { id: number; numero: number; estado: string; comprador?: string }
