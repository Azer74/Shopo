import React from "react";
import Home from "./components/Home/Home";
import AppStyle from "../src/App.module.scss";

function App() {
  return (
    <main className={AppStyle.main_scss}>
      <Home />
    </main>
  );
}

export default App;
