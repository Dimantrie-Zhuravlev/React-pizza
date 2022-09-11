import { createSlice } from "@reduxjs/toolkit";

import {
  IActionAddId,
  IAddNewPizzaInBasket,
} from "../../types/reducersActions/IBasketInfo";
import { IListPizzas } from "../../types/StateRedux";

const initialState = {
  basketPizzasId: [],
  pizzas: [],
} as IListPizzas;

export const BasketInfo = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {
    deleteBasket(state) {
      state.basketPizzasId = [];
      state.pizzas = [];
    },
    addNewPizzaBasket(state, action: IAddNewPizzaInBasket) {
      if (!state.basketPizzasId.includes(action.payload.id)) {
        state.basketPizzasId.push(action.payload.id);
        state.pizzas.push(Object.assign(action.payload, { value: 1 }));
      } else {
        state.pizzas = state.pizzas.map((elem) =>
          elem.id === action.payload.id
            ? Object.assign(elem, { value: elem.value + 1 })
            : elem
        );
      }
    },
    addEditPizzaBasket(state, action: IActionAddId) {
      state.pizzas = state.pizzas.map((elem) =>
        elem.id === action.payload.id
          ? Object.assign(elem, { value: elem.value + 1 })
          : elem
      );
    },
    subtractEditPizzaBasket(state, action: IActionAddId) {
      state.pizzas = state.pizzas.map((elem) =>
        elem.id === action.payload.id
          ? Object.assign(elem, { value: elem.value - 1 })
          : elem
      );
    },
    deleteOneTypePizza(state, action: IActionAddId) {
      state.pizzas = state.pizzas.filter(
        (elem) => elem.id !== action.payload.id
      );
    },
  },
});

export const {
  deleteBasket,
  addNewPizzaBasket,
  addEditPizzaBasket,
  subtractEditPizzaBasket,
  deleteOneTypePizza,
} = BasketInfo.actions;
export default BasketInfo.reducer;
