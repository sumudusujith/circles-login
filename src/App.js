import "./App.css";
import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { Routes } from "./Routes";

// import "./App.css";
// import { ThemeProvider } from "@emotion/react";
// import theme from "@rebass/preset";
// import {
//   BrowserRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
// import { Login } from "./components/pages/Login";
// import { Dashboard } from "./components/pages/Dashboard";

function App() {
  return (
   // <Router>
      <ThemeProvider theme={theme}>

        {/* <Switch>
          <Route exact path="/login" component={Login} />

          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="login" />
        </Switch> */}
        <Routes/>
      </ThemeProvider>
    
  );
}

export default App;