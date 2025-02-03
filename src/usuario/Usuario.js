import axios from "axios";
import React from "react";
import "./Usuario.css";
import { Link } from "react-router-dom";
import Foto from "./../assets/img/Foto.jpg";

export default function usuario({
  cliente,
  setUser,
  modalUsuario,
  setModalUsuario,
  setIconArrow,
  iconArrow,
  extendInfoUser,
  setExtendInfoUser,
}) {
  const urlBase = "http://localhost:8080/servi";

  const desactivarCliente = async () => {
    cliente.estado = "inactivo";
    await axios.put(`${urlBase}/clientes/${cliente.idCliente}`, cliente);
    setUser({});
    setModalUsuario(false);
  };

  const cerrarSesion = () => {
    setUser([]);
    setModalUsuario(false);
  };

  function infoUser() {
    if (extendInfoUser === true) {
      setIconArrow("icon_arrowClose");
      setExtendInfoUser(false);
    } else if (extendInfoUser === false) {
      setIconArrow("icon_arrowOpen");
      setExtendInfoUser(true);
    }
  }

  return (
    <div className="usuario">
      {modalUsuario && (
        <div className="fondo_c-m">
          <div className="c-m">
            <div className="div_content_m">
              <div className="div_foto_perfil">
                <ion-icon name="person-circle"></ion-icon>
                {/*<img className="foto" src={Foto} alt="foto" />*/}
                <div className="div_ad_fp_icon">
                  <ion-icon name="add-circle"></ion-icon>
                </div>
                <div className="div_close">
                  <label onClick={() => setModalUsuario(false)}>
                    <ion-icon name="close"></ion-icon>
                  </label>
                </div>
              </div>
              <div className="div_info_user">
                <p className="info_user">{cliente.nombre} </p>
                <p className="info_user">{cliente.apellido}</p>
                <label className={iconArrow} onClick={() => infoUser()}>
                  <ion-icon name="caret-forward-outline"></ion-icon>
                </label>
              </div>

              {/*Extend info user*/}

              {extendInfoUser && (
                <div className="extend_info_user">
                  <div className="div_extend_info_user">
                    <div className="div_home_white_line"></div>
                    <div>
                      <p className="info_user">{cliente.telefono} </p>
                      <p className="info_user_2">Telefono</p>
                    </div>
                    <div className="div_home_white_line"></div>
                    <div>
                      <p className="info_user">{cliente.email} </p>
                      <p className="info_user_2">Correo</p>
                    </div>
                    <div className="div_home_white_line"></div>
                    <div>
                      <p className="info_user">{cliente.fecha_nacimiento} </p>
                      <p className="info_user_2">Fecha de nacimiento</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="div_home_dark_line"></div>
              <div>
                <Link
                  className="link"
                  to={`/editarCliente/${cliente.idCliente}`}
                  onClick={() => setModalUsuario(false)}
                >
                  Actualizar datos
                </Link>
              </div>
              <div className="div_home_dark_line"></div>
              <Link
                className="link"
                to="/editarContrasena"
                onClick={() => setModalUsuario(false)}
              >
                Cambiar contraseña
              </Link>
              <div className="div_home_dark_line"></div>
              <div>
                <Link
                  className="link"
                  data-bs-toggle="modal"
                  data-bs-target="#cerrarSesion"
                >
                  Cerrar sesion
                </Link>
              </div>
              <div>
                <Link
                  className="link"
                  data-bs-toggle="modal"
                  data-bs-target="#eliminarCuenta"
                >
                  Inactivar cuenta
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Modal Cerrar Sesión*/}
      <div className="modal_cerrarSesion">
        <div
          class="modal fade"
          id="cerrarSesion"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Cerrar Sesión
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Deseas cerrar la sesion?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <label for="btn_modal_user">
                  <Link to="/">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={cerrarSesion}
                    >
                      Confirmar
                    </button>
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Modal Eliminar Cuenta*/}
      <div
        class="modal fade"
        id="eliminarCuenta"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Inactivar cuenta
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Desea deshabilitar su cuenta?... Para poder activar de nuevo su
              cuenta debera comunicarse con soporte tecnico al correo
              daquintero300@gmali.com.
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <Link to="/">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => desactivarCliente()}
                >
                  Confirmar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
