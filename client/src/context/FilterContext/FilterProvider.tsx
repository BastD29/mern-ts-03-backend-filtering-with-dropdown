import { FC, ReactNode, useReducer } from "react";
import { FilterContext } from "./FilterContext";
import {
  filterReducer,
  initialFilterState,
} from "../../reducers/filterReducer";

type FilterProviderProps = {
  children: ReactNode;
};

export const FilterProvider: FC<FilterProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initialFilterState);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
