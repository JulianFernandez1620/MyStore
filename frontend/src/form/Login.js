import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Login(props) {

    const [loginform, setLoginform] = useState({
        nombre: "",
        contrasena: ""
    });

    const onChangeForm = (label, event) => {
        switch (label) {
            case "nombre":
                setLoginform({ ...loginform, nombre: event.target.value });
                break;
            case "contrasena":
                setLoginform({ ...loginform, contrasena: event.target.value });
                break;
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log(loginform);
        // call api login
        await axios
            .post("http://localhost:8888/auth/login", loginform)
            .then((response) => {
                console.log(response);
                // Save token to local storage
                localStorage.setItem("auth_token", response.data.result.access_token);
                localStorage.setItem(
                    "auth_token_type",
                    response.data.result.token_type
                );
                // add successfully notif
                toast.success(response.data.detail);
                // reload page after success login
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            })
            .catch((error) => {
                // add error notif
                console.log(error);
                toast.error(error.response.data.detail);
            });
    };

    return (
        <React.Fragment>
            <div>
                <h1 className='text-3xl font-bold text-center mb-4 cursor-pointer'>
                    Bienvenid@ a MyStore
                </h1>
                <p className='w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer mx-auto'>
                    Ingrese sus datos de usuario
                </p>
            </div>
            <form onSubmit={onSubmitHandler}>
                <div >
                    <input
                        type="text"
                        placeholder='Nombre de usuario'
                        className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600'
                        onChange={(event) => {
                            onChangeForm("nombre", event);
                        }}
                    />
                    <input
                        type="password"
                        placeholder='Contraseña de usuario'
                        className='block text-sm py-3 px-4 rounded-lg w-full border outline-none focus:ring focus:outline-none focus:ring-purple-600'
                        onChange={(event) => {
                            onChangeForm("contrasena", event);
                        }}
                    />
                </div>
                <div className=''>
                    <button type='submit' className='py-3 w-64 text-xl text-white bg-purple-700 rounded-2xl hover:bg-purple-500 active:bg-purple-800 outline-none'>
                        Ingresar
                    </button>
                </div>
                <p>¿No tienes una cuenta?{""}
                    <Link
                        to="/?register"
                        onClick={() => {
                            props.setPage("register");
                        }}
                    >
                        <span className="underline cursor-pointer">Registrar</span>
                    </Link>{" "}
                    <p>Has olvidado la cuenta?</p>
                    <Link
                        to="/?forgot"
                        onClick={() => {
                            props.setPage("forgot");
                        }}
                    >
                        <span className="underline cursor-pointer">Restablezca su contraseña</span>
                    </Link>
                </p>
            </form>
        </React.Fragment>
    )
}