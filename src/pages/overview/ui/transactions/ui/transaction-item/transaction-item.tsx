import { FC } from "react";
import { TransactionTypes } from "../../../../../../entities/transaction/types/transaction.types";
import { Avatar } from "../../../../../../shared/ui/avatar";

import styles from "./transactions-item.module.css";

import cn from "classnames";

export const TransactionItem: FC<
  Omit<TransactionTypes, "recurring" | "category">
> = ({ avatar, name, data, amount }) => {
  return (
    <div className={styles.transaction_item}>
      <Avatar avatar={avatar} name={name} />
      <div className={styles.transaction_item_info}>
        <span
          className={cn(styles.transaction_item_value, {
            "!text-green": amount > 0,
          })}
        >
          {amount > 0
            ? `+${"$" + amount}`
            : amount.toString().replace("-", "-$")}
        </span>
        <span className={styles.transaction_item_date}>
          {new Date(data)
            .toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              day: "numeric",
            })
            .replace(",", "")}
        </span>
      </div>
    </div>
  );
};
