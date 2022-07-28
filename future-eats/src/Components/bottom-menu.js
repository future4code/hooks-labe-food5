import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BottomNavigation } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import styled from "styled-components";

const BottomNavigationContainer = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const BottomMenu = () => {
  return (
    <BottomNavigationContainer>
      <BottomNavigation>
        <BottomNavigationAction icon={<HomeIcon />} />
        <BottomNavigationAction icon={<ShoppingCartIcon />} />
        <BottomNavigationAction icon={<PersonOutlineIcon />} />
      </BottomNavigation>
    </BottomNavigationContainer>
  );
};

export default BottomMenu;
