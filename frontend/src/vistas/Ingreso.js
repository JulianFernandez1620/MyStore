import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Ingreso = ({ setIsLoggedIn, setShowIngreso }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (response.ok) {
            setIsLoggedIn(true);
            setShowIngreso(false);
            navigate('/');
        } else {
            console.log(data.error);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Ingreso</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-400 p-2"
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 p-2"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                    Ingresar
                </button>
            </form>
            <p className="mt-4">
                ¿Aún no tienes una cuenta?{' '}
                <Link to="/registro" className="text-blue-500">
                    Regístrate aquí
                </Link>
            </p>
        </div>
    );
};

export default Ingreso;