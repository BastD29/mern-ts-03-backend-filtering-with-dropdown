import { BASE_URL, USERS } from "../constants/endpoints";
import { FilterType } from "../models/filter";

const getUsers = async (filters: FilterType) => {
  try {
    console.log("filters from service:", filters);

    // Filter out empty values from the filters object (ex: users instead of users?search=)
    const filteredFilters = Object.keys(filters)
      .filter((key) => filters[key])
      .reduce((obj, key) => {
        obj[key] = filters[key];
        return obj;
      }, {} as FilterType);

    const queryParams = new URLSearchParams(filteredFilters).toString();
    console.log("queryParams:", queryParams);

    const response = await fetch(`${BASE_URL}${USERS}?${queryParams}`);
    // console.log("response:", response);

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();
    console.log("data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export { getUsers };
