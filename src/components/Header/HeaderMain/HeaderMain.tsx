import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { StatePizzas } from "../../../types/StateRedux";
import SeparatorLine from "../../SeparatorLine";
import classes from "../Header.module.scss";
import HeaderNameSite from "../HeaderNameSite/HeaderNameSite";

const HeaderMain = () => {
  return (
    <>
      <div className={classes["header-container"]}>
        <HeaderNameSite />
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
