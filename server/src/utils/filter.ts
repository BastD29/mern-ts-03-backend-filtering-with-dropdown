import { FilterType } from "../types/filter";

const buildFilters = (query: any): FilterType => {
  const filters: FilterType = {};

  if (query.search && typeof query.search === "string") {
    filters.$or = [
      { name: { $regex: new RegExp(query.search, "i") } },
      { city: { $regex: new RegExp(query.search, "i") } },
      { sex: { $regex: new RegExp(query.search, "i") } },
    ];
  }

  Object.keys(query).forEach((key) => {
    const value = query[key];
    if (value && typeof value === "string" && key !== "search") {
      filters[key] = value;
    }
  });

  return filters;
};

export default buildFilters;
