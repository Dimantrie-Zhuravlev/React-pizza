import React, { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import cx from "classnames";

import { useAppDispatch } from "../../hooks/redux";
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
  const dispatch = useAppDispatch();
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
      <div className={style["pizza-container-info"]}>
        <div className={style["pizza-edit-container"]}>
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
          <span className={cx(style["pizza-name"], style["orange-margin"])}>
            {currentValue}
          </span>
          <button
            onClick={() => {
              dispatch(addEditPizzaBasket({ id }));
              changeCurrentValue(currentValue + 1);
            }}
            className={style["pizza-edit-value"]}
          >
            +
          </button>
        </div>
        <div
          className={cx(style["pizza-name"], style["pizza-oneprice-container"])}
        >
          <span>{price * value} &#8381; /</span>
          <span className={style["pizza-one-price"]}>{price} за шт</span>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(deleteOneTypePizza({ id }));
        }}
        className={style["pizza-delete"]}
      >
        <CloseOutlined />
      </button>
    </div>
  );
};

export default PizzaBasket;
