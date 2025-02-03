import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditarInmueble.css";

export default function EditarInmueble({ cliente }) {
  const urlBase = "http://localhost:8080/servi/inmuebles";

  let navegacion = useNavigate();

  const { idInmueble } = useParams();

  const [inmueble, setInmueble] = useState({
    idCliente: cliente.idCliente,
    pais: "",
    departamento: "",
    ciudad: "",
    direccion: "",
  });

  const { pais, departamento, ciudad, direccion } = inmueble;

  useEffect(() => {
    cargarInmueble();
  }, []);

  const cargarInmueble = async () => {
    const resultado = await axios.get(`${urlBase}/idInmueble=${idInmueble}`);
    setInmueble(resultado.data);
  };

  const onImputChange = (e) => {
    setInmueble({ ...inmueble, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`${urlBase}/${idInmueble}`, inmueble);
    navegacion("/home");
  };

  return (
    <div>
      <div className="hola">
        <h2 className="h2_registrarse">Actualizar Inmueble</h2>
        <p>
          {inmueble.pais}-{inmueble.departamento}-{inmueble.ciudad}
        </p>
        <p>{inmueble.direccion}</p>
      </div>
      <form className="editar_inmueble" onSubmit={(e) => onSubmit(e)}>
        <div className="form_input">
          <label className="label_editarInmueble">
            Pais*
            <input className="input_actualizarInmueble"
              type="text"
              id="pais"
              name="pais"
              required={true}
              value={pais}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_editarInmueble">
            Departamento*
            <input
            className="input_actualizarInmueble"
              type="text"
              id="departamento"
              name="departamento"
              required={true}
              value={departamento}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_editarInmueble">
            Ciudad*
            <input
            className="input_actualizarInmueble"
              type="text"
              id="ciudad"
              name="ciudad"
              required={true}
              value={ciudad}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <div className="form_input">
          <label className="label_editarInmueble">
            Dirección*
            <input
            className="input_actualizarInmueble"
              type="text"
              id="direccion"
              name="direccion"
              required={true}
              value={direccion}
              onChange={(e) => onImputChange(e)}
            />
          </label >
        </div>
        <input 
        className="boton_ingresar input_actualizarInmueble" type="submit" value="Actualizar" />
      </form>
    </div>
  );
}
