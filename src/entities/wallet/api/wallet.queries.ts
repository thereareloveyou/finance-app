import { queryOptions } from "@tanstack/react-query";
import { getDataWallet } from "./get-data";

export const walletQueries = {
  all: () =>
    queryOptions({
      queryKey: ["wallet"],
      queryFn: () => getDataWallet('wallet/1'),
      select: (data) => data,
    }),
};
