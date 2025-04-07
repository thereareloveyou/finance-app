import { FC } from "react";

import styles from "./select.module.css";

import cn from "classnames";

export type Sorts =
  | "Latest"
  | "Oldest"
  | "A to Z"
  | "Z to A"
  | "Highest"
  | "Lowest";
export type Category =
  | "All Transactions"
  | "Entertainment"
  | "Bills"
  | "Dining Out"
  | "Transportation"
  | "Personal Care";

export const Select: FC<{
  options: string[];
  name: string;
  mode?: "modal" | "filter";
  sort?: (e: Sorts) => void;
  filter?: (e: Category) => void;
}> = ({ options, name, sort, filter, mode }) => {
  return (
    <div
      className={cn(styles.select_container, {
        [styles.select_container_modal]: mode == "modal",
      })}
    >
      <span className={styles.select_title}>{name}</span>
      <select
        onChange={(e) =>
          sort
            ? sort(e.target.value as Sorts)
            : filter
            ? filter(e.target.value as Category)
            : ""
        }
      >
        {options.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
