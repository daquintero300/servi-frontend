import axios from "axios";
import EPA from "./../assets/img/EPA.jpg";
import EDEQ from "./../assets/img/EDEQ.jpg";
import EFIGAS from "./../assets/img/EFIGAS.jpg";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./ListarServicios.css";

export default function ListarServicios({
  inmueble,
  setModalUsuario,
  setServicio,
}) {
  const urlBase = "http://localhost:8080/servi";

  const navegacion = useNavigate();

  const { tipoServicio } = useParams();

  const [serviciosPagosAgua, setServiciosPagosAgua] = useState([]);
  const [serviciosPendientesAgua, setServiciosPendientesAgua] = useState([]);
  const [serviciosVencidosAgua, setServiciosVencidosAgua] = useState([]);

  const [serviciosPagosGas, setServiciosPagosGas] = useState([]);
  const [serviciosPendientesGas, setServiciosPendientesGas] = useState([]);
  const [serviciosVencidosGas, setServiciosVencidosGas] = useState([]);

  const [serviciosPagosLuz, setServiciosPagosLuz] = useState([]);
  const [serviciosPendientesLuz, setServiciosPendientesLuz] = useState([]);
  const [serviciosVencidosLuz, setServiciosVencidosLuz] = useState([]);

  const [serviciosSeleccionados, setServiciosSeleccionados] = useState([]);

  function seleccionarEstadoPorServicio(tipoServicio, estado) {
    statusService();
    if (estado === "Pago") {
      if (tipoServicio === "agua") {
        setServiciosSeleccionados(serviciosPagosAgua);
      } else if (tipoServicio === "gas") {
        setServiciosSeleccionados(serviciosPagosGas);
      } else if (tipoServicio === "luz") {
        setServiciosSeleccionados(serviciosPagosLuz);
      }
      setBtnValue("Info");
      setInfoServicio({
        iconoEstadoServi: "checkmark-circle",
        estadoServi: "Pagado",
        iconColorEstadoServicio: "icon__estadoPago__servicio",
        btn_pago: "btn__estadoServicio__activo",
        btn_pendiente: "btn__estadoServicio__inactivo",
        btn_vencido: "btn__estadoServicio__inactivo",
      });
    } else if (estado === "Pendiente") {
      if (tipoServicio === "agua") {
        setServiciosSeleccionados(serviciosPendientesAgua);
      } else if (tipoServicio === "gas") {
        setServiciosSeleccionados(serviciosPendientesGas);
      } else if (tipoServicio === "luz") {
        setServiciosSeleccionados(serviciosPendientesLuz);
      }
      setBtnValue("Pagar");
      setInfoServicio({
        iconoEstadoServi: "hourglass",
        estadoServi: "Pendiente",
        iconColorEstadoServicio: "icon__estadoPendiente__servicio",
        btn_pago: "btn__estadoServicio__inactivo",
        btn_pendiente: "btn__estadoPendiente__activo",
        btn_vencido: "btn__estadoServicio__inactivo",
      });
    } else if (estado === "Vencido") {
      if (tipoServicio === "agua") {
        setServiciosSeleccionados(serviciosVencidosAgua);
      } else if (tipoServicio === "gas") {
        setServiciosSeleccionados(serviciosVencidosGas);
      } else if (tipoServicio === "luz") {
        setServiciosSeleccionados(serviciosVencidosLuz);
      }
      setBtnValue("Pagar");
      setInfoServicio({
        iconoEstadoServi: "warning",
        estadoServi: "Venció",
        iconColorEstadoServicio: "icon__estadoVencido__servicio",
        btn_pago: "btn__estadoServicio__inactivo",
        btn_pendiente: "btn__estadoServicio__inactivo",
        btn_vencido: "btn__estadoVencido__activo",
      });
    }
  }

  useEffect(() => {
    cargarServicio();
    seleccionarImgServicio(tipoServicio);
  }, []);

  const cargarServicio = async () => {
    const resultadoServicios = await axios.get(
      `${urlBase}/servicios/idInmueble=${inmueble.idInmueble}`
    );
    const servicios = resultadoServicios.data;
    console.log("servicios")
    console.log(servicios)
    const serviPagosAgua = [];
    const serviPendientesAgua = [];
    const serviVencidosAgua = [];
    const serviPagosGas = [];
    const serviPendientesGas = [];
    const serviVencidosGas = [];
    const serviPagosLuz = [];
    const serviPendientesLuz = [];
    const serviVencidosLuz = [];
    for (const servicio of servicios) {
      if (servicio.tipoServicio === "agua") {
        if (servicio.estado === "Pago") {
          serviPagosAgua.push(servicio);
        } else if (servicio.estado === "Pendiente") {
          serviPendientesAgua.push(servicio);
        } else if (servicio.estado === "Vencido") {
          serviVencidosAgua.push(servicio);
        }
      } else if (servicio.tipoServicio === "gas") {
        if (servicio.estado === "Pago") {
          serviPagosGas.push(servicio);
        } else if (servicio.estado === "Pendiente") {
          serviPendientesGas.push(servicio);
        } else if (servicio.estado === "Vencido") {
          serviVencidosGas.push(servicio);
        }
      } else if (servicio.tipoServicio === "luz") {
        if (servicio.estado === "Pago") {
          serviPagosLuz.push(servicio);
        } else if (servicio.estado === "Pendiente") {
          serviPendientesLuz.push(servicio);
        } else if (servicio.estado === "Vencido") {
          serviVencidosLuz.push(servicio);
        }
      }
    }
    setServiciosPagosAgua(serviPagosAgua);
    setServiciosPendientesAgua(serviPendientesAgua);
    setServiciosVencidosAgua(serviVencidosAgua);
    setServiciosPagosGas(serviPagosGas);
    setServiciosPendientesGas(serviPendientesGas);
    setServiciosVencidosGas(serviVencidosGas);
    setServiciosPagosLuz(serviPagosLuz);
    setServiciosPendientesLuz(serviPendientesLuz);
    setServiciosVencidosLuz(serviVencidosLuz);
  };

  function navegacionHome() {
    setModalUsuario(false);
    navegacion("/home");
  }

  function seleccionarImgServicio(tipoServicio) {
    if (tipoServicio === "agua") {
      setImgServicio(EPA);
      setBtnServicio({
        btn_agua: "btn__servicio__activo",
        btn_gas: "btn__servicio__inactivo",
        btn_luz: "btn__servicio__inactivo",
      });
    } else if (tipoServicio === "gas") {
      setImgServicio(EFIGAS);
      setBtnServicio({
        btn_agua: "btn__servicio__inactivo",
        btn_gas: "btn__servicio__activo",
        btn_luz: "btn__servicio__inactivo",
      });
    } else if (tipoServicio === "luz") {
      setImgServicio(EDEQ);
      setBtnServicio({
        btn_agua: "btn__servicio__inactivo",
        btn_gas: "btn__servicio__inactivo",
        btn_luz: "btn__servicio__activo",
      });
    }
  }

  const [imgServicio, setImgServicio] = useState();

  function statusService() {
    
  }

  function selecionarServicio(prestador, tipoServicio) {
    if (tipoServicio === "agua") {
      setBtnServicio({
        btn_agua: "btn__servicio__activo",
        btn_gas: "btn__servicio__inactivo",
        btn_luz: "btn__servicio__inactivo",
      });
    } else if (tipoServicio === "luz") {
      setBtnServicio({
        btn_agua: "btn__servicio__inactivo",
        btn_gas: "btn__servicio__inactivo",
        btn_luz: "btn__servicio__activo",
      });
    } else if (tipoServicio === "gas") {
      setBtnServicio({
        btn_agua: "btn__servicio__inactivo",
        btn_gas: "btn__servicio__activo",
        btn_luz: "btn__servicio__inactivo",
      });
    }
    setImgServicio(prestador);
    setServiciosSeleccionados([]);
    setInfoServicio({
      btn_pago: "btn__estadoServicio__inactivo",
      btn_pendiente: "btn__estadoServicio__inactivo",
      btn_vencido: "btn__estadoServicio__inactivo",
    });
  }

  const [infoServicio, setInfoServicio] = useState({
    iconoEstadoServi: "",
    estadoServi: "",
    iconColorEstadoServicio: "",
    btn_pago: "btn__estadoServicio__inactivo",
    btn_pendiente: "btn__estadoServicio__inactivo",
    btn_vencido: "btn__estadoServicio__inactivo",
  });

  const [btnValue, setBtnValue] = useState();

  const [btnServicio, setBtnServicio] = useState({
    btn_agua: "btn__servicio__inactivo",
    btn_gas: "btn__servicio__inactivo",
    btn_luz: "btn__servicio__inactivo",
  });

  return (
    <div>
      <div className="div_home">
        {/*Encabezado*/}
        <div className="div_listarServicios_img1">
          <div className="div__icons">
            <div className="div_icon_regresar_home">
              <div className="div_icon">
                <label onClick={navegacionHome}>
                  <ion-icon name="arrow-back-outline"></ion-icon>
                </label>
              </div>
            </div>
            <div className="div_icons_listarServicios">
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
          </div>

          <img
            className="imgServicio__listaServicios"
            src={imgServicio}
            alt="imgServicio"
          />
          <div className="div_home_icons">
            <div className="div__btns__servicio">
              <Link
                to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/agua`}
              >
                <input
                  className={btnServicio.btn_agua}
                  type="submit"
                  value="AGUA"
                  onClick={() => selecionarServicio(EPA, "agua")}
                />
              </Link>
              <Link
                to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/gas`}
              >
                <input
                  className={btnServicio.btn_gas}
                  type="submit"
                  value="GAS"
                  onClick={() => selecionarServicio(EFIGAS, "gas")}
                />
              </Link>
              <Link
                to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/luz`}
              >
                <input
                  className={btnServicio.btn_luz}
                  type="submit"
                  value="LUZ"
                  onClick={() => selecionarServicio(EDEQ, "luz")}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="info__inmueble__listaServicios">
          <label>
            <p className="p_li_servicio">
              {inmueble.direccion} <br /> {inmueble.pais} <br />{" "}
              {inmueble.ciudad}-{inmueble.departamento}
            </p>
          </label>
          <div className="div_home_white_line"></div>
        </div>

        <div className="div__btns__estadoServicio">
          <Link
            to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/${tipoServicio}`}
          >
            <input
              className={infoServicio.btn_pago}
              type="submit"
              value="Pagos"
              onClick={() => seleccionarEstadoPorServicio(tipoServicio, "Pago")}
            />
          </Link>
          <Link
            to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/${tipoServicio}`}
          >
            <input
              className={infoServicio.btn_pendiente}
              type="submit"
              value="Pendientes"
              onClick={() =>
                seleccionarEstadoPorServicio(tipoServicio, "Pendiente")
              }
            />
          </Link>
          <Link
            to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/${tipoServicio}`}
          >
            <input
              className={infoServicio.btn_vencido}
              type="submit"
              value="Vencidos"
              onClick={() =>
                seleccionarEstadoPorServicio(tipoServicio, "Vencido")
              }
            />
          </Link>
        </div>
        <div className="info__inmueble__listaServicios">
          <div>
            {serviciosSeleccionados.map((servicio) => (
              <div className="div_servicios_icons">
                <div className="div_icon_servicios_1">
                  <div className="div_icon_servicios div_icon_estado">
                    <div className={infoServicio.iconColorEstadoServicio}>
                      <label for="btn_modal_notification">
                        <ion-icon
                          name={infoServicio.iconoEstadoServi}
                        ></ion-icon>
                      </label>
                    </div>
                  </div>
                  <div className="div_icon_servicios div_estado">
                    <p className="p_li_servicio">
                      {infoServicio.estadoServi}
                      <br />$ {servicio.valor}
                    </p>
                  </div>
                </div>
                <div className="div_icon_servicios_2">
                  <div className="div_icon_servicios div_fecha_limite">
                    <p className="p_li_servicio">
                      Fecha limite
                      <br />
                      {servicio.fechaLimite}
                    </p>
                  </div>

                  <Link
                    to={`/listarInmuebles/listarServicios/${inmueble.idInmueble}/pagos/${servicio.idServicio}`}
                  >
                    <input
                      className="btn__pagarServicio"
                      type="submit"
                      value={btnValue}
                      onClick={() => setServicio(servicio)}
                    />
                  </Link>

                  <div className="div_icon_servicios">
                    <label for="btn_modal_user">
                      <ion-icon name="document-text"></ion-icon>
                    </label>
                  </div>
                  <div className="div_icon_servicios">
                    <label for="btn_modal_notification">
                      <ion-icon name="cloud-download"></ion-icon>
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
