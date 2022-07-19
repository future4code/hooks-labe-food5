import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cadastro from "../Pages/Cadastro/Cadastro"
import Login from "../Pages/Login/Login"
import MeuEndereço from "../Pages/MeuEndereço/MeuEndereço"

const Router=()=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Login/>} />
            <Route path="/Cadastro" element={<Cadastro/>}/>
            <Route path="/MeuEndereço" element={<MeuEndereço/>}/>
        </Routes>
        </BrowserRouter>
    )
}