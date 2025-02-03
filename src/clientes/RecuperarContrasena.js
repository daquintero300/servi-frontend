import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RecuperarContrasena.css";

export default function AgregarCliente() {
  const urlBase = "http://localhost:8080/servi/clientes";

  let navegacion = useNavigate();

  const [correo, setCorreo] = useState({
    email: "",
  });

  const { email } = correo;

  const onImputChange = (e) => {
    setCorreo({ ...correo, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const resultado = await axios.get(`${urlBase}/email=${correo.email}`);
    if (resultado.data === true) {
      navegacion("/");
    } else {
      setError(true);
    }
  };

  const [error, setError] = useState(false);

  return (
    <div>
      <div className="div_recuperarContrasena_icons">
        <div className="div_icon">
          <label>
            <ion-icon name="arrow-back"></ion-icon>
          </label>
        </div>
      </div>
      <div className="reuperarContrasena">
        <div className="div_h2_recuperarContrasena">
          <h2 className="h2_recuperarContrasena">Recuperar contraseña</h2>
        </div>
        <div className="div_p_recuperarContrasena">
          <p className="p_recuperarContrasena">
            Dinos el correo electronico con el que te registraste y te
            enviaremos un email para que puedas restaurar tu contraseña.
          </p>
        </div>
      </div>
      <form className="email" onSubmit={(e) => onSubmit(e)}>
        <div className="form_input">
          <label className="label_recuperarContrasena">
            Correo*
            <input
              className="input_agregarCliente"
              type="text"
              id="email"
              name="email"
              required={true}
              value={email}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        {error && (
          <div className="error_recuperarContrasena">
            <p>
              El correo proporcionado no corresponde a un usuario activo.
            </p>
          </div>
        )}
        <div className="div_input_solicitarContrasena">
          <input
            className="btn_crear_usuario input_agregarCliente"
            type="submit"
            value="Solicitar contraseña"
          />
        </div>

        
      </form>
    </div>
  );
}
