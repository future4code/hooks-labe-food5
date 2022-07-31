import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BottomNavigation } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const BottomNavigationContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const BottomMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
  return (
    <BottomNavigationContainer>
      <BottomNavigation>
        <BottomNavigationAction
          icon={
            <HomeIcon
              color={location.pathname === "/" ? "success" : "disabled"}
            />
          }
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={
            <ShoppingCartIcon
              color={location.pathname === "/Carrinho" ? "success" : "disabled"}
            />
          }
          onClick={() => navigate("/Carrinho")}
        />
        <BottomNavigationAction
          icon={
            <PersonOutlineIcon
              color={location.pathname === "/Login" ? "success" : "disabled"}
            />
          }
          onClick={() => navigate("/Login")}
        />
      </BottomNavigation>
    </BottomNavigationContainer>
  );
};

export default BottomMenu;
