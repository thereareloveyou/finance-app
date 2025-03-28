import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowseRouter } from "../router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

type Props = {
  client: QueryClient;
};

export const Providers = ({ client }: Props) => {
  return (
    <QueryClientProvider client={client}>
      <BrowseRouter></BrowseRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
