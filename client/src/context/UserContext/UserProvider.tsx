import { FC, ReactNode, useReducer } from "react";
import { initialUserState, userReducer } from "../../reducers/userReducer";
import { UserContext } from "./UserContext";

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialUserState);

  console.log("initialUserState:", state);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
