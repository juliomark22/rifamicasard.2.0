"use client";

import React from "react";

export default function SorteoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-4">Página de Sorteo</h1>
        <p className="text-gray-600 mb-6">
          Aquí irá la lógica para ejecutar el sorteo y mostrar resultados.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Ejecutar Sorteo
        </button>
      </div>
    </div>
  );
}
