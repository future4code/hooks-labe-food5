import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "../Pages/Cadastro/Cadastro";
import Home from "../Pages/Home/home";
import Login from "../Pages/Login/Login";
import MeuEndereco from "../Pages/MeuEndereco/MeuEndereco";
import CartPage from "../Pages/CartPage/CartPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/MeuEndereco" element={<MeuEndereco />} />
        <Route path="/" element={<Home />} />
        <Route path="/Carrinho" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
