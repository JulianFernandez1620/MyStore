import Header from './../partes/Header';
import React, { useState, useEffect } from 'react';
import Ingreso from './../vistas/Ingreso';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PantallaInicio = ({ isLoggedIn, setIsLoggedIn }) => {
    // Esta parte se encarga de recibir si esta logeado o no
    const [showIngreso, setShowIngreso] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    // Esta parte se encarga de recibir si esta logeado o no

    // Está parte se encarga de lo necesario para el carrusel

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

    // Está parte se encarga de lo necesario para el carrusel

    return (
        <div className="flex flex-col h-screen">
            <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} setShowIngreso={setShowIngreso} />
            {/* Main */}
            <main className="flex-grow bg-white">
                {showIngreso ? <Ingreso setIsLoggedIn={setIsLoggedIn} setShowIngreso={setShowIngreso} /> : null}
                <Slider {...settings}>
                    {productos.map((producto) =>(
                        <div key={producto.id}>
                            <h2>{producto.nombre}</h2>
                            <img src={producto.ilustracion} alt={producto.nombre} />
                            <p>{producto.precio}</p>
                        </div>
                    ))}
                </Slider>
            </main>
            {/* Aside */}
            <aside className="h-full w-1/4 bg-purple-300"></aside>
        </div>
    );
};

export default PantallaInicio;