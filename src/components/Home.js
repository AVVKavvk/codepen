import React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import { StyledEngineProvider } from "@mui/material/styles";
import logo from "../img/vnlogo.png";

import Code from "./Code";
import Result from "./Result";
function Home() {
  return (
    <StyledEngineProvider injectFirst >
      <AppBar position="static" className="bg-[#0e0e0e]">
        <Toolbar>
          <img src={logo} alt="" width="60px" class="ml-6 mb-2" />
          <h1 className="text-2xl ml-8 ">Vipin's Editor</h1>
        </Toolbar>
      </AppBar>
      <hr style={{ border: "solid .1px gray ", width: "100%" }} />
      <Code />
      <Result />
    </StyledEngineProvider>
  );
}

export default Home;
