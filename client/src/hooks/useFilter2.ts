import { ChangeEvent } from "react";
import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";
import { useFilterContext } from "./useFilterContext2";

const useFilter = () => {
  const {
    dispatch,
    state: filters,
    searchTerm,
    setSearchTerm,
  } = useFilterContext();

  const handleFilter = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "search") {
      setSearchTerm(value);
    } else {
      dispatch({ type: SET_FILTER, payload: { name, value } });
    }
  };

  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
    setSearchTerm("");
  };

  // useEffect(() => {
  //   dispatch({
  //     type: SET_FILTER,
  //     payload: { name: "search", value: debouncedSearchTerm },
  //   });
  // }, [debouncedSearchTerm, dispatch]);

  return { handleFilter, clearFilter, filters, searchTerm };
};

export { useFilter };
