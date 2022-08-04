import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";

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

const Cadastro=()=>{
    return (
        <div>
            <div>
            <h2>Cadastrar</h2>
            <div>
                <TextField
                name="Nome"
                placeholder="Nome e Sobrenome"
                label="Nome">
                </TextField>
            </div>
            <div>
                <TextField
                name="E-mail"
                placeholder="email@email.com"
                label="E-mail">
                </TextField>
            </div>
            <div>
                <TextField
                name="CPF"
                placeholder="000.000.000-00"
                label="CPF">
                </TextField>
            </div>
            <div>
                <TextField
                name="Senha"
                placeholder="Mínimo 6 caract"
                label="Senha">
                </TextField>
            </div>
            <div>
                <TextField
                name="Confirma"
                placeholder="Confirma Senha Anterior"
                label="Confirma">
                </TextField>
            </div>
            <div><Button>Criar</Button></div>
            </div>
        </div>
    )
}
export default Cadastro;