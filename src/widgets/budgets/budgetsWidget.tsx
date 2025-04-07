import { useQuery } from "@tanstack/react-query";
import { budgetsApi } from "../../entities/budget";
import { Spending } from "./ui";
import { Budget } from "./ui/budget/budget";
import { Headline } from "../../shared/ui/headline";

import sytles from "./budgetsWidget.module.css";
import { CreateBudget } from "../../features/create-budget/ui/create-budget";

export const BudgetsWidget = () => {
  const { data } = useQuery(budgetsApi.budgetsQueries.getAllBudgets());

  console.log(data)

  return (
    data && (
      <div>
        <div className="flex flx-row w-full justify-between">
          <Headline headline="Budgets" />
         <CreateBudget/>
        </div>
        <div className="flex w-full gap-6">
          <Spending budgets={data} />
          <div className="flex flex-col w-full gap-6">
            {data.map((el) => (
              <Budget budget={el} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
