import React from "react";

import classes from "../Header.module.scss";
import logo from "../../../icons/header-icon.svg";

const HeaderNameSite = () => {
  return (
    <>
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
      ;
    </>
  );
};

export default HeaderNameSite;
