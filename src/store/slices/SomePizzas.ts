import { createSlice } from "@reduxjs/toolkit";

// import { fetchPizzas } from "../../services/Pizzas/kek";
// import { IListPizzas } from "../../types/StateRedux";

// const initialState = {
//   pizzas: [],
//   loading: false,
// } as IListPizzas;

const initialState = {
  summ: 0,
};

export const articlesList = createSlice({
  name: "Pizzas",
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchPizzas.pending, (state) => {
  //         state.loading = true;
  //       })
  //       .addCase(fetchPizzas.fulfilled, (state, action) => {
  //         console.log(action);
  //         // state.pizzas = action.payload.pizzas;
  //         state.loading = false;
  //       })
  //       .addCase(fetchPizzas.rejected, (state) => {
  //         console.log(state.pizzas, "ошибка");
  //         state.loading = false;
  //       });
  //   },
});

export default articlesList.reducer;
