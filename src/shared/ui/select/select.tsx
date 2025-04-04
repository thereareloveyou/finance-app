import { Dispatch, FC, SetStateAction } from "react";
import { TransactionTypes } from "../../../entities/transaction/types/transaction.types";

import styles from "./select.module.css";

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

export interface FilltersTypes {
  searchTerm: string;
  data: TransactionTypes[];
  setFilteredData: Dispatch<SetStateAction<TransactionTypes[] | undefined>>;
}

export const Select: FC<{
  options: string[];
  name: string;
  sort?: (e: Sorts) => void;
  filter?: (e: Category) => void;
}> = ({ options, name, sort, filter }) => {
  return (
    <div className={styles.select_container}>
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
