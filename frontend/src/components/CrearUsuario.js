import React, { useState } from 'react';
import axios from 'axios';

const CrearUsuario = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cellphone, setCellphone] = useState('');
    const [password, setPassword] = useState('');
    const [tipo, setTipo] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/users', {
                name: name,
                email: email,
                cellphone: cellphone,
                password: password,
                tipo: tipo,
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2>Crear Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div>
                    <label>Celular:</label>
                    <input
                        type="text"
                        value={cellphone}
                        onChange={(event) => setCellphone(event.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <label>Tipo:</label>
                    <input
                        type="text"
                        value={tipo}
                        onChange={(event) => setTipo(event.target.value)}
                    />
                </div>
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
};

export default CrearUsuario;
