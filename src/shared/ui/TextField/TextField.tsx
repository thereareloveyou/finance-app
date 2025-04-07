import { FC, PropsWithChildren } from "react";

import styles from "./TextField.module.css";

type TextFiled = {
  placeholder: string;
};

export const TextField: FC<TextFiled & PropsWithChildren> = ({
  placeholder,
  children,
}) => {
  return (
    <div>
      <span className={styles.title}>{children}</span>
      <input className={styles.input} placeholder={placeholder}></input>
    </div>
  );
};
