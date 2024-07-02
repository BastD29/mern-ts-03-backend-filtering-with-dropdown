// import { FC } from "react";
// import { useFilter } from "../../hooks/useFilter";
// import style from "./Filter.module.scss";

// const Filter: FC = () => {
//   const { handleFilter, filters, clearFilter } = useFilter();

//   return (
//     <div className={style["filter"]}>
//       <input
//         type="text"
//         name="name"
//         value={filters.name || ""}
//         onChange={handleFilter}
//         placeholder="Name"
//       />
//       <input
//         type="text"
//         name="city"
//         value={filters.city || ""}
//         onChange={handleFilter}
//         placeholder="City"
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
