import { Context, Dispatch, createContext } from "react";
import { UserStateType } from "../../models/user";
import { UserActionType } from "../../models/action";

type UserContextType = {
  state: UserStateType;
  dispatch: Dispatch<UserActionType>;
};

export const UserContext: Context<UserContextType | undefined> = createContext<
  UserContextType | undefined
>(undefined);
