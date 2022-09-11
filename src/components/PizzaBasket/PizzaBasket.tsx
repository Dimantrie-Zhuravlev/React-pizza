import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { IBasketPizza } from "../../types/StateRedux";
import {
  addEditPizzaBasket,
  subtractEditPizzaBasket,
  deleteOneTypePizza,
} from "../../store/slices/BasketInfo";

import style from "./PizzaBasket.module.scss";

const PizzaBasket = (props: { pizza: IBasketPizza }) => {
  const { imageUrl, name, id, value, price } = props.pizza;
  const [, dough, size] = id.split(" ");
  const [currentValue, changeCurrentValue] = useState(value);
  const dispatch = useDispatch();
  return (
    <div className={style["pizza-container"]}>
      <div className={style["pizza-container__main"]}>
        <div className={style["pizza-image-container"]}>
          <img src={imageUrl} />
        </div>
        <div>
          <span style={{ marginBottom: "3px" }} className={style["pizza-name"]}>
            {name}
          </span>
          <br></br>
          <span className={style["pizza-dough"]}>
            {dough} тесто, {size} см
          </span>
        </div>
      </div>
      <div className={style["pizza-container__split"]}>
        <div>
          <button
            onClick={() => {
              dispatch(addEditPizzaBasket({ id }));
              changeCurrentValue(currentValue + 1);
            }}
            className={style["pizza-edit-value"]}
          >
            +
          </button>
          <span style={{ margin: "0 16px" }} className={style["pizza-name"]}>
            {currentValue}
          </span>
          <button
            onClick={() => {
              dispatch(subtractEditPizzaBasket({ id }));
              changeCurrentValue(currentValue - 1);
              if (currentValue === 1) {
                dispatch(deleteOneTypePizza({ id }));
              }
            }}
            className={style["pizza-edit-value"]}
          >
            -
          </button>
        </div>
        <span className={style["pizza-name"]}>
          {price * value} &#8381; /
          <span className={style["pizza-one-price"]}>{price} за шт</span>
        </span>
        <button
          onClick={() => {
            dispatch(deleteOneTypePizza({ id }));
          }}
          className={style["pizza-delete"]}
        >
          <CloseOutlined />
        </button>
      </div>
    </div>
  );
};

export default PizzaBasket;
