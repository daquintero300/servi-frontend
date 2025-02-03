import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditarCliente.css";

export default function EditarCliente({ user, setUser }) {
  const urlBase = "http://localhost:8080/servi/clientes";

  let navegacion = useNavigate();

  const [cliente, setCliente] = useState({
    tipo_documento: "cc",
    numero_documento: "",
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
    telefono: "",
    email: "",
  });

  const {
    nombre,
    apellido,
    fecha_nacimiento,
    numero_documento,
    telefono,
    email,
  } = cliente;

  useEffect(() => {
    setCliente(user);
  }, []);

  const onImputChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${user.idCliente}`, cliente);
    setUser(cliente);
    navegacion("/home");
  };

  return (
    <div>
      <div className="hola">
        <h2 className="h2_actualizarDatos">Actualizar datos personales</h2>
        <p>
          {user.nombre} {user.apellido} <br />
          {user.email}
        </p>
      </div>
      <form
        className="editar_information_cliente"
        onSubmit={(e) => onSubmit(e)}
      >
        <div className="form_input">
          <label className="label_editarCliente">
            Nombre*
            <input
              className="input__editarCliente"
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
          <label className="label_editarCliente">
            Apellido*
            <input
              className="input__editarCliente"
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
          <label className="label_editarCliente">
            Fecha de nacimiento*
            <input
              className="input__editarCliente"
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
          <label className="label_editarCliente">
            c.c.*
            <input
              className="input__editarCliente"
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
          <label className="label_editarCliente">
            Telefono*
            <input
              className="input__editarCliente"
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
          <label className="label_editarCliente">
            Email*
            <input
              className="input__editarCliente"
              type="text"
              id="email"
              name="email"
              required={true}
              value={email}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <input
          className="boton_editar"
          type="submit"
          value="Guardar cambios"
        />
      </form>
      <div className="div_continuar">
        <div className="div_ya_cuenta"></div>
      </div>
    </div>
  );
}
