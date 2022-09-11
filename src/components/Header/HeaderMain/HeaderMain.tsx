import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { StatePizzas } from "../../../types/StateRedux";
import logo from "../../../icons/header-icon.svg";
import SeparatorLine from "../../SeparatorLine";
import classes from "../Header.module.scss";

const HeaderMain = () => {
  return (
    <>
      <div className={classes["header-container"]}>
        <div className={classes["header-container__name"]}>
          <div className={classes["header-logo"]}>
            <img src={logo} />
          </div>
          <div>
            <span className={classes["header-name"]}>REACT PIZZA</span>
            <br></br>
            <span className={classes["header-description"]}>
              самая вкусная пицца во вселенной
            </span>
          </div>
        </div>
        <Link to={"./basket"} style={{ textDecoration: "none" }}>
          <div className={classes["header-container__to-basket"]}>
            <span>
              {useSelector((state: StatePizzas) =>
                state.SomePizzas.pizzas.reduce(
                  (prev, curr) => prev + curr.price * curr.value,
                  0
                )
              )}
              &#8381;
            </span>
            <div className={classes["to-basket__splash"]}>1</div>
            <span>
              {useSelector((state: StatePizzas) =>
                state.SomePizzas.pizzas.reduce(
                  (curr, prev) => curr + prev.value,
                  0
                )
              )}
              <ShoppingCartOutlined />
            </span>
          </div>
        </Link>
      </div>
      <SeparatorLine color="#F7F7F7" />
    </>
  );
};

export default HeaderMain;
