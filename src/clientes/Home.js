import axios from "axios";
import Servi from "./../assets/img/Servi-2.jpg";
import EPA from "./../assets/img/EPA.jpg";
import EDEQ from "./../assets/img/EDEQ.jpg";
import EFIGAS from "./../assets/img/EFIGAS.jpg";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home({
  cliente,
  inmuebles,
  setInmuebles,
  inmueble,
  setInmueble,
  setModalUsuario,
}) {
  let navegacion = useNavigate();

  const urlBase = "http://localhost:8080/servi";

  useEffect(() => {
    cargarInmuebles();
  }, []);

  const cargarInmuebles = async () => {
    const resultadoInmuebles = await axios.get(
      `${urlBase}/inmuebles/${cliente.idCliente}`
    );
    console.log(resultadoInmuebles.data)
    setInmuebles(resultadoInmuebles.data);
    if (inmueble === inmueableAInactivar) {
      setInmueble({
        direccion: "Direccion",
        pais: "Pais",
        ciudad: "Ciudad",
        departamento: "Departamento",
      });
    }
  };

  function navegacionAgregarInmueble() {
    navegacion("/agregarInmueble/");
    setModalUsuario(false);
  }

  function irAServicios(tipoServicio) {
    if (inmueble.direccion !== "Direccion") {
      navegacion(
        `/listarInmuebles/listarServicios/${inmueble.idInmueble}/${tipoServicio}`
      );
    } else if (inmueble.direccion === "Direccion") {
      setError(true);
    }
  }

  function seleccionarInmueble(inmueble) {
    setInmueble(inmueble);
    setError(false);
    setServiciosList(false);
    setIconArrow("iconArrowClose");
  }

  const [error, setError] = useState(false);

  const [serviciosList, setServiciosList] = useState(false);

  const [iconArrow, setIconArrow] = useState("iconArrowClose");

  function inputServiciosList() {
    if (serviciosList === false) {
      setServiciosList(true);
      setIconArrow("iconArrowOpen");
    } else {
      setServiciosList(false);
      setIconArrow("iconArrowClose");
    }
    setError(false);
  }

  function navegacionEditarInmueble(idInm) {
    navegacion(`/editarInmueble/${idInm}`);
  }

  const inactivarInmueble = async (idInm) => {
    inmueableAInactivar.estado = "inactivo";
    await axios.put(`${urlBase}/inmuebles/${idInm}`, inmueableAInactivar);
    cargarInmuebles();
    setInmueble({
      estado: "",
      direccion: "Direccion",
      pais: "Pais",
      ciudad: "Ciudad",
      departamento: "Departamento",
    });
  };

  const [inmueableAInactivar, setInmuebleAInactivar] = useState({});

  return (
    <div>
      <div className="div_home">
        {/*Home*/}
        <div className="div_home_img1">
          <img className="img1_home" src={Servi} alt="Servi" />
          <div className="div_home_icons">
            <div className="div_icon">
              <label
                className="label_home"
                onClick={() => setModalUsuario(true)}
              >
                <ion-icon name="person-circle"></ion-icon>
              </label>
            </div>
            <div className="div_icon">
              <label className="label_home" for="btn_modal_notification">
                <ion-icon name="notifications"></ion-icon>
              </label>
            </div>
          </div>
        </div>
        <div className="div_home_line"></div>
        <nav>
          <ul className="ul-menu-home">
            <li className="list__item">
              <div className="list__button">
                <p className="p_li_home">{inmueble.direccion}</p>
                <p className="p_li_home">
                  {inmueble.ciudad}-{inmueble.departamento}
                </p>
                <p className="p_li_home">{inmueble.pais}</p>
              </div>
              <div className="div_icon_li_inmuebles">
                <div className={iconArrow}>
                  <label onClick={() => inputServiciosList()}>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                  </label>
                  <label onClick={navegacionAgregarInmueble}>
                    <ion-icon name="add-circle"></ion-icon>
                  </label>
                </div>
              </div>
              {error && (
                <div className="error_home">
                  <p>
                    Seleccione un inmueble{" "}
                    {<ion-icon name="caret-forward-outline"></ion-icon>} ó
                    agregue un inmueble nuevo{" "}
                    {<ion-icon name="add-circle"></ion-icon>}
                  </p>
                </div>
              )}
              {/*Lista Inmuebles*/}
              {serviciosList && (
                <div className="l-i">
                  {inmuebles.map((inm) => (
                    <div>
                      <div className="div_inmueblesList">
                        <div className="info_inmueble_list">
                          <label
                            className="extend_lista_inmuebles"
                            onClick={() => seleccionarInmueble(inm)}
                          >
                            <div className="info__inmueble">
                              <p className="p_li_servicios_home">
                                {inm.direccion} <br /> {inm.pais} <br />{" "}
                                {inm.ciudad}-{inm.departamento}
                              </p>
                            </div>
                          </label>
                        </div>

                        <div className="div_icons_inmuebles">
                          <div className="div_icon_servicios">
                            <label
                              className="icon_inmuebles"
                              for="btn_modal_user"
                              onClick={() =>
                                navegacionEditarInmueble(inm.idInmueble)
                              }
                            >
                              <ion-icon name="pencil"></ion-icon>
                            </label>
                          </div>
                          <div className="div_icon_servicios">
                            <Link
                              className="link"
                              data-bs-toggle="modal"
                              data-bs-target="#eliminarInmueble"
                            >
                              <label
                                className="icon_inmuebles"
                                onClick={() => setInmuebleAInactivar(inm)}
                              >
                                <ion-icon name="trash"></ion-icon>
                              </label>
                            </Link>
                          </div>
                        </div>
                      </div>
                      {/*Modal Eliminar Inmueble*/}
                      <div
                        class="modal fade"
                        id="eliminarInmueble"
                        tabindex="1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog modal-dialog-centered">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Eliminar Inmueble
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              Desea eliminar este inmueble? <br /> <br />
                              {inmueableAInactivar.direccion} <br />{" "}
                              {inmueableAInactivar.pais} <br />{" "}
                              {inmueableAInactivar.ciudad}-
                              {inmueableAInactivar.departamento}
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Cerrar
                              </button>
                              <button
                                type="button"
                                class="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() =>
                                  inactivarInmueble(
                                    inmueableAInactivar.idInmueble
                                  )
                                }
                              >
                                Confirmar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </nav>
        <div className="div_home_line"></div>
        <div className="div_home_img_servicio">
          <label onClick={() => irAServicios("agua")}>
            <div className="div_home_servcio_name">
              <h3>AGUA</h3>
            </div>
            <img className="img1_home_servicio" src={EPA} alt="Agua" />
          </label>
        </div>
        <div className="div_home_img_servicio">
          <label onClick={() => irAServicios("gas")}>
            <div className="div_home_servcio_name">
              <h3>GAS</h3>
            </div>
            <img className="img1_home_servicio" src={EFIGAS} alt="Servi" />
          </label>
        </div>

        <div className="div_home_img_servicio">
          <label onClick={() => irAServicios("luz")}>
            <div className="div_home_servcio_name">
              <h3>LUZ</h3>
            </div>
            <img className="img1_home_servicio" src={EDEQ} alt="Luz" />
          </label>
        </div>
      </div>
    </div>
  );
}
