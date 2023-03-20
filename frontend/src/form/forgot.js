import React from "react";

export default function Forgot() {
    return (
        <React.Fragment>
            <div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                    Has olvidado tu contraseña?
                </h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto">
                    Actualiza ahora tu contraseña!
                </p>
            </div>
            <form >
                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Correo"
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                    />
                    <input
                        type="password"
                        placeholder="nueva contraseña"
                        className="block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-yellow-400"
                    />
                </div>
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                    >
                        Actualizar contraseña
                    </button>
                    <p className="mt-4 text-sm">
                        Ya posee una cuenta?
                    </p>
                </div>
            </form>
        </React.Fragment>
    )
}