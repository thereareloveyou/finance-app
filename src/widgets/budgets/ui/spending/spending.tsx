import { FC } from "react";
import { BudgetTypes } from "../../../../entities/budget/types/budgets.types";
import { Diagram } from "../../../../shared/ui/diagram";
import { SpendingItem } from "./ui/spending-item/spending-item";

export const Spending: FC<{ budgets: BudgetTypes[] }> = ({ budgets }) => {
  return (
    <div className="flex flex-col bg-white px-8 rounded-xl w-[40%] mb-auto">
      <div className="px-14 pt-14">
        <Diagram budgets={budgets}></Diagram>
      </div>

      <div>
        <p className="mt-8 text-xl text-grey-900 font-bold">Spending Summary</p>
        <div className="flex flex-col gap-4 mt-6">
          {budgets.map((el) => (
            <SpendingItem key={el.category} budget={el} />
          ))}
        </div>
      </div>
    </div>
  );
};
