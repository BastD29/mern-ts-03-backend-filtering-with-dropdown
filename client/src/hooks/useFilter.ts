// import { ChangeEvent } from "react";
// import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";
// import { useFilterContext } from "./useFilterContext";

// const useFilter = () => {
//   const { dispatch, state: filters } = useFilterContext();

//   const handleFilter = (
//     e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     dispatch({ type: SET_FILTER, payload: { name, value } });
//   };

//   const clearFilter = () => {
//     dispatch({ type: CLEAR_FILTER });
//   };

//   return { handleFilter, clearFilter, filters };
// };

// export { useFilter };
