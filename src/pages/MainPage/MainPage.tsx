import React from "react";

import FilterPizzas from "../../components/FiltersAndPizzas";
import HeaderMain from "../../components/Header/HeaderMain";

const MainPage = () => {
  return (
    <div className="mainpage-container">
      <HeaderMain></HeaderMain>
      <FilterPizzas></FilterPizzas>
    </div>
  );
};

export default MainPage;
