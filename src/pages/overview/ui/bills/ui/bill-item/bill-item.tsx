import { FC, PropsWithChildren } from "react";

import cn from "classnames";

export const BillItem: FC<
  PropsWithChildren & { value: string; classname: string }
> = ({ children, value, classname }) => {
  return (
    <div
      className={cn(
        "bg-beige-100 px-5 py-4 rounded-lg border-l-4 flex flex-row justify-between",
        classname
      )}
    >
      <span className="text-sm text-grey-500">{children}</span>
      <span className="text-sm font-bold text-grey-900">{"$" + value}.00</span>
    </div>
  );
};
