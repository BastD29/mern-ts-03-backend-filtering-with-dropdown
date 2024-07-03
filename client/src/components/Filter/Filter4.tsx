import { FC } from "react";
import { useFilter } from "../../hooks/useFilter2";
import { useFilterContext } from "../../hooks/useFilterContext2";
import style from "./Filter.module.scss";

const Filter: FC = () => {
  const { handleFilter, filters, clearFilter } = useFilter();
  const { searchTerm } = useFilterContext();

  return (
    <div className={style["filter"]}>
      <input
        type="search"
        name="search"
        // value={filters.search || ""}
        value={searchTerm} // the input text shall not be debounced as we have to get it appear naturally, so for that we use another state
        onChange={handleFilter}
        placeholder="Search"
        // autoFocus
      />
      <select name="sex" value={filters.sex || ""} onChange={handleFilter}>
        <option value="">Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button onClick={clearFilter}>Clear Filters</button>
    </div>
  );
};

export default Filter;
