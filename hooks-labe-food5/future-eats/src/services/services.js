import axios from "axios";
import { BASE_URL } from "../constants/urls";

// INICIO REQUISIÇÃO

// REQUISIÇÃO PARA LOGAR
export const login = (body, navigate, setLoading, setState) => {
    const url = BASE_URL + '/login'

    const request = axios.post(url, body)

    request.then((res) => {
        localStorage.setItem('token', res.data.token)
        setState(res.data.user)
        setLoading(false)
        navigate('/home')
    }).catch((err) => {
        notify("error", err.response.data.message)
        setLoading(false)
    })
}
