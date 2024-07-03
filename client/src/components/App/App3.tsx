import { FC } from "react";
import Filter from "../Filter/Filter5";
import UserList from "../UserList/UserList3";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <Filter />
      <UserList />
    </div>
  );
};

export default App;
