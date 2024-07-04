import { FC } from "react";
import { useFilter } from "../../hooks/useFilter2";
import { useFilterContext } from "../../hooks/useFilterContext2";
import Dropdown from "../Dropdown/Dropdown2";
import { sex } from "../../constants/options";
import style from "./Filter.module.scss";

const Filter: FC = () => {
  const { handleFilter, filters, clearFilter } = useFilter();
  const { searchTerm } = useFilterContext();

  return (
    <div className={style["filter"]}>
      <input
        type="search"
        name="search"
        value={searchTerm}
        onChange={handleFilter}
        placeholder="Search"
        // autoFocus
      />

      <Dropdown
        label="Sex"
        name="sex"
        value={filters.sex || ""}
        options={sex}
      />
      <button onClick={clearFilter}>Clear Filters</button>
    </div>
  );
};

export default Filter;
