import React from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import photo from "../Login/photo.PNG"

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
const Caixa=styled.div`
display: flex;
align-items: center;
justify-content: center;
`
const Imagenzinha=styled.div`
display: flex;
align-items: center;
justify-content: center;
 `
const MeuEndereço=()=>{

    return (
            <Caixa>
              <Imagenzinha>
                <img src={photo} />
              </Imagenzinha>
              <div> 
                <TextField 
                name="Logradouro"
                placeholder="Rua/Av."
                label="Logradouro"
                ></TextField>
              </div>
              <div>
                <TextField
                name="Número"
                placeholder="Número"
                label="Número">
                </TextField>
              </div>
              <div>
                <TextField
                name="Complemento"
                placeholder="Apto./Bloco*"
                label="Complemento">
                </TextField>
              </div>
              <div>
              <TextField
              name="Bairro"
              placeholder="Bairro"
              label="Bairro">
              </TextField>
              </div>
              <div>
                <TextField
                  name="Cidade"
                  placeholder="Cidade"
                  label="Cidade">
                </TextField>
              </div>
              <div>
                <TextField
                name="Estado"
                placeholder="Estado"
                label="Estado">
                </TextField>
              </div>
              <Button>Salvar</Button>
           </Caixa>
    )
}

export default MeuEndereço;