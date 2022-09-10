// import { IMainPizza } from "./pizzas";

export interface IBasketPizza {
  imageUrl: string;
  name: string;
  dough: string;
  size: number;
  value?: number;
  totalPrice?: number;
}

export interface IListPizzas {
  // pizzas: Array<IMainPizza>;
  summ: number;
  valuePizzas: number;
  basketPizzas: Array<IBasketPizza>;
  basketPizzasId: Array<string>;
}

export interface StatePizzas {
  SomePizzas: IListPizzas;
}
