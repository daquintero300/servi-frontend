import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AgregarInmueble.css";

export default function AgregarInmueble({ cliente, setPropiedad, setInm }) {
  const urlBase = "http://localhost:8080/servi/inmuebles";

  let navegacion = useNavigate();

  const [inmueble, setInmueble] = useState({
    idCliente: cliente.idCliente,
    estado: "activo",
    pais: "",
    departamento: "",
    ciudad: "",
    direccion: "",
  });

  const { pais, departamento, ciudad, direccion } = inmueble;

  const onImputChange = (e) => {
    setInmueble({ ...inmueble, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(urlBase, inmueble);
    setInm(inmueble);
    navegacion("/home");
  };

  return (
    <div>
      <div className="hola">
        <h2 className="h2_agregarInmueble">Agregar Inmueble</h2>
        <p>Completa todos los campos*</p>
      </div>
      <form className="register_inmueble" onSubmit={(e) => onSubmit(e)}>
        <div className="form_input">
          <label className="label_agregarInmueble">
            Pais*{" "}
            <input
              className="input_agregarInmueble"
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
          <label className="label_agregarInmueble">
            Departamento*
            <input
              className="input_agregarInmueble"
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
          <label className="label_agregarInmueble">
            Ciudad*
            <input
              className="input_agregarInmueble"
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
          <label className="label_agregarInmueble">
            Dirección*
            <input
              className="input_agregarInmueble"
              type="text"
              id="direccion"
              name="direccion"
              required={true}
              value={direccion}
              onChange={(e) => onImputChange(e)}
            />
          </label>
        </div>
        <input
          className="boton_ingresar input_agregarInmueble"
          type="submit"
          value="Confirmar"
        />
      </form>
      <div className="div_continuar">
        <div className="div_ya_cuenta"></div>
      </div>
    </div>
  );
}
