"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* 🔹 Navbar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold">🏠 RifaMiCasaRD</h1>
          <div className="space-x-6 font-medium">
            <Link href="/">Inicio</Link>
            <Link href="/raffles">Sorteos</Link>
            <Link href="/boletos">Boletos</Link>
            <Link href="/affiliates">Afiliados</Link>
            <Link href="/support">Soporte</Link>
            <Link href="/login" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500">
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </nav>

      {/* 🔹 Hero principal */}
      <section
        className="h-screen flex items-center justify-center bg-cover bg-center relative"
        style={{ backgroundImage: "url('/hero-house.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-center text-white px-6"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            ¡Gana tu casa por solo{" "}
            <span className="text-yellow-400">RD$300!</span>
          </h2>
          <p className="text-lg md:text-2xl mb-8">
            Apartamento valorado en RD$4,000,000
          </p>
          <div className="flex justify-center gap-6 text-yellow-300 text-lg font-semibold mb-6">
            <span>60 Días</span>
            <span>23 Horas</span>
            <span>59 Min</span>
            <span>47 Seg</span>
          </div>
          <Link
            href="/boletos"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-500 transition"
          >
            Comprar Boleto
          </Link>
        </motion.div>
      </section>

      {/* 🔹 Cómo funciona */}
      <section className="py-20 bg-white">
        <h3 className="text-3xl font-bold text-center mb-12">Cómo funciona</h3>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          {[
            { icon: "🎫", title: "Compra tu boleto", text: "Por solo RD$300 participas automáticamente." },
            { icon: "📜", title: "Verifica", text: "Tu boleto queda registrado y validado ante notario." },
            { icon: "🏡", title: "Gana", text: "Si eres el afortunado, te llevas tu apartamento." },
          ].map((step, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 p-8 rounded-xl shadow-lg text-center"
            >
              <div className="text-5xl mb-4">{step.icon}</div>
              <h4 className="text-xl font-bold mb-2">{step.title}</h4>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div>
            <h5 className="font-bold text-lg mb-4">🏠 Rifa Mi Casa RD</h5>
            <p>
              Participa en rifas legales y transparentes con notario público. 
              ¡Tu sueño de tener casa propia ahora es posible!
            </p>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Enlaces Rápidos</h5>
            <ul className="space-y-2">
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/raffles">Rifas Activas</Link></li>
              <li><Link href="/boletos">Comprar Boleto</Link></li>
              <li><Link href="/support">Soporte</Link></li>
              <li><Link href="/affiliates">Afiliados</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold text-lg mb-4">Contacto</h5>
            <p>Email: soporte@rifamicasard.com</p>
            <p>Tel: +1 (809) 000-0000</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
