import Header from './../partes/Header';
import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PantallaInicio = ({ isLoggedIn, setIsLoggedIn }) => {
    const [showIngreso, setShowIngreso] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/productos')
            .then((response) => response.json())
            .then((data) => setProductos(data));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    };

    return (
        <div className="flex flex-col h-screen">
            <main className="flex-grow bg-white " style={{ position: "relative" }}>
                {/* {showIngreso ? (
                    <Ingreso setIsLoggedIn={setIsLoggedIn} setShowIngreso={setShowIngreso} />
                ) : null}
                <div style={{ width: '60%', height: '60%' }}>
                    <Slider {...settings} style={{ height: '60%' }}>
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
                </div> */}
            </main>
            <aside className="h-full w-1/4 bg-purple-300"></aside>
        </div>
    );
};

export default PantallaInicio;