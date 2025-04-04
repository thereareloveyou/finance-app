import { FC } from "react";
import { PotTypes } from "../../../../entities/pot/types/pots.types";
import { PotItem } from "./ui/pot-item/pot-item";
import { Total } from "./ui/total/total";
import { HeadlineBlock } from "../../../../shared/ui/headineBlock";

import styles from "./pots.module.css";

type PotsTypes = {
  pots: PotTypes[];
};

export const Pots: FC<PotsTypes> = ({ pots }) => {
  const total = pots.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );

  return (
    <div className={styles.container}>
      <HeadlineBlock link="/pots" headline="Pots" titleLink="See Deatils" />
      <div className={styles.pots}>
        <Total value={total}></Total>
        <div className={styles.pots_items}>
          {pots.slice(0, 4).map((el) => (
            <PotItem
              key={el.id}
              name={el.name}
              total={el.total}
              theme={el.theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
