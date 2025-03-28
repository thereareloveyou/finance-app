import { FC } from "react";
import { Diagram } from "./ui/Sunbursts";
import { BudgetTypes } from "../../../../entities/budget/types/budgets.types";
import { BudgetItem } from "./ui/budget-item";
import { View } from "../../../../shared/ui/view";

export const Budgets: FC<{ budgets: BudgetTypes[] }> = ({ budgets }) => {
  return (
    <div className=" bg-white p-8 rounded-xl flex flex-col w-full row-span-2 col-span-1 items-center ">
      <div className="flex items-center justify-between mb-12 self-stretch">
        <div className="text-xl font-bold">Budgets</div>
        <View href="/">See Details</View>
      </div>

      <div className="flex flex-row items-center gap-5">
        <Diagram budgets={budgets} />
        <div className="flex flex-col gap-2">
          {budgets.map((el) => (
            <BudgetItem
              maximum={el.maximum}
              category={el.category}
              theme={el.theme}
            ></BudgetItem>
          ))}
        </div>
      </div>
    </div>
  );
};
