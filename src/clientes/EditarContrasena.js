import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./EditarContrasena.css";

export default function EditarContrasena({ user, setUser, setModalUsuario }) {
  const urlBase = "http://localhost:8080/servi/clientes";

  let navegacion = useNavigate();

  const [contrasena, setContrasena] = useState({
    contrasenaActual: "",
    contrasenaNueva: "",
    confirmarContrasenaNueva: "",
  });

  const { contrasenaActual, contrasenaNueva, confirmarContrasenaNueva } =
    contrasena;

  const onImputChange = (e) => {
    setContrasena({ ...contrasena, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (contrasenaActual === user.contrasena) {
      setPasswordActual(false);
      setPasswordNuevo(true);
    } else {
      setErrorContrasenaActual(true);
    }
  };

  const onSubmit2 = async (e) => {
    e.preventDefault();
    if (
      contrasenaNueva === confirmarContrasenaNueva
    ) {
      if (contrasenaNueva !== contrasenaActual) {
        user.contrasena = contrasenaNueva;
        await axios.put(`${urlBase}/${user.idCliente}`, user);
        navegacion("/home");
      } else {
        setError2NuevaContrasena(true);
      }
    } else {
      setErrorNuevaContrasena(true);
    }
  };

  const [error2NuevaContrasena, setError2NuevaContrasena] = useState(false);

  const [errorContrasenaActual, setErrorContrasenaActual] = useState(false);

  const [errorNuevaContrasena, setErrorNuevaContrasena] = useState(false);

  const [passwordNuevo, setPasswordNuevo] = useState(false);

  const [passwordActual, setPasswordActual] = useState(true);

  return (
    <div>
      <div className="hola">
        <h2 className="h2_actualizarDatos">Cambiar contraseña</h2>
        <p>
          {user.nombre} {user.apellido} <br />
          {user.email}
        </p>
      </div>
      {passwordActual && (
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="editar_contrasena">
            <div className="form_input">
              <label className="label_editarCliente">
                Contraseña Actual*
                <input
                  className="input__editarCliente"
                  type="contrasenaActual"
                  name="contrasenaActual"
                  required={true}
                  value={contrasenaActual}
                  onChange={(e) => onImputChange(e)}
                />
              </label>
            </div>

            {errorContrasenaActual && (
              <div className="error_contrasena_actual">
                <p>La contraseña es incorrecta</p>
              </div>
            )}
            
            <input
              className="boton_cambiarContrasena input__editarCliente"
              type="submit"
              value="Continuar"
            />
          </div>
        </form>
      )}

      {passwordNuevo && (
        <form onSubmit={(e) => onSubmit2(e)}>
          <div className="nueva_contrasena">
            <div className="form_input">
              <label className="label_editarCliente">
                Nueva Contraseña
                <input
                  className="input__editarCliente"
                  type="text"
                  id="contrasenaNueva"
                  name="contrasenaNueva"
                  required={true}
                  value={contrasenaNueva}
                  onChange={(e) => onImputChange(e)}
                />
              </label>
            </div>
            <div className="form_input">
              <label className="label_editarCliente">
                Confirmar Nueva Contraseña*
                <input
                  className="input__editarCliente"
                  type="text"
                  id="confirmarContrasenaNueva"
                  name="confirmarContrasenaNueva"
                  required={true}
                  value={confirmarContrasenaNueva}
                  onChange={(e) => onImputChange(e)}
                />
              </label>
            </div>
            {errorNuevaContrasena && (
              <div className="error_nuevaContrasena">
                <p>Los dos campos deben coincidir</p>
              </div>
            )}
            {error2NuevaContrasena && (
              <div className="error2_nuevaContrasena">
                <p>No puede ser igual que la anterior</p>
              </div>
            )}
            <input
              className="boton_cambiarContrasena input__editarCliente"
              type="submit"
              value="Cambiar contraseña"
            />
          </div>
        </form>
      )}
    </div>
  );
}
