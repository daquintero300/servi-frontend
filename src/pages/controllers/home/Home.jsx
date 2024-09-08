import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Servi from "../../../assets/img/Servi-2.jpg";
import "./Home.css";
import {
  faBell,
  faCircleUser,
  faSync,
} from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="div_home">
      {/*Modal usuario*/}
      <input type="checkbox" id="btn_modal_user" />
      <div className="c-m">
        <label for="btn_modal_user" className="label-cerrar-modal">
          {" "}
        </label>
        <div className="div_content_m">
          <div className="div_foto_perfil">
            <div className="div_ad_fp_icon">
              <ion-icon name="add-circle"></ion-icon>
            </div>
          </div>
          <div>
            <p>Name</p>
            <p>Last name</p>
          </div>
          <div className="div_home_dark_line"></div>
          <div>
            <p>Actualizar datos</p>
          </div>
          <div className="div_home_dark_line"></div>
          <div>
            <p>Inmuebles</p>
          </div>
          <div className="div_home_dark_line"></div>
          <div>
            <p>Cerrar</p>
          </div>
          <div>
            <p>Borrar</p>
          </div>
        </div>
      </div>
      {/*Modal notificaciones*/}
      <input type="checkbox" id="btn_modal_notifications" />

      {/*Home*/}
      <div className="div_home_img1">
        <img className="img1_home" src={Servi} alt="Servi" />
        <div className="div_home_icons">
          <div className="div_icon">
            <label for="btn_modal_user">
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
      <svg
        className="svg_home"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="350 5 650 205"
      >
        <path d="M0,0L48,26.7C96,53,192,107,288,149.3C384,192,480,224,576,202.7C672,181,768,107,864,80C960,53,1056,75,1152,112C1248,149,1344,203,1392,229.3L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className="div_home_line"></div>
      <nav>
        <ul className="ul-menu-home">
          <li>
            <p className="p_li_home">Direccion</p>
            <p className="p_li_home">Barrio</p>
            <p className="p_li_home">Ciudad-Departamento</p>
            <ul className="ul-mv-home">
              <li className="li_home">
                <p className="p_li_home">Direccion</p>
                <p className="p_li_home">Barrio</p>
                <p className="p_li_home">Ciudad-Departamento</p>
              </li>
              <div className="div_home_line"></div>
              <li className="li_home">
                <p className="p_li_home">Direccion</p>
                <p className="p_li_home">Barrio</p>
                <p className="p_li_home">Ciudad-Departamento</p>
              </li>
              <label htmlFor=""></label>
            </ul>
          </li>
        </ul>
      </nav>
      <div className="div_home_line"></div>
      <div className="div_home_img_servicio">
        <div className="div_home_servcio_name">
          <h3>AGUA</h3>
        </div>
        <img className="img1_home_servicio" src={Servi} alt="Servi" />
      </div>
      <div className="div_home_img_servicio">
        <div className="div_home_servcio_name">
          <h3>GAS</h3>
        </div>
        <img className="img1_home_servicio" src={Servi} alt="Servi" />
      </div>
      <div className="div_home_img_servicio">
        <div className="div_home_servcio_name">
          <h3>LUZ</h3>
        </div>
        <img className="img1_home_servicio" src={Servi} alt="Servi" />
      </div>
      <div className="div_home_img_servicio">
        <div className="div_home_servcio_name">
          <h3>AÑADIR</h3>
        </div>
        <img className="img1_home_servicio" src={Servi} alt="Servi" />
      </div>
      <div className="div_home_img_servicio">
        <div className="div_home_servcio_name">
          <h3>AÑADIR</h3>
        </div>
        <img className="img1_home_servicio" src={Servi} alt="Servi" />
      </div>
      <div className="div_home_img_servicio">
        <div className="div_home_servcio_name">
          <h3>AÑADIR</h3>
        </div>
        <img className="img1_home_servicio" src={Servi} alt="Servi" />
      </div>
    </div>
  );
};
