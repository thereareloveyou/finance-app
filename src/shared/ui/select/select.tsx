import { FC } from "react";

export const Select: FC<{ options: string[]; name: string }> = ({
  options,
  name,
}) => {
  return (
    <div className="relative flex gap-2 items-center">
      <span className="text-sm text-grey-500">{name}</span>
      <select className="border border-beige-500 rounded-lg pl-5 pr-7 py-3 font-regular text-sm appearance-none bg-[url(../assets/Icons/Select-arrow.svg)] bg-no-repeat bg-[right_10px_top_13px]">
        {options.map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
};
