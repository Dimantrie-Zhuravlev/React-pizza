import React from "react";
import { Outlet } from "react-router-dom";

import logo from "../../icons/header-icon.svg";
import SeparatorLine from "../SeparatorLine";

import classes from "./Header.module.scss";

const Header = () => {
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
        <button className={classes["header-container__to-basket"]}>
          1112141241241
        </button>
      </div>
      <SeparatorLine />

      <Outlet />
    </>
  );
};

export default Header;
