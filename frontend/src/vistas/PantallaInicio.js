import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import axios from 'axios';
import './../Estilos/Galeria.css';
import { Link } from 'react-router-dom';

const PantallaInicio = () => {
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
            <aside className="bg-purple-300" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexBasis: '30%', flexGrow: 0, maxWidth: '30%', backgroundColor: 'rgb(108, 53, 121)', color: 'white' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>LLegó el momento de digitalizarte</h1><br></br><br></br>
                <a style={{ fontSize: '1.5rem' }}>Crea tu tienda online rápido e invierte en tu negocio.</a><br></br>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crear Tienda
                    </Link>
                </div>
            </aside>

            <main className="bg-white p-4" style={{ flexBasis: '70%', flexGrow: 1, maxWidth: '70%' }}>
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