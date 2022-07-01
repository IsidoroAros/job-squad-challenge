import React from "react";
import "./Styles/Main.scss";
import { LoginProvider } from "./Context/LoginContext";
import Router from "./Components/Router";

function App() {
  return (
    <LoginProvider>
      <Router />
    </LoginProvider>
  );
}

export default App;
