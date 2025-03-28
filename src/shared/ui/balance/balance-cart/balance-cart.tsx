import { FC } from "react";

import cn from "classnames";
import { capitalize } from "lodash";
import { useFormatNumber } from "../../../hooks/useFormatNumber";

interface BalanceCartTypes {
  current: boolean;
  name: string;
  value: number;
}

export const BalanceCart: FC<BalanceCartTypes> = ({ current, name, value }) => {
  return (
    <div
      className={cn("bg-white p-6 w-full rounded-xl", {
        "!bg-grey-900 text-white": current,
      })}
    >
      <p
        className={cn("text-sm", {
          "text-grey-500": !current,
        })}
      >
        {name == "current" ? capitalize(name) + " Balance" : capitalize(name)}
      </p>
      <span className="text-[32px] font-bold ">
        {"$" + useFormatNumber(value)}
      </span>
    </div>
  );
};
