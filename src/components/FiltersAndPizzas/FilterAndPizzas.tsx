import React, { useState, useEffect } from "react";
import classes from "classnames";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Spin } from "antd";

import { IMeatFilter, IRatingFilter } from "../../types/mainTypes";
import { IMainPizza } from "../../types/pizzas";
import MainPizza from "../MainPizza";
import ModalFilter from "../ModalFilter";
import { fetchPizzas } from "../../services/Pizzas/kek";

import styles from "./FilterPizzas.module.scss";

const FilterPizzas = () => {
  const [meatFilter, setmeatFilter] = useState<IMeatFilter>("Все");
  const [isChangeFilter, setchange] = useState(false);
  const [pizzas, setPizzas] = useState<Array<IMainPizza>>([]);
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
  const [isLoading, changeLoading] = useState(true);
  const modalFilter = isChangeFilter ? (
    <div style={{ position: "absolute", right: "0", top: "30px" }}>
      <ModalFilter
        ratingFilter={ratingFilters}
        changeState={setratingFilter}
        currentFilter={ratingFilter}
        changeVisibility={setchange}
      />
    </div>
  ) : null;
  useEffect(() => {
    fetchPizzas().then((res) => {
      setPizzas(res);
      changeLoading(false);
    });
  }, []);

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
      <h2 className={styles["all-pizzas"]}>Все пиццы</h2>
      {isLoading ? (
        <div style={{ textAlign: "center", color: "red" }}>
          <Spin size="large" />
        </div>
      ) : (
        <div className={styles["pizzas-container"]}>
          {pizzas.map((elem) => (
            <React.Fragment key={elem.id}>
              <MainPizza pizza={elem} />
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default FilterPizzas;