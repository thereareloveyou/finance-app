import { FC } from "react";
import { PotTypes } from "../../../../../entities/pot/types/pots.types";
import { PotItem } from "./pot-item/pot-item";
import { Total } from "./total/total";
import { View } from "../../../../../shared/ui/view";

interface PotsTypes {
  pots: PotTypes[];
}

export const Pots: FC<PotsTypes> = ({ pots }) => {
  const total = pots.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );

  return (
    <div className="bg-white p-8 rounded-xl flex flex-col w-full row-span-1 col-span-2">
      <div className="flex items-center justify-between mb-5">
        <div className="text-xl font-bold">Pots</div>
        <View href="/">See Details</View>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <Total value={total}></Total>
        <div className="flex flex-row basis-[55%] flex-wrap w-full h-full items-center">
          {pots.slice(0, 4).map((el) => (
            <PotItem
              key={el.id}
              name={el.name}
              total={el.total}
              theme={el.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
