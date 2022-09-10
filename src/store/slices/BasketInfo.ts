import { createSlice } from "@reduxjs/toolkit";

import { IListPizzas } from "../../types/StateRedux";

const initialState = {
  summ: 0,
  valuePizzas: 0,
  basketPizzas: [],
  basketPizzasId: [],
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
    addNewIdPizza(state, action) {
      if (!state.basketPizzasId.includes(action.payload))
        state.basketPizzasId.push(action.payload);
    },
    addBasketPizza(state, action) {
      console.log(action);
    },
  },
});

export const { addSumm, addOnePizza, addNewIdPizza, addBasketPizza } =
  BasketInfo.actions;
export default BasketInfo.reducer;
