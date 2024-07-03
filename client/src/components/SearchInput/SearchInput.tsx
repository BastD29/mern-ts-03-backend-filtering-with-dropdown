// import { FC, InputHTMLAttributes, useState } from "react";
// import useDebounce from "../../hooks/useDebounce";
// import style from "./SearchInput.module.scss";

// type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

// const SearchInput: FC<SearchInputProps> = ({ ...rest }) => {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const debouncedSearchTerm = useDebounce(searchTerm, 500);

//   return (
//     <input
//       className={style["search-input"]}
//       type="search"
//       placeholder="Search"
//       value={searchTerm}
//       onChange={(e) => setSearchTerm(e.target.value)}
//       {...rest}
//     />
//   );
// };

// export default SearchInput;
