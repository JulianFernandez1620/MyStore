import React, { useState } from "react";
import axios from "axios";

const CrearProducto = () => {
    const [producto, setProducto] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        ilustracion: null,
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value =
            event.target.type === "file" ? event.target.files[0] : event.target.value;

        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

    const ilustracionBlob = new Blob([producto.ilustracion.slice(0, producto.ilustracion.size)], { type: producto.ilustracion.type });
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(ilustracionBlob);
        let data;

        fileReader.onload = async (event) => {
            const buffer = event.target.result;
            const bytes = new Uint8Array(buffer);
            const data = {
                nombre: producto.nombre,
                descripcion: producto.descripcion,
                precio: producto.precio,
                ilustracion: Array.from(bytes),
                ilustracion_type: producto.ilustracion.type
            };
        };

            try {
                await axios.post("http://localhost:8888/producto/", data);
                alert("Producto creado exitosamente");
            } catch (error) {
                console.error(error);
            }
        };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100" >
            <div className="bg-white border rounded-lg shadow-lg p-25 max-w-xs w-full">
                <h1 className="text-2xl font-bold mb-6 justify-center">Crear Producto</h1>
                <form onSubmit={handleSubmit} className="bg-purple-300 space-y-6">
                    <label>
                        Nombre:
                        <input
                            type="text"
                            name="nombre"
                            value={producto.nombre}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Descripción:
                        <textarea
                            name="descripcion"
                            value={producto.descripcion}
                            onChange={handleChange}
                        ></textarea>
                    </label>
                    <label>
                        Precio:
                        <input
                            type="number"
                            name="precio"
                            value={producto.precio}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Ilustración:
                        <input type="file" name="ilustracion" onChange={handleChange} />
                    </label>
                    <button type="submit">Crear Producto</button>
                </form>
            </div>
        </div>
    );
};

export default CrearProducto;