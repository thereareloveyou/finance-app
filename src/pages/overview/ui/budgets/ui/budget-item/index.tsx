import { BudgetTypes } from "../../../../../../entities/budget/types/budgets.types";

import styles from "./budget-item.module.css";

export const BudgetItem = ({
  maximum,
  category,
  theme,
}: Omit<BudgetTypes, "spent">) => {
  return (
    <div className={styles.budgetItem_container}>
      <div className={styles.budget_item}>
        <div
          style={{ backgroundColor: `${theme}` }}
          className={styles.budget_colorTheme}
        ></div>
        <div>
          <p className={styles.budget_category}>{category}</p>
          <span className={styles.budget_value}>${maximum}</span>
        </div>
      </div>
    </div>
  );
};
