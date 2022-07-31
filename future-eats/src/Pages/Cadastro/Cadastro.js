import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import photo from "../Login/photo.PNG"
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Button=styled.button`
  background-color: mediumseagreen; 
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

`
const Caixa=styled.div`
display: grid;
justify-content: center;
padding: 75px;
`
const Imagenzinha=styled.div`
display: flex;
align-items: center;
justify-content: center;
 `

const Cadastro=()=>{
    const[Nome,setNome]=useState("")
    const[email,setEmail]=useState("")
    const[CPF,setCPF]=useState("")
    const[senha,setSenha]=useState("")
    const navigate = useNavigate();
    
    const mudarNome=(event)=>{
        setNome(event.target.value)
    }
    const mudarEmail=(event)=>{
        setEmail(event.target.value)
    }
    const mudarCPF=(event)=>{
        setCPF(event.target.value)

    }
    const mudarSenha=(event)=>{
        setSenha(event.target.value)
    }

    const cadastro=()=>{
        console.log(cadastro)
        const URL="https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/signup"
        const  header={
            headers:{
              auth:window.localStorage.getItem("token")
            }
          }
        const body={
            name:Nome,
            email:email,
            cpf:CPF,
            password:senha
        }
        axios.post(URL,body,header)
        .then((res)=>{
            alert("Sucesso")
            console.log(res.data.token)
            navigate("/meuendereco");
        }).catch((res)=>{
            alert("invalido")
        })
    }

    return (
        <Caixa>
            <Imagenzinha>
                <img src={photo} />
              </Imagenzinha>
            <div>
            <h2>Cadastrar</h2>
            <div>
                <TextField
                name="nome"
                placeholder="Nome e Sobrenome"
                label="Nome*"
                onChange={event=>mudarNome(event)}
                value={Nome}>

                </TextField>
            </div>
            <div>
                <TextField
                name="e-mail"
                placeholder="email@email.com"
                label="E-mail*"
                value={email}
                onChange={event=>mudarEmail(event)}>
                </TextField>
            </div>
            <div>
                <TextField
                name="cPF"
                placeholder="000.000.000-00"
                label="CPF*"
                value={CPF}
                onChange={event=>mudarCPF(event)}>
                </TextField>
            </div>
            <div>
                <TextField
                name="senha"
                placeholder="Mínimo 6 caract"
                label="Senha*"
                value={senha}
                onChange={event=>mudarSenha(event)}>
                </TextField>
            </div>
            <div>
                <TextField
                name="confirma"
                placeholder="Confirma Senha Anterior"
                label="Confirma*">
                </TextField>
            </div>
            <div><Button onClick={()=>cadastro()}>Criar</Button></div>
            </div>
        </Caixa>
    )
}
export default Cadastro;