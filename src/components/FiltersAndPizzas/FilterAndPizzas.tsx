import React, { useState, useEffect } from "react";
import classes from "classnames";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { setConsistFilter } from "../../store/slices/MainFilters";
import { StateMainFilters } from "../../types/StateRedux";
import { IMeatFilter } from "../../types/mainFilters";
import { IMainPizza } from "../../types/pizzas";
import MainPizza from "../MainPizza";
import ModalFilter from "../ModalFilter";
import { fetchPizzas } from "../../services/Pizzas/kek";

import styles from "./FilterPizzas.module.scss";

const FilterPizzas = () => {
  const dispatch = useDispatch();
  const [isChangeFilter, setchange] = useState(false);
  const [pizzas, setPizzas] = useState<Array<IMainPizza>>([]);
  const currentRatingFilter = useSelector(
    (state: StateMainFilters) => state.FiltersMain.demandFilter
  );
  const currentConsistFilter = useSelector(
    (state: StateMainFilters) => state.FiltersMain.consistFilter
  );
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
      <ModalFilter changeVisibility={setchange} />
    </div>
  ) : null;
  useEffect(() => {
    fetchPizzas().then((res) => {
      setPizzas(res);
      changeLoading(false);
    });
  }, []);
  //  Фильтрация состава
  const pizzasFilter =
    currentConsistFilter === "Все"
      ? pizzas
      : currentConsistFilter === "Мясные"
      ? pizzas.filter((elem) => elem.consist.includes("Мясо"))
      : currentConsistFilter === "Вегетарианская"
      ? pizzas.filter((elem) => !elem.consist.includes("Мясо"))
      : currentConsistFilter === "Гриль"
      ? pizzas.filter((elem) => elem.consist.includes("Гриль"))
      : currentConsistFilter === "Острые"
      ? pizzas.filter((elem) => elem.consist.includes("Острая"))
      : currentConsistFilter === "Закрытые"
      ? pizzas.filter((elem) => elem.consist.includes("Закрытая"))
      : [];
  // Сортировка спроса
  const pizzasDemand =
    currentRatingFilter === "цене"
      ? pizzasFilter.sort((a, b) => a.price[0] - b.price[0])
      : currentRatingFilter === "популярности"
      ? pizzasFilter.sort((a, b) => a.rating - b.rating)
      : pizzasFilter.sort((a, b) =>
          a.title < b.title ? -1 : a.title < b.title ? 1 : 0
        );

  return (
    <>
      <div className={styles["filters-container"]}>
        <div className={styles["filter-container"]}>
          {typeFilters.map((res: IMeatFilter) => (
            <button
              className={classes(styles.typePizza, {
                [styles.active]: currentConsistFilter === res,
              })}
              onClick={() => dispatch(setConsistFilter(res))}
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
            {currentRatingFilter}
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
          {pizzasDemand.map((elem) => (
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
