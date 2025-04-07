import { FC, Ref } from "react";

import cn from "classnames";
import { Select } from "../select";
import { TextField } from "../TextField/TextField";

type ModalBudgetTypes = {
  ref: Ref<HTMLDivElement>;
  activeModal: boolean;
};

const CATEGORY_BUDGETS = [
  "Enterrainment",
  "Bills",
  "Groceries",
  "Dining Out",
  "Transportation",
  "Personal Care",
  "Education",
  "Lifestyle",
  "Shopping",
  "General",
];

export const ModalBudget: FC<ModalBudgetTypes> = ({ ref, activeModal }) => {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center absolute top-0 left-0 bg-[rgba(0,0,0)]/[0.5] z-40",
        {
          hidden: !activeModal,
        }
      )}
    >
      <div ref={ref} className="bg-white p-8 rounded-lg">
        <p className="text-3xl text-grey-900 font-bold">Add New Budget</p>
        <p className="text-sm text-grey-500 my-5">
          Choose a category to set a spending budget. These categories can help
          you
          <br /> monitor spending.
        </p>
        <form>
        <Select mode="modal" options={CATEGORY_BUDGETS} name="Budget Category"></Select>
        <TextField placeholder="">Maximum Spending</TextField>
      </form>
      </div>

      
    </div>
  );
};
