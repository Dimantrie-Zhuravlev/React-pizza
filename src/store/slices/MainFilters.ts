import { createSlice } from "@reduxjs/toolkit";

import { ReduxMainFilters } from "../../types/StateRedux";
import { IRatingFilter } from "../../types/mainFilters";

const initialState = {
  demandFilter: "популярности",
} as ReduxMainFilters;

export const MainFilters = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {
    setDemandFilter(state, action: { payload: IRatingFilter }) {
      state.demandFilter = action.payload;
    },
  },
});

export const { setDemandFilter } = MainFilters.actions;
export default MainFilters.reducer;
