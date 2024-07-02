type UserStateType = {
  users: UserType[] | null;
};

type UserType = {
  _id?: string;
  name: string;
  city: string;
  sex: string;
};

export type { UserType, UserStateType };
