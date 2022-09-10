import { createSlice } from "@reduxjs/toolkit";

import { IListPizzas } from "../../types/StateRedux";

const initialState = {
  summ: 0,
  valuePizzas: 0,
  basketPizzasId: [],
  pizzas: [],
} as IListPizzas;

export const BasketInfo = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {
    addSumm(state, action) {
      state.summ += action.payload;
    },
    addOnePizza(state) {
      state.valuePizzas += 1;
    },
    substractOnePizza(state) {
      state.valuePizzas -= 1;
    },
    addNewIdPizzaId(state, action) {
      if (!state.basketPizzasId.includes(action.payload))
        state.basketPizzasId.push(action.payload);
    },
    deleteBasket(state) {
      state.basketPizzasId = [];
      state.pizzas = [];
      state.summ = 0;
      state.valuePizzas = 0;
    },
    addNewPizzaBasket(state, action) {
      state.pizzas.push(action.payload);
    },
    addEditPizzaBasket(state, action) {
      state.pizzas = state.pizzas.map((elem) =>
        elem.id === action.payload
          ? Object.assign(elem, { value: elem.value + 1 })
          : elem
      );
    },
    subtractEditPizzaBasket(state, action) {
      state.pizzas = state.pizzas.map((elem) =>
        elem.id === action.payload
          ? Object.assign(elem, { value: elem.value - 1 })
          : elem
      );
    },
  },
});

export const {
  addSumm,
  addOnePizza,
  substractOnePizza,
  addNewIdPizzaId,
  deleteBasket,
  addNewPizzaBasket,
  addEditPizzaBasket,
  subtractEditPizzaBasket,
} = BasketInfo.actions;
export default BasketInfo.reducer;
