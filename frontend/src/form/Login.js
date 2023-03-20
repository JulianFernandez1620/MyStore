import React from 'react'

export default function Login(props) {
    return (
        <React.Fragment>
            <div>
                <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
                    Welcome to MyStore
                </h1>
                <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto'>
                    Ingrese sus datos de usuario
                </p>
            </div>
            <form>
                <div >
                    <input type="text" placeholder='Nombre de usuario' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600' required></input >
                    <input type="password" placeholder='Contraseña de usuario' className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600' required></input>
                </div>
                <div className=''>
                    <button type='submit' className='py-3 w-64 text-xl text-white bg-purple-700 rounded-2xl hover:bg-purple-500 active:bg-purple-800 outline-none'>
                        Ingresar
                    </button>
                </div>
                <p>¿No tienes una cuenta? <span className='underline cursor-pointer'>Registrate</span></p>
                <p>¿No recuerdas la clave? <span className='underline cursor-pointer'>Restablece tu contraseña</span></p>
            </form>
        </React.Fragment>
    )
}