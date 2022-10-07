import React from "react";

import HeaderBasket from "../../components/Header/HeaderBasket";
import EmptyBasket from "../../components/EmptyBasket";
import PizzasBasket from "../../components/PizzasBasket";
import { useAppSelector } from "../../hooks/redux";

const BasketPage = () => {
  const isPizzas = useAppSelector((state) => state.SomePizzas.pizzas.length);
  return (
    <>
      <HeaderBasket></HeaderBasket>
      {isPizzas ? <PizzasBasket /> : <EmptyBasket />}
    </>
  );
};

export default BasketPage;
