import { FC } from "react";
import { useFilter } from "../../hooks/useFilter2";
import { useFilterContext } from "../../hooks/useFilterContext2";
import Dropdown from "../Dropdown/Dropdown";
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
      {/* <select name="sex" value={filters.sex || ""} onChange={handleFilter}>
        <option value="">Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select> */}

      <Dropdown
        label="Sex"
        dataKey="sex"
        name="sex"
        value={filters.sex || ""}
      />
      <button onClick={clearFilter}>Clear Filters</button>
    </div>
  );
};

export default Filter;
