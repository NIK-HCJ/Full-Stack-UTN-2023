import '../styles/pages/contactos.css';
import '../styles/pages/normalize.css';
import React, { useState } from 'react';
import axios from 'axios';

const Contactos = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSumbit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contactos', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }

    return (
        <><main className="c-main">
            <div className="contactos">
                <span>CONTACTATE CON NOSOTROS </span>

                <img src="https://img.freepik.com/iconos-gratis/sol_318-564104.jpg" alt="circulo" />
                <img src="https://img.freepik.com/iconos-gratis/sol_318-564104.jpg" alt="circulo" />
                <img src="https://img.freepik.com/iconos-gratis/sol_318-564104.jpg" alt="circulo" />

                <div className="contacto1">
                    <h2>REDES SOCIALES</h2>
                    <ul>
                        <li>Instagram:@lughgallery</li>
                        <li>Facebook:lughgallery@facebook.com</li>
                    </ul>

                    <h2>TELEFONO Y CORREO</h2>

                    <ul>
                        <li>Telefono:35648921</li>
                        <li>Correo:lughgallery@gmail.com</li>
                    </ul>
                </div>

                <div className="contacto2">
                    <h2>FORMULARIO</h2>

                    <form action="/contactos" method="post" onSubmit={handleSumbit}>
                        <p>
                            <label for="nombre">NOMBRE</label>
                            <input type="text" name='nombre' value={formData.nombre} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="telefono">TELEFONO</label>
                            <input type="tel" name='telefono' value={formData.telefono} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="email">EMAIL</label>
                            <input type="email" name='email' value={formData.email} onChange={handleChange} />
                        </p>

                        <p>
                            <label for="nombre">MENSAJE</label>
                            <textarea cols="30" rows="10" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>

                        <p>
                            <input type="submit" value="ENVIAR" class="enviar" />
                        </p>  
                    </form>
                    {sending ? <p>Enviando...</p> : null}
                    {msg ? <p>{msg}</p> :null}

                </div>


            </div>
        </main></>
    );
};

export default Contactos;