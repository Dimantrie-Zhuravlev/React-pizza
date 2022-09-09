// import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPizzas = () =>
  fetch(`https://631b156edc236c0b1eec3ff0.mockapi.io/pizzas`)
    .then((res) => res.json())
    .then((res) => res);
