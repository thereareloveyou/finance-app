import { FC } from "react";
import { renderImageFromApi } from "../../utils/renderImageFromApi";

import styles from "./avatar.module.css";

export const Avatar: FC<{ avatar: string; name: string }> = ({
  avatar,
  name,
}) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src={renderImageFromApi(avatar)}
        alt={name}
      />
      <span className={styles.title}>{name}</span>
    </div>
  );
};
