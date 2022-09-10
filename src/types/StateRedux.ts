// import { IMainPizza } from "./pizzas";

export interface IBasketPizza {
  id: string;
  imageUrl: string;
  name: string;
  // dough: string;
  // size: number;
  value: number;
  price: number;
}

export interface IListPizzas {
  pizzas: Array<IBasketPizza>;
  summ: number;
  valuePizzas: number;
  basketPizzasId: Array<string>;
}

export interface StatePizzas {
  SomePizzas: IListPizzas;
}
