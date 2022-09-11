import { configureStore, combineReducers } from "@reduxjs/toolkit";

import SomePizzas from "./slices/BasketInfo";
import FiltersMain from "./slices/MainFilters";

const rootReducer = combineReducers({
  SomePizzas,
  FiltersMain,
});

/* eslint-disable no-underscore-dangle */
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
