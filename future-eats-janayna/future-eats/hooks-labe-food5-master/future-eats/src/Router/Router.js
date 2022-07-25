import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cadastro from "../Pages/Cadastro/Cadastro"
import Login from "../Pages/Login/Login"
import MeuEndereço from "../Pages/MeuEndereço/MeuEndereço"
import CartPage from "../Pages/CartPage/CartPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router =()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="/Cadastro" element={<Cadastro/>}/>
            <Route path="/MeuEndereço" element={<MeuEndereço/>}/>
            <Route path={"/carrinho"} element={<CartPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
        </BrowserRouter>
    )
}


export default router