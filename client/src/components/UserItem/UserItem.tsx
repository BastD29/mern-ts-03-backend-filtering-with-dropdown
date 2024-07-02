import { FC } from "react";
import style from "./UserItem.module.scss";
import { UserType } from "../../models/user";

type UserItemProps = {
  user: UserType;
};

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={style["user-item"]}>
      <h2>{user.name}</h2>
      <p>{user.city}</p>
    </div>
  );
};

export default UserItem;
