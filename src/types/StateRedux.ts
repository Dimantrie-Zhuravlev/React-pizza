import { IMainPizza } from "./pizzas";

export interface IListPizzas {
  pizzas: Array<IMainPizza>;
  loading: boolean;
}

export interface StatePizzas {
  SomePizzas: IListPizzas;
}
