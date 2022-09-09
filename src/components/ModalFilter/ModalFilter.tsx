import React, { useState } from "react";
import classNames from "classnames";

import { IRatingFilter } from "../../types/mainTypes";

import style from "./ModalFilter.module.scss";
// changeState: (num: boolean) => void;
const ModalFilter = (props: {
  ratingFilter: IRatingFilter[];
  changeState: (filter: IRatingFilter) => void;
  currentFilter: IRatingFilter;
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
          }}
        >
          {res}
        </span>
      ))}
    </div>
  );
};

export default ModalFilter;
