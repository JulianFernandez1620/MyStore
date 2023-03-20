import React, { useState } from 'react';
import { Link } from "react-router-dom";


export default function Register(props) {

    const options = [
        { value: "", label: "Seleccione su rol dentro de la plataforma" },
        { value: "vendedor", label: "Vendedor de la plataforma" },
        { value: "comprador", label: "Comprador de la plataforma" }
    ]

    const [formRegister, setFormRegister] = useState({
        nombre: "",
        correo: "",
        contrasena: "",
        tipo: ""
    })

    return (
        <React.Fragment>
            <div>
                <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
                    Welcome to register of MyStore
                </h1>
                <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto'>
                    Registre sus datos
                </p>
            </div>
            <form>
                <div className=''>
                    <input type="text" placeholder='Nombre completo' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600' required></input>
                    <input type="text" placeholder='correo electronico' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600' required></input>
                    <select value={formRegister.tipo} className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600'>
                        {options.map((data) => {
                            if (data.value === "") {
                                return (
                                    <option key={data.label} value={data.value} disabled>
                                        {data.label}
                                    </option>
                                );
                            } else {
                                return (
                                    <option key={data.label} value={data.value}>
                                        {data.label}
                                    </option>
                                );
                            }
                        })}
                    </select>
                    <input type="password" placeholder='Contraseña de usuario' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600' required></input>
                    <input type="password" placeholder='confirme su contraseña' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600' required></input>


                </div>
                <div className=''>
                    <button type='submit' className='py-3 w-64 text-xl text-white bg-purple-700 rounded-2xl hover:bg-purple-500 active:bg-purple-800 outline-none self-center'>
                        Registrar
                    </button>
                    <Link
                        to="/?login"
                        onClick={() => {
                            props.setPage("login");
                        }}
                    >
                        <p>
                            Ya tiene una cuenta existente? <span className='underline cursor-pointer'>Ingresar</span>
                        </p>
                    </Link>
                    
                </div>
            </form>
        </React.Fragment>
    )
}