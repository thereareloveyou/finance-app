import { FC } from "react";
import { BudgetTypes } from "../../../../../../entities/budget/types/budgets.types";
import { useQuery } from "@tanstack/react-query";
import { transactionsApi } from "../../../../../../entities/transaction";

export const SpendingItem: FC<{ budget: BudgetTypes }> = ({ budget }) => {
  const { data } = useQuery(
    transactionsApi.transactionsQueries.categorySorted(
      "Latest",
      budget.category
    )
  );

  const spent = data?.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4 items-center">
          <div
            style={{ backgroundColor: `${budget.theme}` }}
            className="h-full w-1 rounded-full"
          ></div>
          <p className="text-sm text-grey-500">{budget.category}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base text-grey-900 font-bold">
            ${spent ? Math.abs(spent) : 0}
          </span>
          <span className="text-xs text-grey-500">of ${budget.maximum}</span>
        </div>
      </div>
      <hr className="mt-4 border-grey-100" />
    </div>
  );
};
