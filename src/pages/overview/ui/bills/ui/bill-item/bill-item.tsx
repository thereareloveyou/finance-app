import { FC, PropsWithChildren } from "react";

import styles from './bill-item.module.css'
import cn from "classnames";

export const BillItem: FC<
  PropsWithChildren & { value: string; classname: string }
> = ({ children, value, classname }) => {
  return (
    <div
      className={cn(
        styles.bill_item,
        classname
      )}
    >
      <span className={styles.bill_title}>{children}</span>
      <span className={styles.bill_value}>{"$" + value}.00</span>
    </div>
  );
};
