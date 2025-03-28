import { useState } from "react";
import { MenuItem } from "./menu-item/menu-item";

const menuData = [
  "Overview",
  "Transactions",
  "Budgets",
  "Pots",
  "Recurring Bills",
];

export const Menu = () => {
  const [active, setActive] = useState<string>("Overview");

  return (
    <>
      <div className="flex flex-col gap-1">
        {menuData.map((item) => (
          <MenuItem
          key={item}
            iconName={item}
            active={item == active ? true : false}
            setActiveItem={setActive}
          />
        ))}
      </div>

      <div className="mt-auto mb-[60px]">
        <MenuItem iconName="Minimize Menu" />
      </div>
    </>
  );
};
