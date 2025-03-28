import { PotTypes } from "../../../../../../entities/pot/types/pots.types";

export const PotItem = ({ name, total, theme }: PotTypes) => {
  return (
    <div className="w-[50%]">
      <div className="flex flex-row gap-4">
        <div
          style={{ backgroundColor: `${theme}` }}
          className="min-h-full w-1 rounded-full"
        ></div>
        <div>
          <p className="text-xs text-grey-500">{name}</p>
          <span className="text-sm font-bold ">${total}</span>
        </div>
      </div>
    </div>
  );
};
