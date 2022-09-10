import React from "react";
import "./EmptyBasket.scss";
import { Link } from "react-router-dom";

import shopCart from "../../icons/shopping-cart.svg";

const EmptyBasket = () => {
  return (
    <div className={"empty-basket-container"}>
      <h2>Корзина пустая &#128529;</h2>
      <h3>
        Вероятней всего, вы не заказывали ещё пиццу.<br></br>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </h3>
      <div style={{ width: "25%", margin: "40px auto " }}>
        <img src={shopCart}></img>
      </div>
      <Link to="/">
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
};

export default EmptyBasket;
