import { FC } from "react";

import PotsSvg from "../../../../../../assets/Icons/PotsOutline.svg?react";

interface TotalTypes {
  value: number;
}

export const Total: FC<TotalTypes> = ({ value }) => {
  return (
    <div className="bg-beige-100 flex w-[35%] p-5 items-center gap-4 rounded-xl">
      <PotsSvg />
      <div>
        <p className="text-sm text-grey-500">Total Saved</p>
        <span className="text-[32px] text-grey-900 font-bold">
          {`$${value}`}
        </span>
      </div>
    </div>
  );
};
