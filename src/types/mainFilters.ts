export type IMeatFilter =
  | "Все"
  | "Мясные"
  | "Вегетарианская"
  | "Гриль"
  | "Острые"
  | "Закрытые";

export type IRatingFilter = "популярности" | "цене" | "алфавиту";

export interface ReduxMainFilters {
  consistFilter: IMeatFilter;
  demandFilter: IRatingFilter;
}
