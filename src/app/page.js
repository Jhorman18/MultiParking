'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { FaQrcode, FaCar, FaCreditCard, FaShieldAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import LoginModal from '@/components/Login/LoginModal';
import RegisterModal from '@/components/Register/RegisterModal';
import { set } from 'react-hook-form';

export default function Home() {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center 
  bg-gradient-to-br from-night via-[#232232] to-morado text-center px-6">
      <Image
        src="/logoMP.png"
        alt="MultiParking Logo"
        width={250}
        height={150}
        className=""
      />
      <h1 className="text-4xl md:text-6xl font-bold text-slateblue mb-4">
        Bienvenido a <span className="text-indigo">MultiParking</span>
      </h1>
      <p className="text-white/70 max-w-2xl mb-8">
        Parqueo inteligente hecho simple. Administra tu espacio, reserva con
        anticipación, ingresa con código QR y paga digitalmente.
      </p>


      <div className='flex justify-center gap-4'>
        <button
          onClick={() => setShowLogin(true)}
          className="cursor-pointer mt-4 bg-slateblue hover:bg-indigo text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition mb-12 shadow-lg shadow-slateblue/20"
        >
          <FaSignInAlt /> Iniciar sesión
        </button>

        <button
          onClick={() => setShowRegister(true)}
          className="cursor-pointer mt-4 bg-raisin border border-indigo/40 hover:bg-indigo/40 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition mb-12 shadow-lg shadow-slateblue/20"
        >
          <FaUserPlus /> Crear Cuenta
        </button>
      </div>

      <div className="mt-4 mb-6 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl">
        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaQrcode />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Ingreso con QR</h3>
          <p className="text-white/70 text-sm">
            Ingresa y sal del parqueadero con códigos QR seguros generados al instante.
          </p>
        </div>

        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaCar />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Monitoreo Vehicular</h3>
          <p className="text-white/70 text-sm">
            Supervisión en tiempo real de todos los vehículos dentro del parqueadero.
          </p>
        </div>

        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaCreditCard />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Pagos Digitales</h3>
          <p className="text-white/70 text-sm">
            Facturación automatizada y procesamiento seguro de pagos digitales.
          </p>
        </div>

        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/40 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaShieldAlt />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Acceso por Roles</h3>
          <p className="text-white/70 text-sm">
            Paneles personalizados para administradores, guardias y Clientes.
          </p>
        </div>
      </div>
      <LoginModal show={showLogin} onClose={() => setShowLogin(false)} />
      <RegisterModal show={showRegister} onClose={() => setShowRegister(false)} onLoginLink={() => { setShowRegister(false); setShowLogin(true); }} />
    </main>
  );
}
