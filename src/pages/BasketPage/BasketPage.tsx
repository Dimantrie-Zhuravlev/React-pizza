import React from "react";
import { useSelector } from "react-redux";

import { StatePizzas } from "../../types/StateRedux";
import HeaderBasket from "../../components/Header/HeaderBasket";
import EmptyBasket from "../../components/EmptyBasket";
import PizzasBasket from "../../components/PizzasBasket";

const BasketPage = () => {
  const isPizzas = useSelector(
    (state: StatePizzas) => state.SomePizzas.pizzas.length
  );
  return (
    <>
      <HeaderBasket></HeaderBasket>
      {isPizzas ? <PizzasBasket /> : <EmptyBasket />}
    </>
  );
};

export default BasketPage;
