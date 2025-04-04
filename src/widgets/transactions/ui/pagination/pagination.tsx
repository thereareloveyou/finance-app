import { FC } from "react";
import { usePaginationPages } from "../../../../shared/hooks/usePaginationPages";
import { Table } from "@tanstack/react-table";
import { TransactionTypes } from "../../../../entities/transaction/types/transaction.types";
import { Button } from "../../../../shared/ui/button/button";

import styles from "./pagination.module.css";

interface PaginationTypes {
  length: number;
  pageSize: number;
  currentPage: number;
  table: Table<TransactionTypes>;
}

export const Pagination: FC<PaginationTypes> = ({
  length,
  pageSize,
  currentPage,
  table,
}) => {
  const { pages } = usePaginationPages({ length, pageSize, currentPage });

  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        classN="w-[90px]"
      >
        Prev
      </Button>
      <div className={styles.buttons_container}>
        {pages.map((page, i) => (
          <Button
            onClick={() => table.setPageIndex(i)}
            key={page}
            classN={currentPage + 1 === page ? styles.button_active : ""}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        classN="w-[90px]"
      >
        Next
      </Button>
    </div>
  );
};
