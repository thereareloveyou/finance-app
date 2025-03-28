import { queryOptions } from "@tanstack/react-query";
import { getDataPots } from "./get-pots";

export const potsQueries = {
  pots: () =>
    queryOptions({
      queryKey: ["pots"],
      queryFn: () => getDataPots(),
      select: (data) => data.pots,
    }),
};
