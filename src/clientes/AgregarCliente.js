import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AgregarCliente.css";

export default function AgregarCliente() {
  const urlBase = "http://localhost:8080/servi/clientes";

  let navegacion = useNavigate();

  const [cliente, setCliente] = useState({
    estado: "activo",
    tipo_documento: "cc",
    numero_documento: "",
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
    telefono: "",
    email: "",
    contrasena: "",
  });

  const {
    nombre,
    apellido,
    fecha_nacimiento,
    numero_documento,
    telefono,
    email,
  } = cliente;

  const [contrasenaNueva, setContrasenaNueva] = useState({
    contrasena1: "",
    confirmarContrasena1: "",
  });

  const { contrasena1, confirmarContrasena1 } = contrasenaNueva;

  const onImputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
    setContrasenaNueva({ ...contrasenaNueva, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (contrasena1 === confirmarContrasena1) {
      cliente.contrasena = contrasena1;
      await axios.post(urlBase, cliente);
      navegacion("/");
    } else {
      setErrorRegistro(true);
    }
  };

  const [errorRegistro, setErrorRegistro] = useState(false);

  return (
    <div>
      <div className="hola">
        <h2 className="h2_registrarUsuario">Registrarse</h2>
        <p>Completa todos los campos*</p>
      </div>
      <form className="register_information" onSubmit={(e) => onSubmit(e)}>
        <div className="form_input">
          <label className="label_agregarCliente">
            Nombre*
            <input
              className="input_agregarCliente"
              type="text"
              id="nombre"
              name="nombre"
              required={true}
              value={nombre}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_agregarCliente">
            Apellido*
            <input
              className="input_agregarCliente"
              type="text"
              id="apellido"
              name="apellido"
              required={true}
              value={apellido}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_agregarCliente">
            Fecha de nacimiento*
            <input
              className="input_agregarCliente"
              type="date"
              id="fecha_nacimiento"
              name="fecha_nacimiento"
              required={true}
              value={fecha_nacimiento}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_agregarCliente">
            c.c.*
            <input
              className="input_agregarCliente"
              type="text"
              id="numero_documento"
              name="numero_documento"
              required={true}
              value={numero_documento}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_agregarCliente">
            Telefono*
            <input
              className="input_agregarCliente"
              type="text"
              id="telefono"
              name="telefono"
              required={true}
              value={telefono}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_agregarCliente">
            Email*
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
        <div className="form_input">
          <label className="label_agregarCliente">
            Contraseña*
            <input
              className="input_agregarCliente"
              type="text"
              id="contrasena1"
              name="contrasena1"
              required={true}
              value={contrasena1}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_agregarCliente">
            Confirmar contraseña*
            <input
              className="input_agregarCliente"
              type="text"
              id="confirmarContrasena1"
              name="confirmarContrasena1"
              required={true}
              value={confirmarContrasena1}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        {errorRegistro && (
        <div className="error_login">
          <p>Las contraseñas no coinciden</p>
        </div>
      )}
        <input
          className="btn_crear_usuario input_agregarCliente"
          type="submit"
          value="Registrar usuario"
        />
      </form>
      <div className="div_continuar">
        <div className="div_ya_cuenta">
          <p className="p_olvidar_contraseña">
            {" "}
            <Link className="a_olvidar_contraseña" to="">
              ¿Ya tienes una cuenta?
            </Link>
          </p>
          <p className="p_registrarse">
            {" "}
            <Link className="a_registrarse" to="/">
              Ingresar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
