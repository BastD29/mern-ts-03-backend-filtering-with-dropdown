import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";
import { FilterActionType } from "../models/action";
import { FilterType } from "../models/filter";

const initialFilterState: FilterType = {};

const filterReducer = (
  state: FilterType,
  action: FilterActionType
): FilterType => {
  switch (action.type) {
    case SET_FILTER:
      return { ...state, [action.payload.name]: action.payload.value };
    case CLEAR_FILTER:
      return initialFilterState;
    default:
      return state;
  }
};

export { filterReducer, initialFilterState };
