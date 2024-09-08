import { useNavigate } from "react-router-dom";
import "./Login.css";
import "./Recuperar_contraseña.css";
import "./Email_enviado.css";

export function Email_enviado() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="div_h2-ev">
        <h2 className="h2_ev">Email enviado</h2>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 140 1400 150">
        <path d="M0,192L48,208C96,224,192,256,288,272C384,288,480,288,576,272C672,256,768,224,864,197.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      <div className="div_p_rc">
        <p className="p_rc">
          Revisa tu correo electronico, abre el email que te hemos enviado y haz
          click en el enlace para restablecer tu contraseña.
        </p>
      </div>
      <div class="div_sub_ev">
        <input
          class="boton_ingresar"
          type="submit"
          onClick={() => navigate("/login")}
        ></input>
      </div>
    </div>
  );
}
