import React, { useState } from 'react';

function UserForm(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cellphone, setCellphone] = useState("");
    const [password, setPassword] = useState("");
    const [tipo, setTipo] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            email,
            cellphone,
            password,
            tipo
        };
        props.onSubmit(newUser);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
                Correo electrónico:
                <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label>
                Teléfono:
                <input type="text" value={cellphone} onChange={(event) => setCellphone(event.target.value)} />
            </label>
            <label>
                Contraseña:
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <label>
                Tipo:
                <input type="text" value={tipo} onChange={(event) => setTipo(event.target.value)} />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default UserForm;
