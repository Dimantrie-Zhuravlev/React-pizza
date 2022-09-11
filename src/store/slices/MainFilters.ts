import { createSlice } from "@reduxjs/toolkit";

import {
  ReduxMainFilters,
  IRatingFilter,
  IMeatFilter,
} from "../../types/mainFilters";

const initialState = {
  demandFilter: "популярности",
  consistFilter: "Все",
} as ReduxMainFilters;

export const MainFilters = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {
    setDemandFilter(state, action: { payload: IRatingFilter }) {
      state.demandFilter = action.payload;
    },
    setConsistFilter(state, action: { payload: IMeatFilter }) {
      state.consistFilter = action.payload;
    },
  },
});

export const { setDemandFilter, setConsistFilter } = MainFilters.actions;
export default MainFilters.reducer;
