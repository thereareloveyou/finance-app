import { FC } from "react";
import { TransactionTypes } from "../../../../entities/transaction/types/transaction.types";
import { TransactionItem } from "./ui/transaction-item/transaction-item";
import { HeadlineBlock } from "../../../../shared/ui/headineBlock";

import styles from "./transactions.module.css";

export const Transactions: FC<{ transactions: TransactionTypes[] }> = ({
  transactions,
}) => {
  return (
    <div className={styles.container}>
      <HeadlineBlock
        link="/transactions"
        headline="Transactions"
        titleLink="View All"
      />
      <div className={styles.transactions}>
        {transactions
          .sort((a, b) =>
            new Date(a.data).valueOf() < new Date(b.data).valueOf() ? 1 : -1
          )
          .map((el) => (
            <TransactionItem
              key={el.avatar}
              avatar={el.avatar}
              name={el.name}
              data={el.data}
              amount={el.amount}
            ></TransactionItem>
          ))}
      </div>
    </div>
  );
};
