import React from "react";
import {
  ShoppingCartOutlined,
  DeleteOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

import { deleteBasket } from "../../store/slices/BasketInfo";
import PizzaBasket from "../PizzaBasket";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

import "./PizzasBasket.scss";

const PizzasBasket = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.SomePizzas.pizzas);
  const totalPrice = useAppSelector((state) =>
    state.SomePizzas.pizzas.reduce(
      (prev, curr) => prev + curr.price * curr.value,
      0
    )
  );
  const totalPizzas = useAppSelector((state) =>
    state.SomePizzas.pizzas.reduce((prev, curr) => prev + curr.value, 0)
  );
  return (
    <div className={"PizzasBasket-container"}>
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
  );
};

export default PizzasBasket;
