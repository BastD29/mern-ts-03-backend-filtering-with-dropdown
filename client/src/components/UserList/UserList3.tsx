import { FC, useEffect, useState } from "react";
import { getUsers } from "../../services/user";
import { useFilter } from "../../hooks/useFilter2";
import { useUserContext } from "../../hooks/useUserContext";
import { SET_USERS } from "../../constants/actions";
import UserItem from "../UserItem/UserItem";
import { useFilterContext } from "../../hooks/useFilterContext2";
import style from "./UserList.module.scss";

const UserList: FC = () => {
  const { filters } = useFilter();
  console.log("filters:", filters);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    dispatch,
    state: { users },
  } = useUserContext();

  const { debouncedSearchTerm } = useFilterContext();

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);

      try {
        // const response = await getUsers(filters);
        const response = await getUsers({
          ...filters,
          search: debouncedSearchTerm,
        });
        console.log("response:", response);

        if (response) {
          dispatch({ type: SET_USERS, payload: response });
        } else {
          setError("Failed to fetch users");
        }
      } catch (error) {
        setError("Failed to fetch users");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [filters, debouncedSearchTerm]);

  return (
    <div className={style["user-list"]}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <UserItem user={user} key={user._id} />
          ))}
        </ul>
      ) : (
        !isLoading && !error && <p>No user found</p>
      )}
    </div>
  );
};

export default UserList;
