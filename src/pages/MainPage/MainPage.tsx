import React from "react";

import FilterPizzas from "../../components/FiltersPizzas";

import "./MainPage.scss";

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <FilterPizzas></FilterPizzas>
    </div>
  );
};

export default MainPage;
