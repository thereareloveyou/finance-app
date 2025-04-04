import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { walletApi } from "../../../entities/wallet";
import { Balance } from "../../../shared/ui/balance";
import { Headline } from "../../../shared/ui/headline";

import { Budgets } from "./budgets";
import { Transactions } from "./transactions/transactions";
import { Bills } from "./bills";
import { Pots } from "./pots";

import styles from "./overview.module.css";

export const Overview: FC = () => {
  const { data } = useQuery(walletApi.walletQueries.all());

  return (
    data && (
      <div className={styles.container}>
        <div className={styles.container_overview}>
          <Headline headline="Overview" />
          <Balance
            income={data.income}
            expenses={data.expenses}
            current={data.current}
          ></Balance>
          <div className={styles.overview_grid}>
            <Pots pots={data.pots}></Pots>
            <Budgets budgets={data.budgets} />
            <Transactions transactions={data.transactions.slice(0, 5)} />
            <Bills transactions={data.transactions} />
          </div>
        </div>
      </div>
    )
  );
};
