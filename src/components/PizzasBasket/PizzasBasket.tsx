import React from "react";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { deleteBasket } from "../../store/slices/BasketInfo";
import PizzaBasket from "../PizzaBasket";
import { StatePizzas } from "../../types/StateRedux";

import "./PizzasBasket.scss";

const PizzasBasket = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: StatePizzas) => state.SomePizzas.pizzas);
  const totalPrice = useSelector((state: StatePizzas) => state.SomePizzas.summ);
  const totalPizzas = useSelector(
    (state: StatePizzas) => state.SomePizzas.pizzas.length
  );
  return (
    <div className={"PizzasBasket-container"}>
      <div style={{ width: "800px", margin: "0 auto" }}>
        <div className={"basket-flex"}>
          <span className={"basket-flex__name"}>
            <ShoppingCartOutlined style={{ marginRight: "5px" }} /> Корзина
          </span>
          <span
            className={"basket-flex__basket"}
            onClick={() => dispatch(deleteBasket())}
          >
            <DeleteOutlined /> очистить корзину
          </span>
        </div>
        <div className={"PizzasBasket-items"}>
          {items.map((elem) => (
            <React.Fragment key={elem.id}>
              <PizzaBasket pizza={elem} />
            </React.Fragment>
          ))}
        </div>
        <div className={`basket-flex basket-price`}>
          <span className={"basket-price__first"}>
            Всего пицц:
            <span className={"basket-price__pizzas"}> {totalPizzas}шт.</span>
          </span>
          <span className={"basket-price__first"}>
            Сумма заказа:{" "}
            <span className={"basket-price__summ"}>{totalPrice} &#8381;</span>
          </span>
        </div>
        <div className={`basket-flex basket-flex__bottom`}>
          <Link to={"/"}>
            <button className={"basket-flex__bottom-return"}>
              <LeftOutlined style={{ marginRight: "8px" }} />
              Вернуться назад
            </button>
          </Link>
          <button
            onClick={() =>
              alert(
                `Вам следует оплатить ${totalPrice} рублей за ${totalPizzas} пицц`
              )
            }
            className={"basket-flex__bottom-pay"}
          >
            Оплатить сейчас
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzasBasket;
