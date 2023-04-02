import React from 'react';
import './../index.css';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiUser } from 'react-icons/fi';


const PantallaInicio = () => {
    return (
        <div className="flex flex-col h-screen">
            {/* Header */}
            <header className="flex items-center justify-between bg-purple-700 text-white py-5 px-10">
                <div className="font-bold text-lg">Logo</div>
                <Link to="/ingreso" className="flex items-center text-white font-medium hover:text-purple-300">
                    <FiUser className="mr-2" /> Ingreso
                </Link>
            </header>

            {/* Main */}
            <main className="flex-grow bg-white"></main>

            {/* Aside */}
            <aside className="h-full w-1/4 bg-purple-300"></aside>

            {/* Footer */}
            <footer className="flex items-center justify-between bg-purple-700 text-white py-5 px-10">
                <div>© 2023 My E-commerce</div>
                <div className="flex space-x-4">
                    <a href="www.facebook.com" className="text-white hover:text-gray-300">
                        <FiFacebook />
                    </a>
                    <a href="www.instagram.com" className="text-white hover:text-gray-300">
                        <FiInstagram />
                    </a>
                    <a href="www.twitter.com" className="text-white hover:text-gray-300">
                        <FiTwitter />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default PantallaInicio;