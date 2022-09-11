// import { IBasketPizza } from "../StateRedux";

interface IAction {
  type: string;
}

export interface IActionAddId extends IAction {
  payload: { id: string };
}

export interface IAddNewPizzaInBasket extends IAction {
  payload: {
    id: string;
    imageUrl: string;
    name: string;
    price: number;
  };
}
