import { queryOptions } from "@tanstack/react-query";
import { getTransaction, getTransactionsCategory } from "./get-transation-data";

export const transactionsQueries = {
  all: () =>
    queryOptions({
      queryKey: ["all transactions"],
      queryFn: () => getTransaction("transactions/1"),
    }),

  categorySorted: (sort: string, category: string) =>
    queryOptions({
      queryKey: [`transactions category ${category}`],
      queryFn: () =>
        getTransactionsCategory("transactions/sorted/1", category, sort),
    }),
};
