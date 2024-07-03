import { FC, ReactNode, useReducer, useState } from "react";
import { FilterContext } from "./FilterContext2";
import {
  filterReducer,
  initialFilterState,
} from "../../reducers/filterReducer";
import useDebounce from "../../hooks/useDebounce";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);
  const [searchTerm, setSearchTerm] = useState<string>("");
  // console.log("state:", state);
  // console.log("searchTerm:", searchTerm);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  // console.log("debouncedSearchTerm:", debouncedSearchTerm);

  return (
    <FilterContext.Provider
      value={{
        state,
        dispatch,
        searchTerm,
        setSearchTerm,
        debouncedSearchTerm,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
