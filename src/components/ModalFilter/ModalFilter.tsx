import React, { useState } from "react";
import classNames from "classnames";

import { IRatingFilter } from "../../types/mainTypes";

import style from "./ModalFilter.module.scss";

const ModalFilter = (props: {
  ratingFilter: IRatingFilter[];
  changeState: (filter: IRatingFilter) => void;
  currentFilter: IRatingFilter;
  changeVisibility: (visib: boolean) => void;
}) => {
  const [currentFilter, changecurrentFilter] = useState(props.currentFilter);
  return (
    <div className={style["modal-container"]}>
      {props.ratingFilter.map((res) => (
        <span
          key={res}
          className={classNames({ [style.active]: currentFilter === res })}
          onClick={() => {
            changecurrentFilter(res);
            props.changeState(res);
            props.changeVisibility(false);
          }}
        >
          {res}
        </span>
      ))}
    </div>
  );
};

export default ModalFilter;
