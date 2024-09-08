import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, Login, Register } from "../pages";
import { Recuperar_contraseña } from "../pages/controllers/login/Recuperar_contraseña";
import { Email_enviado } from "../pages/controllers/login/Email_enviado";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/recuperar_contraseña"
          element={<Recuperar_contraseña />}
        />
        <Route path="/email_enviado" element={<Email_enviado />} />
      </Routes>
    </BrowserRouter>
  );
};
