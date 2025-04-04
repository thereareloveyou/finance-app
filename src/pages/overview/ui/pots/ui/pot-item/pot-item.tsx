import { PotTypes } from "../../../../../../entities/pot/types/pots.types";

import styles from "./pot-item.module.css";

export const PotItem = ({ name, total, theme }: PotTypes) => {
  return (
    <div className={styles.container}>
      <div className={styles.pot_item}>
        <div
          style={{ backgroundColor: `${theme}` }}
          className={styles.pot_item_colorTheme}
        ></div>
        <div>
          <p className={styles.pot_item_title}>{name}</p>
          <span className={styles.pot_item_value}>${total}</span>
        </div>
      </div>
    </div>
  );
};
