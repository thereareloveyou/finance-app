import { FC } from "react";

import PotsSvg from "../../../../../../assets/Icons/PotsOutline.svg?react";

import styles from './total.module.css'

type TotalTypes =  {
  value: number;
}

export const Total: FC<TotalTypes> = ({ value }) => {
  return (
    <div className={styles.container}>
      <PotsSvg />
      <div>
        <p className={styles.title}>Total Saved</p>
        <span className={styles.value}>
          {`$${value}`}
        </span>
      </div>
    </div>
  );
};
