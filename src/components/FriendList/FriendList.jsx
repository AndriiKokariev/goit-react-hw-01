import clsx from "clsx";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <div>
      <ul className={css.friendList}>
        {friends.map((friend) => {
          return (
            <li className={css.listItem} key={friend.id}>
              <img
                className={css.avatar}
                src={friend.avatar}
                alt="Avatar"
                width="48"
              />
              <p className={css.nickName}>{friend.name}</p>
              <p
                className={clsx(
                  css.status,
                  friend.isOnline ? css.online : css.offline
                )}
              >
                {friend.isOnline ? "Online" : "Offline"}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendList;
