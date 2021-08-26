import "./App.css";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { Routes } from "./Routes";


function App() {
  return (
   
      <ThemeProvider theme={theme}>
        <Routes/>
      </ThemeProvider>
    
  );
}

export default App;