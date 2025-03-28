import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import ArrowSvg from "../../../assets/Icons/Arrow.svg?react";

interface LinkTypes {
  children: ReactNode;
  href: string;
}

export const View: FC<LinkTypes> = ({ children, href }) => {
  return (
    <div className="flex flex-row justify-end items-center gap-3">
      <Link className="text-grey-500 text-sm" to={href}>
        {children}
      </Link>
      <ArrowSvg />
    </div>
  );
};
