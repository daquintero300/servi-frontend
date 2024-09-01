import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Register() {
    const navigate = useNavigate()
  return (
    <div>
      <div className="hola">
        <h2 className="h2_registrarse">Registrarse</h2>
        <p>Completa todos los campos</p>
      </div>
      <div className="register_information">
        <div className="form_input">
          <label>
            Nombre*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Apellido*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Fecha de nacimiento*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            c.c.*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Telefono*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Email*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Contraseña*
            <input type="text" />
          </label>
        </div>
        <div className="form_input">
          <label>
            Confirmar contraseña*
            <input type="password" />
          </label>
        </div>
      </div>
      <div className="div_continuar">
        <input className="boton_ingresar" type="submit" />
        <div className="div_ya_cuenta">
          <p className="p_olvidar_contraseña">
            {" "}
            <a className="a_olvidar_contraseña" href="">
              ¿Ya tienes una cuenta?
            </a>
          </p>
          <p className="p_registrarse">
            {" "}
            <button className="a_registrarse" onClick={() => navigate('/login')}>
              Ingresar
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
