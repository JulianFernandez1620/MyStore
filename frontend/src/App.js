import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PantallaInicio from './vistas/PantallaInicio';
import Ingreso from './vistas/Ingreso';
import Registro from './vistas/Registro';
import CambiarClave from './vistas/CambiarClave';
import React, { useState } from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path="/ingreso" element={<Ingreso setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/registro" element={<Registro isLoggedIn={isLoggedIn} />} />
                <Route path="/cambiarClave" element={<CambiarClave isLoggedIn={isLoggedIn} />} />
                <Route path="/*" element={<PantallaInicio isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        </Router>
    );
}

export default App;