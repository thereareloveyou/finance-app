import { FC } from "react";
import { BalanceCart } from "./balance-cart/balance-cart";

interface BalanceTypes {
  current: number;
  income: number;
  expenses: number;
}

export const Balance: FC<BalanceTypes> = ({ current, income, expenses }) => {
  const array = {
    current: current,
    income: income,
    expenses: expenses,
  };

  return (
    <div className="flex flex-row w-full gap-6">
      {array &&
        Object.entries(array).map((item) => (
          <BalanceCart
            current={item[0] == "current" ? true : false}
            key={item[0]}
            name={item[0]}
            value={item[1]}
          />
        ))}
    </div>
  );
};
