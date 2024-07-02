import {
  CLEAR_FILTER,
  CLEAR_SORT,
  SET_FILTER,
  SET_USERS,
  // SET_SORT,
} from "../constants/actions";
import { FilterType } from "./filter";
import { UserType } from "./user";

// USER ACTIONS

type SetUserActionType = { type: typeof SET_USERS; payload: UserType[] };

type UserActionType = SetUserActionType;

// FILTER ACTIONS

type SetFilterActionType = { type: typeof SET_FILTER; payload: FilterType };
type ClearFilterActionType = { type: typeof CLEAR_FILTER };

type FilterActionType = SetFilterActionType | ClearFilterActionType;

// SORT ACTIONS

// type SetSortAction = { type: typeof SET_SORT; payload: keyof RowType };
type ClearSortActionType = { type: typeof CLEAR_SORT };

type SortActionType = /* SetSortAction */ ClearSortActionType;

export type { FilterActionType, SortActionType, UserActionType };
