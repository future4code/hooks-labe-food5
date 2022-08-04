import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import BottomMenu from "../../Components/bottom-menu";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const MenuRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  width: calc(100vw - 80px);
  overflow: scroll;
`;

const ItemRow = styled.div`
  margin-right: 10px;
`;

const TextLogo = styled.div`
  display: flex;
  justify-content: center;
  font-size: 16px;
  padding: 15px;
`;

const Container = styled.div`
  padding: 16px;
  margin-bottom: 50px;
`;

const CardRestaurants = styled.div`
  border-radius: 10px;
  border: solid 1px #b8b8b8;
  margin: 16px;
  display: flex;
  flex-direction: column;
`;

const ImgCardRestaurant = styled.img`
  border-radius: 10px;
`;

const ContainerCardInfo = styled.div`
  padding: 12px;
`;

const InfoCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoNameRestaurant = styled.div`
  color: #5cb646;
`;

const Home = () => {
  const navigate = useNavigate();
  const [restaurantes, setRestaurantes] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecianada, setCategoriaSelecionada] = useState();
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    } else {
      getRestaurants();
    }
  }, []);

  const getRestaurants = () => {
    const config = {
      headers: {
        auth: window.localStorage.getItem("token"),
      },
    };

    const URL = `https://us-central1-missao-newton.cloudfunctions.net/futureEatsC/restaurants`;

    axios
      .get(URL, config)
      .then((res) => {
        setRestaurantes(res.data.restaurants);

        const filteredUniqueCategories = [
          ...new Set(res.data.restaurants.map((item) => item.category)),
        ];

        setCategorias(filteredUniqueCategories);
      })
      .catch((err) => console.log(err));
  };

  const handleSelectedCategory = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  const handleSearchInputChange = (event) => {
    setSearchInputValue(event.target.value);
  };

  const renderRestaurantCard = (restaurante) => {
    if (categoriaSelecianada && restaurante.category !== categoriaSelecianada) {
      return;
    }

    if (
      searchInputValue &&
      restaurante.name.toLowerCase().indexOf(searchInputValue.toLowerCase()) ===
        -1
    ) {
      return;
    }

    return (
      <CardRestaurants>
        <ImgCardRestaurant
          src={restaurante.logoUrl}
          alt="logo"
          width="100%"
          height="150px"
        />
        <ContainerCardInfo>
          <InfoNameRestaurant>{restaurante.name}</InfoNameRestaurant>
          <InfoCard>
            <div>{restaurante.deliveryTime} min</div>
            <div>Frete R${restaurante.shipping},00</div>
          </InfoCard>
        </ContainerCardInfo>
      </CardRestaurants>
    );
  };

  return (
    <>
      <Container>
        <TextLogo>
          <b>FutureEats</b>
        </TextLogo>

        <OutlinedInput
          onChange={handleSearchInputChange}
          style={{ width: "100%" }}
          placeholder="Restaurante"
          value={searchInputValue}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        ></OutlinedInput>

        <MenuRow>
          <div style={{ display: "flex" }}>
            {categorias.map((categoria) => {
              return (
                <ItemRow
                  onClick={() => handleSelectedCategory(categoria)}
                  style={{
                    color:
                      categoriaSelecianada === categoria ? "#5CB646" : "black",
                  }}
                >
                  {categoria}
                </ItemRow>
              );
            })}
          </div>
        </MenuRow>

        <div>
          {restaurantes.map((restaurante) => {
            return renderRestaurantCard(restaurante);
          })}
        </div>
      </Container>
      <BottomMenu></BottomMenu>
    </>
  );
};

export default Home;
