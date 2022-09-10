import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import BasketPage from "./BasketPage/BasketPage";

const App = () => {
  return (
    <div className="up">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/basket" element={<BasketPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
