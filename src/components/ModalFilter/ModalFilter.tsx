import React, { FC } from "react";
import classNames from "classnames";

import { IRatingFilter } from "../../types/mainFilters";
import { setDemandFilter } from "../../store/slices/MainFilters";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

import style from "./ModalFilter.module.scss";

const ModalFilter: FC<{ changeVisibility: (visib: boolean) => void }> = (
  props
) => {
  const dispatch = useAppDispatch();
  const currfill = useAppSelector((state) => state.FiltersMain.demandFilter);
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
