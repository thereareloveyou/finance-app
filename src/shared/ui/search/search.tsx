import { Dispatch, FC, SetStateAction } from "react";
import SearchSvg from "../../../assets/Icons/Search.svg?react";

import styles from "./search.module.css";

export type SearchProps = {
  setSearchTerm: Dispatch<SetStateAction<string>>;
};

export const Search: FC<SearchProps> = ({ setSearchTerm }) => {
  return (
    <div className={styles.search}>
      <SearchSvg />
      <input
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search transactions"
      />
    </div>
  );
};
