import { FC, useEffect, useState } from "react";
import { BudgetTypes } from "../../../../entities/budget/types/budgets.types";
import { BudgetItem } from "../../../../pages/overview/ui/budgets/ui/budget-item";
import { MoreActions } from "../../../../shared/ui/moreActions";
import { useFormatNumber } from "../../../../shared/hooks/useFormatNumber";
import { HeadlineBlock } from "../../../../shared/ui/headineBlock";
import { TransactionTypes } from "../../../../entities/transaction/types/transaction.types";
import { useQuery } from "@tanstack/react-query";
import { transactionsApi } from "../../../../entities/transaction";
import { TransactionItem } from "../../../../pages/overview/ui/transactions/ui/transaction-item/transaction-item";

export const Budget: FC<{ budget: BudgetTypes }> = ({ budget }) => {
  const [transactionData, setTransactionsData] = useState<TransactionTypes[]>();

  const { data } = useQuery(
    transactionsApi.transactionsQueries.categorySorted(
      "Latest",
      budget.category
    )
  );

  const spent = transactionData?.reduce((acc, curr) => acc + curr.amount, 0);

  const widthBar = spent
    ? Math.floor(Math.abs(spent) / (budget.maximum / 100))
    : "";

  useEffect(() => {
    setTransactionsData(data);
  }, [data]);

  return (
    <div className="w-full bg-white p-8 rounded-xl">
      <div className="flex w-full justify-between mb-5">
        <div className="flex gap-4 items-center">
          <div
            style={{ backgroundColor: budget.theme }}
            className="w-4 h-4 rounded-full"
          ></div>
          <p>{budget.category}</p>
        </div>
        <MoreActions />
      </div>

      <div className="flex flex-col h-full">
        <p>Maximum of ${useFormatNumber(budget.maximum)}</p>
        <div className="flex items-center w-full bg-beige-100 h-8 p-1 rounded-[4px] my-4">
          <div
            style={{ backgroundColor: budget.theme, width: `${widthBar}%` }}
            className="rounded-[4px] h-6 bg-green"
          ></div>
        </div>

        <div className="flex flex-row justify-between">
          <BudgetItem
            maximum={budget.maximum}
            category={budget.category}
            theme={budget.theme}
          />
          <BudgetItem
            maximum={spent ? budget.maximum - Math.abs(spent) : budget.maximum}
            category="Remaining"
            theme="#F8F4F0"
          />
        </div>

        <div className="w-full bg-beige-100 p-5 rounded-xl mt-5">
          <HeadlineBlock
            link="/transactions"
            headline="Latest Spending"
            titleLink="See All"
          />
          <div className="flex flex-col gap-4">
            {transactionData?.slice(0, 3).map((el) => (
              <TransactionItem
                avatar={el.avatar}
                name={el.name}
                data={el.data}
                amount={el.amount}
              />
            ))}
            {!transactionData?.length && (
              <div className="text-center">
                You have not yet made any transactions within this category this
                month.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
