import { FC, useState } from "react";
import UserList from "../UserList/UserList2";
import Filter from "../Filter/Filter3";
import useDebounce from "../../hooks/useDebounce";
import style from "./App.module.scss";

const App: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div className={style["app"]}>
      <Filter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserList debouncedSearchTerm={debouncedSearchTerm} />
    </div>
  );
};

export default App;
