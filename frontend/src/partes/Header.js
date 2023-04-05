import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, handleLogout, setShowIngreso }) => {
    return (
        <header className="flex justify-between items-center p-4 bg-purple-500">
            <div className="flex items-center gap-4">
                <h1 className="text-xl font-bold">Mi aplicación</h1>
                <nav className="flex gap-4 items-end">
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="text-blue-500">
                            Cerrar sesión
                        </button>
                    ) : (
                        <button onClick={() => setShowIngreso(true)} className="text-blue-500">
                            Ingresar
                        </button>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;