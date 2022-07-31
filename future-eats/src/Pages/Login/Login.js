import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { TextField } from "@mui/material";
import photo from "../Login/photo.PNG";
import { useNavigate } from "react-router-dom";

const Caixa = styled.div`
  display: grid;
  justify-content: center;
  padding: 75px;
`;
const Logotipo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
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
`;
const Caixinha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Imagenzinha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    transform: scale(1.5);
  }
`;

const Login = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");

  const mudarNome = (event) => {
    setNome(event.target.value);
  };
  const mudarSenha = (event) => {
    setSenha(event.target.value);
  };

  const logando = () => {
    console.log(nome, senha);
    const URL =
      "https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/login";

    const body = {
      email: nome,
      password: senha,
    };

    axios
      .post(URL, body)
      .then((res) => {
        window.localStorage.setItem("token", res.data.token);
        navigate("/meuendereco");
      })
      .catch((erro) => {
        alert("tente de novo");
        console.log(erro);
      });
  };

  return (
    <Caixa>
      <Imagenzinha>
        <img src={photo} />
      </Imagenzinha>
      <Logotipo>
        {" "}
        <p>Entrar</p>
      </Logotipo>
      <div>
        <TextField
          name="email"
          placeholder="email@email.com"
          label="E-mail*"
          fullWidth
          onChange={(event) => mudarNome(event)} //memorizar
          value={nome}
        ></TextField>
        <TextField
          name="Senha"
          placeholder="Minimo 6 caractere"
          label="Senha*"
          fullWidth
          onChange={(event) => mudarSenha(event)}
          value={senha}
        ></TextField>
      </div>
      <Button onClick={() => logando()}>Entrar</Button>
      <br />
      <Caixinha>
        <p>

          Não Possui Cadastro ? <a href="/Cadastro">Clique Aqui</a>{" "}

        </p>
      </Caixinha> 
    </Caixa>
  );
};

export default Login;
