import { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
const Tendencia = () => {

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

    return(
        <div>
            <aside className="bg-purple-300 " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexBasis: '30%', flexGrow: 0, maxWidth: '30%', backgroundColor: 'rgb(108, 53, 121)', color: 'white', paddingBottom: '50px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', paddingLeft: '30px', paddingBottom: '40px'}}>LLegó el momento de digitalizarte</h1><br></br>
                <a style={{ fontSize: '1.5rem', paddingLeft: '30px'}}>Crea tu tienda online rápido e invierte en tu negocio.</a>
                <div style={{ display: 'flex', justifyContent: 'center' , paddingTop:'20px'}}>
                    <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Crear Tienda
                    </Link>
                </div>
            </aside>
        </div>
    )
}

export default Tendencia;