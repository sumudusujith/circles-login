// import "./App.css";
import React, { useState } from 'react';
import { ThemeProvider } from "@emotion/react";
import theme from "@rebass/preset";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { Login } from "./components/pages/Login";
//import { Dashboard } from "./components/pages/Dashboard";

function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Route name="login">
          <Login></Login>
        </Route>
        <Redirect exact from="/" to="login" />
        {/* <Route name="dashboard">
          <Dashboard></Dashboard>
        </Route> */}


      </ThemeProvider>
    </Router>
  );
}

export default App;
