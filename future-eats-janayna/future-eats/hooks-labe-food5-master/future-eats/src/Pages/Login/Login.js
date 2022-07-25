import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components"
import { TextField } from "@mui/material";

const Caixa=styled.div`
display: grid;
justify-content: center;
padding: 75px;
`
const Logotipo=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Button=styled.button`
  background-color: mediumseagreen; 
  border: none;
  color: black;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

`

const Login=()=>{
  const [nome,setNome]=useState("")
  const [senha,setSenha]=useState("")

   const mudarNome=(event)=>{
    setNome(event.target.value)
   }
   const mudarSenha=(event)=>{
    setSenha(event.target.value)
   }


   axios.post
   ("https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/login",{

   }).then((rest)=>{
    
   }).catch((erro)=>{
    console.log(erro)
   })



    return (
            <Caixa>
              
              <Logotipo> <p>Entrar</p></Logotipo>
             <div>
             <TextField
             name="email"
             placeholder="email@email.com"
             label="E-email*"
             fullWidth
             ></TextField>
             <TextField 
             name="Senha"
             placeholder="Minimo 6 caractere"
             label="Senha*"
             fullWidth>
             </TextField>
             </div>
             <Button>Entrar</Button>
             <br/>
             <p>Não Possui Cadastro ? <a href=''>Clique Aqui</a>  </p> 
              
             
           </Caixa>
    )
}

export default Login