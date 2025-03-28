import { FC } from "react";
import { View } from "../../../../shared/ui/view";
import { TransactionTypes } from "../../../../entities/transaction/types/transaction.types";
import { TransactionItem } from "./ui/transaction-item/transaction-item";

export const Transactions: FC<{ transactions: TransactionTypes[] }> = ({
  transactions,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl flex flex-col w-full row-span-2 col-span-2">
      <div className="flex items-center justify-between mb-5">
        <div className="text-xl font-bold">Transactions</div>
        <View href="/">View All</View>
      </div>
      <div className="flex flex-col gap-5">
        {transactions.map((el) => (
          <TransactionItem
            avatar={el.avatar}
            name={el.name}
            data={el.data}
            amount={el.amount}
          ></TransactionItem>
        ))}
      </div>
    </div>
  );
};
