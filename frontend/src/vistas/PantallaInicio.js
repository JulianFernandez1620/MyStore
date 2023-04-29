import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import axios from 'axios';
import './../Estilos/Galeria.css';

const PantallaInicio = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showIngreso, setShowIngreso] = useState(false);
    const [productos, setProductos] = useState([]);

    const obtener_productos = async () => {
        try {
            const response = await axios.get('http://localhost:8888/productos');
            setProductos(response.data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        obtener_productos();
    }, []);

    const handleClick = (producto) => {
        // Aquí puedes mostrar una vista previa a pantalla completa de la imagen del producto
    };

    return (
        <div className="flex flex-row h-screen">
            <aside className="bg-purple-300" style={{ flexBasis: '25%', flexGrow: 0, maxWidth: '25%' }}></aside>
            <main className="bg-white p-4" style={{ flexBasis: '75%', flexGrow: 1, maxWidth: '75%' }}>
                {showIngreso ? (
                    <Ingreso setIsLoggedIn={setIsLoggedIn} setShowIngreso={setShowIngreso} />
                ) : null}
                <div className="galeria">
                    {productos && productos.length > 0 ? (
                        productos.map((producto) => (
                            <div key={producto.id} className="producto" onClick={() => handleClick(producto)}>
                                <img className="imagen" src={`data:image/jpeg;base64,${producto.ilustracion}`} alt="imagen del producto" style={{ width: '70%', height: '70%' }} />
                                <h2 className="nombre">{producto.nombre}</h2>
                                <p className="precio">{producto.precio}</p>
                            </div>
                        ))
                    ) : (
                        <p>Cargando productos...</p>
                    )}
                </div>
            </main>
        </div>
    );
};

export default PantallaInicio;