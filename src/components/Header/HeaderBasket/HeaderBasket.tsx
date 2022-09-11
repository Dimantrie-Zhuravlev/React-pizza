import React from "react";

import SeparatorLine from "../../SeparatorLine";
import classes from "../Header.module.scss";
import HeaderNameSite from "../HeaderNameSite/HeaderNameSite";

const HeaderMain = () => {
  return (
    <>
      <div className={classes["header-container"]}>
        <HeaderNameSite />
      </div>
      <SeparatorLine color="#F7F7F7" />
    </>
  );
};

export default HeaderMain;
