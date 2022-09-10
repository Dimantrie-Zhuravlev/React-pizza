import React from "react";

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
      </div>
      <SeparatorLine color="#F7F7F7" />
    </>
  );
};

export default HeaderMain;
