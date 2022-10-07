import { configureStore, combineReducers } from "@reduxjs/toolkit";

import SomePizzas from "./slices/BasketInfo";
import FiltersMain from "./slices/MainFilters";

const rootReducer = combineReducers({
  SomePizzas,
  FiltersMain,
});

/* eslint-disable no-underscore-dangle */
export const setStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setStore>;
export type AppDispatch = AppStore["dispatch"];

export default setStore;
