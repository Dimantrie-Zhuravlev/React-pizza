import React from "react";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

import PizzaBasket from "../PizzaBasket";
import { StatePizzas } from "../../types/StateRedux";
// import SeparatorLine from "../SeparatorLine";

import "./PizzasBasket.scss";

const PizzasBasket = () => {
  const items = useSelector(
    (state: StatePizzas) => state.SomePizzas.basketPizzasId
  );
  return (
    <div className={"PizzasBasket-container"}>
      <div style={{ width: "800px", margin: "0 auto" }}>
        <div className={"basket-flex"}>
          <span className={"basket-flex__name"}>
            <ShoppingCartOutlined style={{ marginRight: "5px" }} /> Корзина
          </span>
          <span className={"basket-flex__basket"}>
            <DeleteOutlined /> очистить корзину
          </span>
        </div>
        {/* <SeparatorLine color="#F4F4F4" /> */}
        <div className={"PizzasBasket-items"}>
          {items.map((elem) => (
            <PizzaBasket key={elem} />
          ))}
        </div>
        <div className={`basket-flex basket-price`}>
          <span>
            Всего пицц:<span>10шт</span>
          </span>
          <span>
            Сумма заказа: <span>5000рублей</span>
          </span>
        </div>
        <div className={`basket-flex basket-flex__bottom`}>
          <button className={"basket-flex__bottom-return"}>
            <LeftOutlined style={{ marginRight: "8px" }} />
            Вернуться назад
          </button>
          <button className={"basket-flex__bottom-pay"}>Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default PizzasBasket;
