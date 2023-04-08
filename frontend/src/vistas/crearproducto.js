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

        const formData = new FormData();
        formData.append("nombre", producto.nombre);
        formData.append("descripcion", producto.descripcion);
        formData.append("precio", producto.precio);

        const ilustracionBlob = new Blob([producto.ilustracion.slice(0, producto.ilustracion.size)], { type: producto.ilustracion.type });
        const fileReader = new FileReader();
        fileReader.readAsArrayBuffer(ilustracionBlob);

        fileReader.onload = async (event) => {
            const buffer = event.target.result;
            const bytes = new Uint8Array(buffer);
            formData.append("ilustracion", bytes);

            for (const [clave, valor] of formData.entries()) {
                console.log(`${clave}: ${valor}`);
            }

            try {
                await axios.post("http://localhost:8000/producto/", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                alert("Producto creado exitosamente");
            } catch (error) {
                console.error(error);
            }
        };
    };

    return (
        <div>
            <h1>Crear Producto</h1>
            <form onSubmit={handleSubmit}>
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
    );
};

export default CrearProducto;
