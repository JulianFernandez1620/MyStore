import Header from './../partes/Header';
import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';

const PantallaInicio = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showIngreso, setShowIngreso] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const [productos, setProductos] = useState([""]);

    //setProductos([1,2,3,4])

    const leer_productos = async () => {
        try {
            const response = await axios.get('http://localhost:8888/productos');
            setProductos(response.data.productos);
            console.log(response.data.productos)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        leer_productos();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 20,
        slidesToScroll: 20,
    };

    return (
        <div className="flex flex-row h-screen">
            <aside className="bg-purple-300" style={{ flexBasis: '25%', flexGrow: 0, maxWidth: '25%' }}></aside>
            <main className="bg-white p-4" style={{ flexBasis: '75%', flexGrow: 1, maxWidth: '75%' }}>
                {showIngreso ? (
                    <Ingreso setIsLoggedIn={setIsLoggedIn} setShowIngreso={setShowIngreso} />
                ) : null}
                <div style={{ maxWidth: '100%', height: '100%' }}>
                    <Slider {...settings} style={{ height: '100%', float: 'right' }}>
                        {productos.map((producto) => (
                            <div key={producto.id}>
                                <h2>{producto.nombre}</h2>
                                {producto.ilustracion ? (
                                    <img
                                        src={`data:image/jpeg;base64,${producto.ilustracion}`}
                                        alt={producto.nombre}
                                    />
                                ) : (
                                    <p>Imagen no disponible</p>
                                )}
                                <p>{producto.precio}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </main>
        </div>
    );
};

export default PantallaInicio;