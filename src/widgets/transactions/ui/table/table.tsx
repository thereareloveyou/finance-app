import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FC } from "react";
import { Avatar } from "../../../../shared/ui/avatar";
import { TransactionTypes } from "../../../../entities/transaction/types/transaction.types";
import { Pagination } from "../pagination/pagination";

import styles from "./table.module.css";

const columnHelper = createColumnHelper<TransactionTypes>();

const columns = [
  columnHelper.accessor("name", {
    header: "Recipient / Sender",
    cell: (info) => (
      <Avatar name={info.row.original.name} avatar={info.row.original.avatar} />
    ),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("category", {
    header: "Category",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("data", {
    header: "Transaction Date",
    cell: (info) =>
      new Date(info.getValue())
        .toLocaleDateString("en-US", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })
        .replace(",", ""),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
];

export const Table: FC<{ transactions: TransactionTypes[] }> = ({
  transactions,
}) => {
  const table = useReactTable({
    data: transactions,
    columns,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 4,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="mt-6">
      {transactions.length !== 0 && (
        <>
          <table className="w-full">
            <thead>
              {table.getHeaderGroups().map((headerGroups) => (
                <tr className={styles.titles} key={headerGroups.id}>
                  {headerGroups.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr className={styles.values} key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      className={`border-b-[1px] border-b-grey-100 py-4`}
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            table={table}
            currentPage={table.getState().pagination.pageIndex}
            length={transactions.length}
            pageSize={table.getState().pagination.pageSize}
          />
        </>
      )}

      {!transactions.length && (
        <div className={styles.not_found}>
          No matching transactions found for your request
        </div>
      )}
    </div>
  );
};
