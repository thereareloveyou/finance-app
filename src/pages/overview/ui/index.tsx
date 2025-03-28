import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { walletApi } from "../../../entities/wallet";
import { Balance } from "../../../shared/ui/balance";
import { Headline } from "../../../shared/ui/headline";
import { Pots } from "./pots/ui";
import { Budgets } from "./budgets";
import { Transactions } from "./transactions";
import { Bills } from "./bills";

export const Overview: FC = () => {
  const { data, isLoading } = useQuery(walletApi.walletQueries.all());

  return (
    data && (
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-col px-10 pt-8 w-full">
          <Headline headline="Overview" />
          <Balance
            income={data.income}
            expenses={data.expenses}
            current={data.current}
          ></Balance>
          <div className="grid grid-flow-cols grid-flow-row grid-cols-3 mt-8 gap-[1em]">
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
