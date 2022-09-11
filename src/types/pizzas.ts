export interface IMainPizza {
  id: number;
  imageUrl: string;
  title: string;
  types: Array<number>;
  sizes: Array<number>;
  price: Array<number>;
  category: number;
  rating: number;
  consist: Array<string>;
}
export type IListPizzas = Array<IMainPizza>;
