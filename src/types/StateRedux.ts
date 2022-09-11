import { IRatingFilter } from "./mainFilters";

export interface IBasketPizza {
  id: string;
  imageUrl: string;
  name: string;
  value: number;
  price: number;
}

export interface IListPizzas {
  pizzas: Array<IBasketPizza>;
  basketPizzasId: Array<string>;
}

export interface StatePizzas {
  SomePizzas: IListPizzas;
}

export interface ReduxMainFilters {
  demandFilter: IRatingFilter;
}

export interface StateMainFilters {
  FiltersMain: ReduxMainFilters;
}
