import { queryOptions } from "@tanstack/react-query";
import {getTransaction } from "./get-transation-data";

export const transactionsQueries = {
  all: () =>
    queryOptions({
      queryKey: ["all transactions"],
      queryFn: () => getTransaction("transactions/1"),
    }),

};
