// type FilterType = {
//   [key: string]: string | { $regex: RegExp } | undefined;
// };

// export type { FilterType };

type FilterType = {
  [key: string]:
    | string
    | { $regex: RegExp }
    | undefined
    | Array<{ [key: string]: { $regex: RegExp } }>;
};

export type { FilterType };
