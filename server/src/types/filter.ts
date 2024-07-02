type FilterType = {
  [key: string]: string | { $regex: RegExp } | undefined;
};

export type { FilterType };
