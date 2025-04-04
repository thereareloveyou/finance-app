import { FC } from "react";

import cn from "classnames";
import { capitalize } from "lodash";
import { useFormatNumber } from "../../../hooks/useFormatNumber";

import styles from "./balance-cart.module.css";

type BalanceCartTypes =  {
  current: boolean;
  name: string;
  value: number;
}

export const BalanceCart: FC<BalanceCartTypes> = ({ current, name, value }) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.container_active]: current,
      })}
    >
      <p
        className={cn(styles.cart_title, {
          [styles.cart_title_active]: !current,
        })}
      >
        {name == "current" ? capitalize(name) + " Balance" : capitalize(name)}
      </p>
      <span className={styles.cart_value}>{"$" + useFormatNumber(value)}</span>
    </div>
  );
};
