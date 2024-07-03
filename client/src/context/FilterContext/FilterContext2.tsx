import { Dispatch, SetStateAction, createContext } from "react";
import { FilterType } from "../../models/filter";
import { FilterActionType } from "../../models/action";

type FilterContextType = {
  state: FilterType;
  dispatch: Dispatch<FilterActionType>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  debouncedSearchTerm: string;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
