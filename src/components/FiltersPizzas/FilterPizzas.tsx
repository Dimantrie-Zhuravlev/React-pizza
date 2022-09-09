import React, { useState } from "react";
import classes from "classnames";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import { IMeatFilter, IRatingFilter } from "../types/mainTypes";
import ModalFilter from "../ModalFilter";

import styles from "./FilterPizzas.module.scss";

const FilterPizzas = () => {
  const [meatFilter, setmeatFilter] = useState<IMeatFilter>("Все");
  const [isChangeFilter, setchange] = useState(false);
  const [ratingFilter, setratingFilter] =
    useState<IRatingFilter>("популярности");
  const ratingFilters: IRatingFilter[] = ["популярности", "цене", "алфавиту"];
  const typeFilters: IMeatFilter[] = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  const modalFilter = isChangeFilter ? (
    <div style={{ position: "absolute", right: "0", top: "30px" }}>
      <ModalFilter
        ratingFilter={ratingFilters}
        changeState={setratingFilter}
        currentFilter={ratingFilter}
      />
    </div>
  ) : null;
  return (
    <>
      <div className={styles["filters-container"]}>
        <div>
          {typeFilters.map((res: IMeatFilter) => (
            <button
              className={classes(styles.typePizza, {
                [styles.active]: meatFilter === res,
              })}
              onClick={() => setmeatFilter(res)}
              key={res}
            >
              {res}
            </button>
          ))}
        </div>
        <div className={styles["filter-rating"]}>
          {isChangeFilter ? (
            <CaretDownOutlined style={{ marginRight: "4px" }} />
          ) : (
            <CaretUpOutlined style={{ marginRight: "4px" }} />
          )}
          Сортировка по:
          <span
            onClick={() => setchange(!isChangeFilter)}
            className={styles["filter-rating__nameFilter"]}
          >
            {ratingFilter}
          </span>
          {modalFilter}
        </div>
      </div>
      <h2>Все пиццы</h2>
    </>
  );
};

export default FilterPizzas;
