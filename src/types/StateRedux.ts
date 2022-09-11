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
