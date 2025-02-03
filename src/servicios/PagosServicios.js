import axios from "axios";
import PSE from "./../assets/img/PSE.png";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./PagosServicios.css";

export default function PagosServicios({
  cliente,
  inmueble,
  setModalUsuario,
  setServicio,
  servicio,
}) {
  const urlBase = "http://localhost:8080/servi";

  const navegacion = useNavigate();

  function navegacionListarServicios() {
    navegacion(
      `/listarInmuebles/listarServicios/${inmueble.idInmueble}/${servicio.tipoServicio}`
    );
  }

  useEffect(() => {
    ajustarEstadoServicio();
  }, []);

  function ajustarEstadoServicio() {
    if (servicio.estado === "Pago") {
      setBtnPagar(false);
      setInfoServicio({
        iconoEstadoServi: "checkmark-circle",
        iconColorEstadoServicio: "div_icon_estadoPago",
        textoColorEstadoServicio: "p_informacionServicio_estadoPago",
        
      });
    } else if (servicio.estado === "Pendiente") {
      setBtnPagar(true);
      setInfoServicio({
        iconoEstadoServi: "hourglass",
        iconColorEstadoServicio: "div_icon_estadoPendiente",
        textoColorEstadoServicio: "p_informacionServicio_estadoPendiente",
      });
    } else if (servicio.estado === "Vencido") {
      setBtnPagar(true);
      setInfoServicio({
        iconoEstadoServi: "warning",
        iconColorEstadoServicio: "div_icon_estadoVencido",
        textoColorEstadoServicio: "p_informacionServicio_estadoVencido",
      });
    }
  }

  const [infoServicio, setInfoServicio] = useState({
    iconoEstadoServi: "",
    iconColorEstadoServicio: "",
    textoColorEstadoServicio: "",
  });

  const pagarServicio = async () => {
    servicio.estado = "Pago";
    await axios.put(
      `${urlBase}/servicios/idServicio=${servicio.idServicio}`,
      servicio
    );
    navegacion(
      `/listarInmuebles/listarServicios/${inmueble.idInmueble}/${servicio.tipoServicio}`
    );
  };

  const [btnPagar, setBtnPagar] = useState(false);

  
  

  return (
    <div>
      <div className="div_home">
        {/*Encabezado*/}
        <div className="div_pagosServicios">
          <div className="div_icon_regresar">
            <div className="div_icon">
              <label onClick={navegacionListarServicios}>
                <ion-icon name="arrow-back-outline"></ion-icon>
              </label>
            </div>
          </div>
          <div className="div_icons">
            <Link to="/home">
              <div className="div_icon">
                <label>
                  <ion-icon name="home"></ion-icon>
                </label>
              </div>
            </Link>

            <div className="div_icon">
              <label onClick={() => setModalUsuario(true)}>
                <ion-icon name="person-circle"></ion-icon>
              </label>
            </div>
            <div className="div_icon">
              <label for="btn_modal_notification">
                <ion-icon name="notifications"></ion-icon>
              </label>
            </div>
          </div>

          <div>
            <div className="div_informacion_pagar">
              <h2 className="h2_pagar">
                Pagar {servicio.tipoServicio} - {servicio.prestador}
              </h2>
              <div className="p_informacionInmueble">
                <p className="p_informacionInmueble">
                  {inmueble.direccion} <br />
                  {inmueble.pais} <br />
                  {inmueble.ciudad} - {inmueble.departamento}
                </p>
              </div>
              <div className="div_estadoServicio">
                <div className={infoServicio.iconColorEstadoServicio}>
                  <ion-icon name={infoServicio.iconoEstadoServi}></ion-icon>
                </div>
                <div className="div_p_estadoServicio">
                  <p className={infoServicio.textoColorEstadoServicio}>
                    {servicio.estado}
                  </p>
                </div>
              </div>
              <p className="p_informacionServicio">
                Prestador: <br />
                {servicio.prestador}
              </p>
              <p className="p_informacionServicio">
                Valor a pagar: <br />${servicio.valor}
              </p>
              <p className="p_informacionServicio">
                Fecha de expedicion: <br />
                {servicio.fechaGeneracion}
              </p>
              <p className="p_informacionServicio">
                Fecha de vencimiento: <br />
                {servicio.fechaLimite}
              </p>
              <p className="p_informacionServicio">
                NIU: <br />
                {servicio.fechaGeneracion}
              </p>
            </div>
          </div>
        </div>
        <div className="info__inmueble__listaServicios">
          <div className="div_img_PSE">
            <img className="img_PSE" src={PSE} alt="imgServicio" />

            {btnPagar && (
              <div className="div_p_PSE">
                <input
                  className="btn_pagar"
                  type="submit"
                  value="Pagar"
                  onClick={() => pagarServicio()}
                />
              </div>
            )}
            <p className="p_PSE">
              Paga facil y rapido <br /> tu factura con PSE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
