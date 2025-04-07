import { queryOptions } from "@tanstack/react-query";
import { getBudgets } from "./get-budgets-data";

export const budgetsQueries = {
  getAllBudgets: () =>
    queryOptions({
      queryKey: ["all budgets"],
      queryFn: () => getBudgets("budgets/1"),
    }),
};
