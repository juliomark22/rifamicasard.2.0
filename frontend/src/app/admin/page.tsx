'use client';

import { useEffect, useState } from 'react';

interface Stats {
  boletosVendidos: number;
  afiliados: number;
  ventasTotales: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch('/api/admin/stats', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    })
      .then(res => res.json())
      .then(data => setStats(data));
  }, []);

  if (!stats) return <div>Cargando...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard Admin</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Boletos Vendidos</h2>
          <p className="text-2xl">{stats.boletosVendidos}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Afiliados</h2>
          <p className="text-2xl">{stats.afiliados}</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Ventas Totales</h2>
          <p className="text-2xl">${stats.ventasTotales}</p>
        </div>
      </div>
    </div>
  );
}
