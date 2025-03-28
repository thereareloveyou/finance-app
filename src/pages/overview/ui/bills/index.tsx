import { FC } from "react";
import { WalletTypes } from "../../../../entities/wallet/types/wallet.types";
import { BillItem } from "./ui/bill-item/bill-item";
import { View } from "../../../../shared/ui/view";

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
    <div className="bg-white p-8 rounded-xl flex flex-col w-full row-span-1 col-span-1">
      <div className="flex items-center justify-between mb-5">
        <div className="text-xl font-bold">Recurring Bills</div>
        <View href="/">See Details</View>
      </div>
      <div className="flex flex-col gap-2">
        <BillItem classname="border-l-green" value={paided}>Paid Biils</BillItem>
        <BillItem classname="border-l-yellow" value={total}>Total Upcoming</BillItem>
        <BillItem classname="border-l-cyan" value={soon}>Due Soon</BillItem>
      </div>
    </div>
  );
};
