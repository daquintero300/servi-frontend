import { useNavigate } from "react-router-dom";
import Servi from "../../../assets/img/Servi.jpg";
import "./Login.css";
import { useTranslation } from "react-i18next";
export function Login() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const changeLang = (event) => {
    i18n.changeLanguage(event.target.value);
  };
  return (
    <div>
      <div className="servi">
        <img className="img1" src={Servi} alt="Servi" />
      </div>
      <div className="hola">
        <h2 className="h2_ingresar">{t("login")}</h2>
        <p>{t("login-greeting")}</p>
      </div>
      <div className="basic_information">
        <div className="form_input">
          <label>
            Correo
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Contraseña
            <input type="password" />
          </label>
        </div>
      </div>
      <div className="div_ingresar">
        <input
          className="boton_ingresar"
          type="submit"
          onClick={() => navigate("/home")}
        ></input>
        <p className="p_ingresar">Ingresar con otro medio</p>
        <div>
          <a className="a_google" target="_blank" href="google.com">
            Google
          </a>
          <a className="a_facebook" href="facebook.com">
            Facebook
          </a>
          <p className="p_olvidar_contraseña">
            <a className="a_olvidar_contraseña" href="">
              ¿Haz olvidado tu contraseña?
            </a>
          </p>
          <p className="p_registrarse">
            <a className="a_registrarse" onClick={() => navigate("/register")}>
              Registrarse
            </a>
          </p>

          <div>
            <select
              value={i18n.language}
              className="form-select form-select-sm"
              onChange={changeLang}
            >
              <option value="en">{t("english")}</option>
              <option value="es">{t("spanish")}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
