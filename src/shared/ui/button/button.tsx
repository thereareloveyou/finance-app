import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import cn from "classnames";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  classN?: string;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonTypes> = ({
  onClick,
  children,
  disabled,
  classN,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "h-10 px-4 border rounded-lg border-beige-500 outline-none text-sm font-regular",
        classN
      )}
    >
      {children}
    </button>
  );
};
