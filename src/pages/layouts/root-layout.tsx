import { Outlet } from "react-router-dom";
import { SideBar } from "../../features/sidebar";
import { FC } from "react";

export const RootLayout: FC = () => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Outlet></Outlet>
    </div>
  );
};
