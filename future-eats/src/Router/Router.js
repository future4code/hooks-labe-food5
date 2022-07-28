import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/Login";
import MeuEndereco from "../Pages/MeuEndereco/MeuEndereco";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/MeuEndereco" element={<MeuEndereco />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
