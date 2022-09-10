import { configureStore, combineReducers } from "@reduxjs/toolkit";

import SomePizzas from "./slices/BasketInfo";

const rootReducer = combineReducers({
  SomePizzas,
});

/* eslint-disable no-underscore-dangle */
export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;

export default store;
