import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Ingreso = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [errorMsg, setErrorMsg] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:8000/login', data);
            if (response.data.id) {
                setLoggedIn(true);
            } else {
                setErrorMsg(response.data.message);
            }
        } catch (error) {
            setErrorMsg('Ocurrió un error al realizar el login');
            console.log(error);
        }
    };

    return (
        <div>
            <div className="flex flex-col h-screen bg-purple-700">
                <div className="flex items-center justify-center flex-1">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full max-w-md bg-white rounded-lg shadow-lg p-8"
                    >
                        <h2 className="text-3xl text-center font-semibold mb-4">Ingreso</h2>
                        {errorMsg && (
                            <p className="text-red-500 mb-4">{errorMsg}</p>
                        )}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                {...register('email', { required: true })}
                                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-purple-500"
                            />
                            {errors.email && (
                                <p className="text-red-500 mt-2">Este campo es requerido</p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                {...register('password', { required: true })}
                                className="w-full px-3 py-2 border rounded-md border-gray-400 focus:outline-none focus:border-purple-500"
                            />
                            {errors.password && (
                                <p className="text-red-500 mt-2">Este campo es requerido</p>
                            )}
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <button
                                type="submit"
                                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Ingresar
                            </button>
                            <a
                                href="/registro"
                                className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-800"
                            >
                                Regístrate
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Ingreso;