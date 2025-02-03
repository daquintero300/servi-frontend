import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./clientes/Login";
import AgregarCliente from "./clientes/AgregarCliente";
import RecuperarContrasena from "./clientes/RecuperarContrasena";
import Home from "./clientes/Home";
import { useState } from "react";
import EditarCliente from "./clientes/EditarCliente";
import AgregarInmueble from "./inmuebles/AgregarInmueble";
import EditarInmueble from "./inmuebles/EditarInmueble";
import ListarServicios from "./servicios/ListarServicios";
import PagosServicios from "./servicios/PagosServicios";
import Usuario from "./usuario/Usuario";
import EditarContrasena from "./clientes/EditarContrasena";

function App() {
  const [cliente, setUser] = useState({
    idCliente: "",
    estado: "",
    tipo_documento: "cc",
    numero_documento: "",
    nombre: "",
    apellido: "",
    fecha_nacimiento: "",
    telefono: "",
    email: "",
    contrasena: "",
  });

  const [inmuebles, setInmuebles] = useState([]);

  const [inmueble, setInmueble] = useState({
    estado: "",
    direccion: "Direccion",
    pais: "Pais",
    ciudad: "Ciudad",
    departamento: "Departamento",
  });

  const [servicio, setServicio] = useState({
    estado: "",
  });

  const [serviciosAgua, setServiciosAgua] = useState([]);

  const [serviciosLuz, setServiciosLuz] = useState([]);

  const [serviciosGas, setServiciosGas] = useState([]);

  const [modalUsuario, setModalUsuario] = useState(false);

  const [iconArrow, setIconArrow] = useState("icon_arrowClose");

  const [extendInfoUser, setExtendInfoUser] = useState(false);

  return (
    <div className="container">
      <BrowserRouter>
        <Usuario
          cliente={cliente}
          setUser={setUser}
          modalUsuario={modalUsuario}
          setModalUsuario={setModalUsuario}
          extendInfoUser={extendInfoUser}
          setExtendInfoUser={setExtendInfoUser}
          iconArrow={iconArrow}
          setIconArrow={setIconArrow}
        ></Usuario>
        <Routes>
          <Route exact path="/" element={<Login setUser={setUser} />} />
          <Route
            exact
            path="/home"
            element={
              <Home
                cliente={cliente}
                setUser={setUser}
                inmuebles={inmuebles}
                setInmuebles={setInmuebles}
                inmueble={inmueble}
                setInmueble={setInmueble}
                serviciosAgua={serviciosAgua}
                setServiciosAgua={setServiciosAgua}
                serviciosLuz={serviciosLuz}
                setServiciosLuz={setServiciosLuz}
                serviciosGas={serviciosGas}
                setServiciosGas={setServiciosGas}
                modalUsuario={modalUsuario}
                setModalUsuario={setModalUsuario}
              />
            }
          />
          <Route
            exact
            path="/recuperarContrasena"
            element={<RecuperarContrasena />}
          />
          <Route
            exact
            path="/editarContrasena"
            element={
              <EditarContrasena
                user={cliente}
                setUser={setUser}
                setModalUsuario={setModalUsuario}
              />
            }
          />
          Clientes
          <Route exact path="/agregarCliente" element={<AgregarCliente />} />
          <Route
            exact
            path="/editarCliente/:idCliente"
            element={<EditarCliente user={cliente} setUser={setUser} />}
          />
          Inmuebles
          <Route
            exact
            path="/agregarInmueble"
            element={<AgregarInmueble cliente={cliente} setInm={setInmueble} />}
          />
          <Route
            exact
            path="/editarInmueble/:idInmueble"
            element={<EditarInmueble cliente={cliente} />}
          />
          Servicios
          <Route
            exact
            path="/listarInmuebles/listarServicios/:idInmueble/:tipoServicio"
            element={
              <ListarServicios
                cliente={cliente}
                inmueble={inmueble}
                setInmueble={setInmueble}
                serviciosAgua={serviciosAgua}
                setServiciosAgua={setServiciosAgua}
                serviciosLuz={serviciosLuz}
                setServiciosLuz={setServiciosLuz}
                serviciosGas={serviciosGas}
                setServiciosGas={setServiciosGas}
                setModalUsuario={setModalUsuario}
                setServicio={setServicio}
              />
            }
          />
          <Route
            exact
            path="/listarInmuebles/listarServicios/:idInmueble/pagos/:idServicio"
            element={
              <PagosServicios
                cliente={cliente}
                inmueble={inmueble}
                setInmueble={setInmueble}
                serviciosAgua={serviciosAgua}
                setServiciosAgua={setServiciosAgua}
                serviciosLuz={serviciosLuz}
                setServiciosLuz={setServiciosLuz}
                serviciosGas={serviciosGas}
                setServiciosGas={setServiciosGas}
                setModalUsuario={setModalUsuario}
                servicio={servicio}
                setServicio={setServicio}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
