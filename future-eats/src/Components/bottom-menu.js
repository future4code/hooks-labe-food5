import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BottomNavigation } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BottomNavigationContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const BottomMenu = () => {
  const navigate = useNavigate();
  return (
    <BottomNavigationContainer>
      <BottomNavigation>
        <BottomNavigationAction
          icon={<HomeIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={<ShoppingCartIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          icon={<PersonOutlineIcon />}
          onClick={() => navigate("/Login")}
        />
      </BottomNavigation>
    </BottomNavigationContainer>
  );
};

export default BottomMenu;
