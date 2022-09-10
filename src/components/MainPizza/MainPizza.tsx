import React, { useState } from "react";
import className from "classnames";
import { useDispatch } from "react-redux";

import { IMainPizza } from "../../types/pizzas";
import {
  addSumm,
  addOnePizza,
  addNewIdPizza,
  addBasketPizza,
} from "../../store/slices/BasketInfo";

import "./MainPizza.scss";

const MainPizza = (props: { pizza: IMainPizza }) => {
  const { imageUrl, title: name } = props.pizza;
  const dispatch = useDispatch();
  const startDough = props.pizza.types[0] === 0 ? "тонкое" : "традиционное";
  const startSize =
    props.pizza.sizes[0] === 26 ? 26 : props.pizza.sizes[0] === 30 ? 30 : 40;
  const [dough, setDough] = useState<"традиционное" | "тонкое">(startDough);
  const [size, setSize] = useState<26 | 30 | 40>(startSize);
  const [totalpizzas, setTotalPizzas] = useState(0);
  const currentPrice =
    size === 26
      ? props.pizza.price[0]
      : size === 30
      ? props.pizza.price[1]
      : props.pizza.price[2];
  const currentPizzas =
    totalpizzas > 0 ? (
      <span
        className={className(
          { "cur-pizzas-mini": totalpizzas > 0 && totalpizzas < 10 },
          {
            "cur-pizzas": totalpizzas > 9,
          }
        )}
      >
        {totalpizzas}
      </span>
    ) : null;
  return (
    <div className={"pizza-container"}>
      <div className={"pizza-image"}>
        <img src={imageUrl} />
      </div>
      <span className={"pizza-name"}>{name}</span>
      <div className={"pizza-character"}>
        <div className={"pizza-character__dough"}>
          <span
            className={className(
              { "active-style-state": dough === "тонкое" },
              { "disabled-style": !props.pizza.types.includes(0) }
            )}
            onClick={() => setDough("тонкое")}
          >
            Тонкое
          </span>
          <span
            className={className(
              {
                "active-style-state": dough === "традиционное",
              },
              { "disabled-style": !props.pizza.types.includes(1) }
            )}
            onClick={() => setDough("традиционное")}
          >
            Традиционное
          </span>
        </div>
        <div className={"pizza-character__size"}>
          <span
            className={className(
              { "active-style-state": size === 26 },
              { "disabled-style": !props.pizza.sizes.includes(26) }
            )}
            onClick={() => setSize(26)}
          >
            26 см
          </span>
          <span
            className={className(
              { "active-style-state": size === 30 },
              { "disabled-style": !props.pizza.sizes.includes(30) }
            )}
            onClick={() => setSize(30)}
          >
            30 см
          </span>
          <span
            className={className(
              { "active-style-state": size === 40 },
              { "disabled-style": !props.pizza.sizes.includes(40) }
            )}
            onClick={() => setSize(40)}
          >
            40 см
          </span>
        </div>
      </div>
      <div className={"pizza-price-container"}>
        <span className={"pizza-price"}>{currentPrice} &#8381;</span>
        <button
          onClick={() => {
            const newId = `${props.pizza.id} ${dough} ${size}`;
            setTotalPizzas(totalpizzas + 1);
            dispatch(addSumm(currentPrice));
            dispatch(addOnePizza());
            dispatch(addNewIdPizza(newId));
            dispatch(addBasketPizza({ imageUrl, name, dough, size }));
          }}
        >
          + добавить {currentPizzas}
        </button>
      </div>
    </div>
  );
};

export default MainPizza;
