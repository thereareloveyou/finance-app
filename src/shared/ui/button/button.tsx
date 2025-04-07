import { ButtonHTMLAttributes, FC, ReactNode, Ref } from "react";

import cn from "classnames";

interface ButtonTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
  classN?: string;
  children: ReactNode;
  disabled?: boolean;
  ref: Ref<HTMLButtonElement>
}

export const Button: FC<ButtonTypes> = ({
  onClick,
  children,
  disabled,
  classN,
  ref
}) => {
  return (
    <button
    ref={ref}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "px-4 border rounded-lg border-beige-500 outline-none text-sm font-regular",
        classN
      )}
    >
      {children}
    </button>
  );
};
