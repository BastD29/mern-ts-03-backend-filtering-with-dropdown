import { Dispatch, createContext } from "react";
import { FilterType } from "../../models/filter";
import { FilterActionType } from "../../models/action";

type FilterContextType = {
  state: FilterType;
  dispatch: Dispatch<FilterActionType>;
};

export const FilterContext = createContext<FilterContextType | undefined>(
  undefined
);
