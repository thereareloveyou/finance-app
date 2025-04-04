import { FC } from "react";

import { BudgetTypes } from "../../../../entities/budget/types/budgets.types";
import { BudgetItem } from "./ui/budget-item";
import { Diagram } from "../../../../shared/ui/diagram";
import { HeadlineBlock } from "../../../../shared/ui/headineBlock";

import styles from "./budgets.module.css";

export const Budgets: FC<{ budgets: BudgetTypes[] }> = ({ budgets }) => {
  return (
    <div className={styles.container_budgets}>
      <HeadlineBlock
        link="/budgets"
        headline="Budgets"
        titleLink="See Details"
      />

      <div className={styles.budgets}>
        <Diagram budgets={budgets} />
        <div className={styles.budgets_items}>
          {budgets.map((el) => (
            <BudgetItem
              key={el.theme}
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
