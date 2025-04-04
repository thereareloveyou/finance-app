import { Dispatch, FC, SetStateAction } from "react";

import cn from "classnames";

import styles from "./menu-item.module.css";
import { IconLazy } from "../../icon";
import { Link } from "react-router-dom";
interface menuItemType {
  iconName: string;
  active?: boolean;
  setActiveItem?: Dispatch<SetStateAction<string>>;
}

export const MenuItem: FC<menuItemType> = ({
  iconName,
  active,
  setActiveItem,
}) => {
  return (
    <Link
      to={iconName == "Overview" ? "/" : `${iconName.toLowerCase()}`}
      onClick={() =>
        setActiveItem !== undefined ? setActiveItem(iconName) : null
      }
      key={iconName}
      className={cn(styles.menu_item, {
        [styles.active]: active,
      })}
    >
      <IconLazy iconName={iconName} />
      <span>{iconName}</span>
    </Link>
  );
};
