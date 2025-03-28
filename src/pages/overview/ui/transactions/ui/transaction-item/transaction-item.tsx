import { FC } from "react";
import { TransactionTypes } from "../../../../../../entities/transaction/types/transaction.types";
import { Avatar } from "../../../../../../shared/ui/avatar";

import cn from "classnames";

export const TransactionItem: FC<
  Omit<TransactionTypes, "recurring" | "category">
> = ({ avatar, name, data, amount }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-row items-center gap-4">
        <Avatar avatar={avatar} name={name} />
        <span className="text-grey-900 text-sm font-bold">{name}</span>
      </div>
      <div className="flex flex-col items-end gap-2">
        <span
          className={cn("text-grey-900 text-sm font-bold", {
            "text-green": amount > 0,
          })}
        >
          {amount > 0
            ? `+${"$" + amount}`
            : amount.toString().replace("-", "-$")}
        </span>
        <span className="text-xs text-grey-500">
          {new Date(data)
            .toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
              day: "numeric",
            })
            .replace(",", "")}
        </span>
      </div>
    </div>
  );
};
