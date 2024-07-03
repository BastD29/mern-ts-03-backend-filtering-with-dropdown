// import { Dispatch, FC, SetStateAction } from "react";
// import { useFilter } from "../../hooks/useFilter";
// import style from "./Filter.module.scss";

// type FilterProps = {
//   searchTerm: string;
//   setSearchTerm: Dispatch<SetStateAction<string>>;
// };

// const Filter: FC<FilterProps> = ({ searchTerm, setSearchTerm }) => {
//   const { handleFilter, filters, clearFilter } = useFilter();

//   return (
//     <div className={style["filter"]}>
//       <input
//         type="search"
//         name="search"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search"
//         // autoFocus
//       />

//       <select name="sex" value={filters.sex || ""} onChange={handleFilter}>
//         <option value="">Sex</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//       </select>
//       <button onClick={clearFilter}>Clear Filters</button>
//     </div>
//   );
// };

// export default Filter;
