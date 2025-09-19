import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-400 text-sm mt-10">
                <div className="flex flex-col md:flex-row m-6 md:m-12 justify-center gap-8 md:gap-20 lg:gap-32 xl:gap-42">
                    {/* Brand and description */}
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h2 className="text-lg font-semibold text-purple-400 mb-2">MultiParking</h2>
                        <p>
                            Sistema revolucionario de gestión de parqueaderos<br />
                            privados
                        </p>
                    </div>
                    {/* Contact */}
                    <div className="mb-8 md:mb-0 text-center md:text-left">
                        <h3 className="text-base font-bold text-gray-100 mb-2">Contacto</h3>
                        <p>Email: <a href="mailto:soporte@multiparking.co" className="hover:underline text-gray-200">soporte@multiparking.co</a></p>
                        <p>Teléfono: <a href="tel:+5712345678" className="hover:underline text-gray-200">+57 12345678</a></p>
                        <p>Bogotá, Colombia</p>
                    </div>
                    {/* Legal */}
                    <div className="text-center md:text-left">
                        <h3 className="text-base font-bold text-gray-100 mb-2">Legal</h3>
                        <ul>
                            <li>
                                <a href="#" className="text-purple-400 hover:underline">Política de Privacidad</a>
                                <span className="mx-1 text-gray-400">{' '}</span>
                                <a href="#" className="text-purple-400 hover:underline">Términos de Servicio</a>
                            </li>
                            <li>
                                <a href="#" className="text-purple-400 hover:underline">Protección de Datos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Divider */}
                <div className="my-8 border-t border-gray-700"></div>
                {/* Copyright */}
                <div className="text-center text-gray-400 pb-4">
                    &copy; {new Date().getFullYear()} MultiParking. Todos los derechos reservados.
                </div>
            </footer>
        </div>
    );
};

export default Footer;