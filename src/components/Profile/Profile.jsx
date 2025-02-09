import clsx from "clsx";
import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.infoContainer}>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={clsx(css.userTag, css.userInfo)}>@{tag}</p>
        <p className={clsx(css.userLocation, css.userInfo)}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.listItem}>
          <span className={css.statsParam}>Followers</span>
          <span className={css.statsNumber}>{stats.followers}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.statsParam}>Views</span>
          <span className={css.statsNumber}>{stats.views}</span>
        </li>
        <li className={css.listItem}>
          <span className={css.statsParam}>Likes</span>
          <span className={css.statsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
