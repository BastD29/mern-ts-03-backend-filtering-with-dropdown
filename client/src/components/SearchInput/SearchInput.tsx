import { FC, InputHTMLAttributes } from "react";
import { useFilter } from "../../hooks/useFilter2";
import style from "./SearchInput.module.scss";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
  const { handleFilter, searchTerm } = useFilter();

  return (
    <input
      className={style["search-input"]}
      type="search"
      name="search"
      placeholder="Search"
      value={searchTerm}
      onChange={handleFilter}
      // autoFocus
      {...rest}
    />
  );
};

export default SearchInput;
