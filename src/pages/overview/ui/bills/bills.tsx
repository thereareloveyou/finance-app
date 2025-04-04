import { FC } from "react";
import { WalletTypes } from "../../../../entities/wallet/types/wallet.types";
import { BillItem } from "./ui/bill-item/bill-item";
import { HeadlineBlock } from "../../../../shared/ui/headineBlock";

import styles from "./bills.module.css";

export const Bills: FC<Pick<WalletTypes, "transactions">> = ({
  transactions,
}) => {
  const paided = transactions
    .reduce(
      (acc, curr) =>
        curr.recurring == true && curr.category == "Bills"
          ? acc + curr.amount
          : acc,
      0
    )
    .toString()
    .replace("-", "");

  const total = transactions
    .reduce(
      (acc, curr) =>
        curr.recurring == false && curr.category == "Bills"
          ? acc + curr.amount
          : acc,
      0
    )
    .toString()
    .replace("-", "");

  const date = new Date().getDate();

  const soon = transactions
    .reduce(
      (acc, curr) =>
        curr.recurring == false &&
        curr.category == "Bills" &&
        new Date(curr.data).getDate() >= date &&
        new Date(curr.data).getDate() <= date + 7
          ? acc + curr.amount
          : acc,
      0
    )
    .toString()
    .replace("-", "");

  return (
    <div className={styles.container_bills}>
      <HeadlineBlock
        link="/bills"
        headline="Recurring Bills"
        titleLink="See Details"
      />
      <div className={styles.bills}>
        <BillItem classname="border-l-green" value={paided}>
          Paid Biils
        </BillItem>
        <BillItem classname="border-l-yellow" value={total}>
          Total Upcoming
        </BillItem>
        <BillItem classname="border-l-cyan" value={soon}>
          Due Soon
        </BillItem>
      </div>
    </div>
  );
};
