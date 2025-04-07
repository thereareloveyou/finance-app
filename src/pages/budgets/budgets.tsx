import { BudgetsWidget } from "../../widgets/budgets";

import sytles from "./budgets.module.css";

export const Budgets = () => {
  return (
    <div className={sytles.container}>
      <BudgetsWidget />
    </div>
  );
};
