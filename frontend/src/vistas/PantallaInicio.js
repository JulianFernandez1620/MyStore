import Header from './../partes/Header';
import React, { useState } from 'react';
import Ingreso from './../vistas/Ingreso';

const PantallaInicio = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showIngreso, setShowIngreso] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} setShowIngreso={setShowIngreso} />
            {/* Main */}
            <main className="flex-grow bg-white">{showIngreso ? <Ingreso setIsLoggedIn={setIsLoggedIn} setShowIngreso={setShowIngreso} /> : null}</main>
            {/* Aside */}
            <aside className="h-full w-1/4 bg-purple-300"></aside>
        </div>
    );
};

export default PantallaInicio;