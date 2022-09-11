import { createSlice } from "@reduxjs/toolkit";

import { IListPizzas } from "../../types/StateRedux";

const initialState = {
  basketPizzasId: [],
  pizzas: [],
} as IListPizzas;

export const BasketInfo = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {
    addNewIdPizzaId(state, action) {
      if (!state.basketPizzasId.includes(action.payload))
        state.basketPizzasId.push(action.payload);
    },
    deleteBasket(state) {
      state.basketPizzasId = [];
      state.pizzas = [];
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
    deleteOneTypePizza(state, action) {
      state.pizzas = state.pizzas.filter((elem) => elem.id !== action.payload);
    },
  },
});

export const {
  addNewIdPizzaId,
  deleteBasket,
  addNewPizzaBasket,
  addEditPizzaBasket,
  subtractEditPizzaBasket,
  deleteOneTypePizza,
} = BasketInfo.actions;
export default BasketInfo.reducer;
