import { InputHTMLAttributes } from "react";
import { useFilter } from "../../hooks/useFilter";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: React.FC<SearchInputProps> = ({ value, ...rest }) => {
  const { handleFilter, filters } = useFilter();

  return (
    <input
      name="search"
      type="search"
      placeholder="Search..."
      className={style["search-input"]}
      value={filters.search || ""}
      onChange={handleFilter}
      {...rest}
    />
  );
};

export default SearchInput;
