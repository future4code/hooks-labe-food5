import React, { useState } from "react";
import styled from "styled-components";
import { TextField } from "@mui/material";
import photo from "../Login/photo.PNG";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
const Caixa = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;
const Imagenzinha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MeuEndereco = () => {
  const navigate = useNavigate();

  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  const mudarLogradouro = (event) => {
    setLogradouro(event.target.value);
  };
  const mudarNumero = (event) => {
    setNumero(event.target.value);
  };
  const mudarComplemento = (event) => {
    setComplemento(event.target.value);
  };
  const mudarBairro = (event) => {
    setBairro(event.target.value);
  };
  const mudarCidade = (event) => {
    setCidade(event.target.value);
  };
  const mudarEstado = (event) => {
    setEstado(event.target.value);
  };

  const clienteEndereco = () => {
    console.log(logradouro, numero, complemento, bairro, cidade, estado);
    const URL =
      "https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/address";
    const header = {
      headers: {
        auth: window.localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
    };

    const body = {
      street: logradouro,
      number: numero,
      neighbourhood: bairro,
      city: cidade,
      state: estado,
      complement: complemento,
    };

    console.log(body);

    axios
      .put(URL, body, header)
      .then((res) => {
        alert("Sucesso , Agora pode podera Pedir sua Comida");

        window.localStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        alert("Erro ,Reveja seu cadastro porfavor ");
      });
  };

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
          onChange={(event) => mudarLogradouro(event)}
          value={logradouro}
        ></TextField>
      </div>
      <div>
        <TextField
          name="Número"
          placeholder="Número"
          label="Número"
          onChange={(event) => mudarNumero(event)}
          value={numero}
        ></TextField>
      </div>
      <div>
        <TextField
          name="Complemento"
          placeholder="Apto./Bloco*"
          label="Complemento"
          onChange={(event) => mudarComplemento(event)}
          value={complemento}
        ></TextField>
      </div>
      <div>
        <TextField
          name="Bairro"
          placeholder="Bairro"
          label="Bairro"
          onChange={(event) => mudarBairro(event)}
          value={bairro}
        ></TextField>
      </div>
      <div>
        <TextField
          name="Cidade"
          placeholder="Cidade"
          label="Cidade"
          onChange={(event) => mudarCidade(event)}
          value={cidade}
        ></TextField>
      </div>
      <div>
        <TextField
          name="Estado"
          placeholder="Estado"
          label="Estado"
          onChange={(event) => mudarEstado(event)}
          value={estado}
        ></TextField>
      </div>
      <Button onClick={() => clienteEndereco()}>Cadastra endereço</Button>
    </Caixa>
  );
};

export default MeuEndereco;
