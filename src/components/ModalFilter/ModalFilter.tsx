import React, { FC } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { IRatingFilter } from "../../types/mainFilters";
import { StateMainFilters } from "../../types/StateRedux";
import { setDemandFilter } from "../../store/slices/MainFilters";

import style from "./ModalFilter.module.scss";

const ModalFilter: FC<{ changeVisibility: (visib: boolean) => void }> = (
  props
) => {
  const dispatch = useDispatch();
  const currfill = useSelector(
    (state: StateMainFilters) => state.FiltersMain.demandFilter
  );
  const ratingFilters: IRatingFilter[] = ["популярности", "цене", "алфавиту"];
  //  Если что менять тут типы сортировки
  return (
    <div className={style["modal-container"]}>
      {ratingFilters.map((res) => (
        <span
          key={res}
          className={classNames({
            [style.active]: currfill === res,
          })}
          onClick={() => {
            dispatch(setDemandFilter(res));
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
