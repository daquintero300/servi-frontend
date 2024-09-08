import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Recuperar_contraseña.css";

export function Recuperar_contraseña() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="hola">
        <h2 className="h2_recuperar_contraseña">Recuperar contraseña</h2>
      </div>
      <div className="div_p_rc">
        <p className="p_rc">
          Dinos el correo electronico con el que te registraste y te enviaremos
          un email para que puedas restaurar tu contraseña.
        </p>
      </div>
      <div class="dv_inf_rc">
        <div class="form_input">
          <label>
            Correo
            <input type="text" />
          </label>
        </div>
      </div>
      <div class="div_sub_rc">
        <input
          class="boton_ingresar"
          type="submit"
          onClick={() => navigate("/email_enviado")}
        ></input>
      </div>
    </div>
  );
}
