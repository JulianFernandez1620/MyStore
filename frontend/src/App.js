import React, { useState } from 'react';
import CrearUsuario from './components/CrearUsuario';
import LeerUsuario from './components/LeerUsuario';

function App() {
  const [currentPage, setCurrentPage] = useState("leer");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-purple-700 flex justify-center items-center">
      <nav className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
        <button onClick={() => handlePageChange("leer")}>Leer usuarios</button>
        <button onClick={() => handlePageChange("crear")}>Crear usuario</button>
      </nav>
      {currentPage === "leer" ? <LeerUsuario /> : <CrearUsuario />}
    </div>
  );
}

export default App;