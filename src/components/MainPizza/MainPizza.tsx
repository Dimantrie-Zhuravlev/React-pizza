import React from "react";

import { IMainPizza } from "../../types/pizzas";

import "./MainPizza.scss";

const MainPizza = (props: { pizza: IMainPizza }) => {
  return (
    <div className={"pizza-container"}>
      <div className={"pizza-image"}>
        <img src={props.pizza.imageUrl} />
      </div>
      <span className={"pizza-name"}>{props.pizza.title}</span>
      <div className={"pizza-character"}>
        <div className={"pizza-character__dough"}>
          <span className={"dough-active"}>Тонкое</span>
          <span>Традиционное</span>
        </div>
        <div className={"pizza-character__size"}>
          <span>26 см</span>
          <span>30 см</span>
          <span>40 см</span>
        </div>
      </div>
      <div className={"pizza-price-container"}>
        <span className={"pizza-price"}>{props.pizza.price[0]} руб</span>
        <button>+ добавить</button>
      </div>
    </div>
  );
};

export default MainPizza;
