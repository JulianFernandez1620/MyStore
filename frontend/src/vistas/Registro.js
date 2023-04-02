import React from 'react';

const Registro = () => {
    return (
        <div className="bg-purple-700 flex flex-col h-screen">
            <div className="flex justify-between items-center py-5 px-10">
                <div className="text-white font-bold text-lg">Logo</div>
                <div className="flex items-center space-x-4">
                    <button className="text-white font-medium hover:text-gray-300">
                        Iniciar sesión
                    </button>
                    <button className="bg-white text-purple-700 font-medium px-5 py-2 rounded-lg hover:bg-gray-100">
                        Registrarse
                    </button>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center">
                <form className="bg-white rounded-lg p-10">
                    <div className="text-2xl font-bold text-gray-700 mb-5">Registrarse</div>
                    <div className="mb-5">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="border border-gray-400 py-2 px-3 rounded-lg w-full focus:outline-none focus:ring focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="border border-gray-400 py-2 px-3 rounded-lg w-full focus:outline-none focus:ring focus:border-purple-500"
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="border border-gray-400 py-2 px-3 rounded-lg w-full focus:outline-none focus:ring focus:border-purple-500"
                            required
                        />
                    </div>
                    <button className="bg-purple-700 text-white font-medium py-2 px-5 rounded-lg hover:bg-purple-800">
                        Registrarse
                    </button>
                </form>
            </div>
            <div className="bg-white h-96"></div>
        </div>
    );
};

export default Registro;
