import React from "react";
import { Outlet } from "react-router-dom";

import classes from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={classes["header-container"]}>Header</div>
      <Outlet />
    </>
  );
};

export default Header;
