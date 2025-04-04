import { useQuery } from "@tanstack/react-query";
import { transactionsApi } from "../../entities/transaction";
import { Search } from "../../shared/ui/search";
import { Filters } from "./ui/filters/filters";
import { Table } from "./ui/table/table";
import { FC, useEffect, useState } from "react";
import { TransactionTypes } from "../../entities/transaction/types/transaction.types";

export const TransationsWidget: FC = () => {
  const { data } = useQuery(transactionsApi.transactionsQueries.all());

  const [filteredData, setFilteredData] = useState<TransactionTypes[]>();
  const [searchTerm, setSearchTerm] = useState<string>("");

  

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  return (
    data &&
    filteredData && (
      <div className="bg-white flex flex-col px-10 pt-8 rounded-lg">
        <div className="flex justify-between">
          <Search setSearchTerm={setSearchTerm} />
          <Filters
            searchTerm={searchTerm}
            data={data}
            setFilteredData={setFilteredData}
          />
        </div>
        <Table transactions={filteredData} />
      </div>
    )
  );
};
