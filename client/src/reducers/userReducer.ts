import { SET_USERS } from "../constants/actions";
import { UserActionType } from "../models/action";
import { UserStateType } from "../models/user";

const initialUserState: UserStateType = {
  users: null,
};

const userReducer = (
  state: UserStateType,
  action: UserActionType
): UserStateType => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.payload,
      };
    default:
      return state;
  }
};

export { initialUserState, userReducer };
