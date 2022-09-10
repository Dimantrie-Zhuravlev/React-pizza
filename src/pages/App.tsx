import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

import MainPage from "./MainPage/MainPage";
import BasketPage from "./BasketPage/BasketPage";
// import PageSignIn from "./PageSignIn/SignInPage";
// // import PageHome from "./PageHome/Home";
// import PageArticles from "./PageArticles/PageArticles";
// import UnknownPage from "./unknownPage/unknownPage";
// import FullPage from "./FullPage/FullPage";
// import PageEditProfile from "./PageEditProfile/PageEditProfile";
// import PageNewArticle from "./PageNewArticle/PageNewArticle";

const App = () => {
  return (
    <div className="up">
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/basket" element={<BasketPage />}></Route>
        {/* <Route path="*" element={<UnknownPage />}></Route> */}
      </Routes>
    </div>
  );
};

export default App;
