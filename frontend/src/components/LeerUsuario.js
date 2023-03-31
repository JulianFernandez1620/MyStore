import React, { useState } from 'react';
import axios from 'axios';

const LeerUsuario = () => {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/users/${userId}`);
            setUser(response.data);
        } catch (error) {
            console.error(error);
            setUser(null);
        }
    };

    return (
        <div>
            <h2>Leer Usuario</h2>
            <form onSubmit={handleSubmit}>
                <label>ID de usuario:</label>
                <input
                    type="text"
                    value={userId}
                    onChange={(event) => setUserId(event.target.value)}
                />
                <button type="submit">Buscar Usuario</button>
            </form>
            {user ? (
                <div>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Celular: {user.cellphone}</p>
                    <p>Tipo: {user.tipo}</p>
                </div>
            ) : (
                <p>No se encontró ningún usuario con ese ID.</p>
            )}
        </div>
    );
};

export default LeerUsuario;
