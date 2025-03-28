import { BudgetTypes } from "../../../../../../entities/budget/types/budgets.types";

export const BudgetItem = ({
  maximum,
  category,
  theme,
}: Omit<BudgetTypes, "spent">) => {
  return (
    <div className="w-[100%]">
      <div className="flex flex-row gap-4">
        <div
          style={{ backgroundColor: `${theme}` }}
          className="min-h-full w-1 rounded-full"
        ></div>
        <div>
          <p className="text-xs text-grey-500">{category}</p>
          <span className="text-sm font-bold ">${maximum}</span>
        </div>
      </div>
    </div>
  );
};
