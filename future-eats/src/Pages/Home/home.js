import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

import SearchIcon from "@mui/icons-material/Search";

<h1>FutureEats</h1>;

const Home = () => {
  return (
    <div>
      <OutlinedInput
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        hintText="Search Tech Talk"
      ></OutlinedInput>
    </div>
  );
};

export default Home;
