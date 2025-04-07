import { FC } from "react";
import { Headline } from "../../shared/ui/headline";
import { TransationsWidget } from "../../widgets/transactions";

import styles from "./transactions.module.css";

export const Transactions: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_transactions}>
        <Headline headline="Transactions" />
        <TransationsWidget />
      </div>
    </div>
  );
};
