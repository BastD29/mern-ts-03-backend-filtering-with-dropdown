import { FC } from "react";
import { useFilter } from "../../hooks/useFilter2";
import SearchInput from "../SearchInput/SearchInput";
import Dropdown from "../Dropdown/Dropdown2";
import { sex } from "../../constants/options";
import style from "./Filter.module.scss";

const Filter: FC = () => {
  const { filters, clearFilter } = useFilter();

  return (
    <div className={style["filter"]}>
      <SearchInput />

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
