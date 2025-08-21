import { FaQrcode, FaCar, FaCreditCard, FaShieldAlt, FaSignInAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-night to-eerie text-center px-6">
      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-bold text-slateblue mb-4">
        Bienvenido a <span className="text-indigo">MultiParking</span>
      </h1>
      <p className="text-white/70 max-w-2xl mb-8">
        Parqueo inteligente hecho simple. Administra tu espacio, reserva con
        anticipación, ingresa con código QR y paga digitalmente.
      </p>

      {/* Botón de Login */}
      <a
        href="/login"
        className="mt-8 bg-slateblue hover:bg-indigo text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition mb-12 shadow-lg shadow-slateblue/20"
      >
        <FaSignInAlt /> Iniciar sesión
      </a>

      {/* Funcionalidades */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl">
        {/* QR Entry */}
        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaQrcode />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Ingreso con QR</h3>
          <p className="text-white/70 text-sm">
            Ingresa y sal del parqueadero con códigos QR seguros generados al instante.
          </p>
        </div>

        {/* Vehicle Tracking */}
        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaCar />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Monitoreo Vehicular</h3>
          <p className="text-white/70 text-sm">
            Supervisión en tiempo real de todos los vehículos dentro del parqueadero.
          </p>
        </div>

        {/* Digital Payments */}
        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaCreditCard />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Pagos Digitales</h3>
          <p className="text-white/70 text-sm">
            Facturación automatizada y procesamiento seguro de pagos digitales.
          </p>
        </div>

        {/* Role-Based Access */}
        <div className="bg-raisin/80 rounded-xl p-6 shadow-md hover:shadow-xl hover:shadow-slateblue/20 transition border border-eerie">
          <div className="flex justify-center text-slateblue text-3xl mb-3">
            <FaShieldAlt />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Acceso por Roles</h3>
          <p className="text-white/70 text-sm">
            Paneles personalizados para administradores, guardias y residentes.
          </p>
        </div>
      </div>
    </main>
  );
}
