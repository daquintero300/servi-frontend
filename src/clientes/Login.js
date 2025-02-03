import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Servi from "./../assets/img/Servi.jpg";
import "./Login.css";
import axios from "axios";

export default function Login({ setUser }) {
  const urlBase = "http://localhost:8080/servi/clientes";

  let navegacion = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const onInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const [errorLogin, setErrorLogin] = useState(false);

  const [errorEstado, setErrorEstado] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    let resultado = await axios.get(
      `${urlBase}/email=${login.email}/password=${login.password}`
    );
    setUser(resultado.data);
    if (
      login.email === resultado.data.email &&
      login.password === resultado.data.contrasena
    ) {
      if (resultado.data.estado === "activo") {
        navegacion("/home");
      } else {
        setErrorEstado(true);
        setErrorLogin(false);
      }
    } else {
      setErrorLogin(true);
      setErrorEstado(false);
    }
  };

  return (
    <div>
      <div className="servi">
        <img className="img1" src={Servi} alt="Servi" />
      </div>
      <div className="hola">
        <h2 className="h2_ingresar">Ingresar</h2>
        <p>¡Hola!, ¡qué bueno verte de nuevo!</p>
      </div>
      <form className="basic_information" onSubmit={(e) => onSubmit(e)}>
        <div className="form_input">
          <label className="label_login">
            Correo
            <input
              className="input__login"
              type="text"
              required={true}
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_login">
            Contraseña
            <input
              className="input__login"
              type="text"
              required={true}
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </label>

          <input
            className="boton_ingresar input__login"
            type="submit"
            value="Ingresar"
          />
        </div>
      </form>
      {errorLogin && (
        <div className="error_login">
          <p>El correo o la contraseña son incorrectos</p>
        </div>
      )}
      {errorEstado && (
        <div className="error_login">
          <p>Este usuario {email} se encuentra inactivo</p>
        </div>
      )}
      <div className="div_ingresar">
        <p className="p_ingresar">Ingresar con otro medio</p>
        <div>
          <a className="a_google" target="_blank" href="google.com">
            Google
          </a>
          <a className="a_facebook" href="facebook.com">
            Facebook
          </a>
          <p className="p_olvidar_contraseña">
            <Link className="a_olvidar_contraseña" to="/recuperarContrasena">
              ¿Haz olvidado tu contraseña?
            </Link>
          </p>
          <p className="p_registrarse">
            <Link className="a_registrarse" to="/agregarCliente">
              Registrarse
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
