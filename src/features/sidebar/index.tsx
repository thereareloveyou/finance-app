import { FC } from "react";

import Logo from "../../assets/Logo.svg?react";
import { Menu } from "../../shared/ui/menu";

export const SideBar: FC = () => {
  return (
    <div className="flex flex-col bg-grey-900 w-[20%] h-[100vh] rounded-tr-xl rounded-br-xl">
      <Logo className="mx-8 my-10" />
      <Menu />
    </div>
  );
};
