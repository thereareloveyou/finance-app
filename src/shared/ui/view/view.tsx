import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

import ArrowSvg from "../../../assets/Icons/Arrow.svg?react";

import styles from "./view.module.css";

interface LinkTypes {
  children: ReactNode;
  href: string;
}

export const View: FC<LinkTypes> = ({ children, href }) => {
  return (
    <div className={styles.view}>
      <NavLink className={styles.link} to={href}>
        {children}
      </NavLink>
      <ArrowSvg />
    </div>
  );
};
