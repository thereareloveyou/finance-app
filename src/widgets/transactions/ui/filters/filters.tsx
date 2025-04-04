import { FC, useState, useEffect, useCallback } from "react";
import { TransactionTypes } from "../../../../entities/transaction/types/transaction.types";
import {
  Category,
  FilltersTypes,
  Select,
  Sorts,
} from "../../../../shared/ui/select";

export interface FilltersObject {
  category: Category;
  sort: Sorts;
}

export const Filters: FC<FilltersTypes> = ({
  setFilteredData,
  data,
  searchTerm,
}) => {
  const [filter, setFilter] = useState<Category>("All Transactions");
  const [sort, setSort] = useState<Sorts>("Latest");

  const filteredData = useCallback(
    (filterObj: FilltersObject): TransactionTypes[] => {
      const filteredAndSorted = [
        ...(filterObj.category !== "All Transactions"
          ? data.filter((el) => el.category == filterObj.category)
          : data),
      ].sort((a, b: TransactionTypes) => {
        switch (filterObj.sort) {
          case "Latest":
            return new Date(a.data).valueOf() < new Date(b.data).valueOf()
              ? 1
              : -1;
          case "Oldest":
            return new Date(a.data).valueOf() > new Date(b.data).valueOf()
              ? 1
              : -1;
          case "A to Z":
            return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
          case "Z to A":
            return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
          case "Highest":
            return a.amount < b.amount ? 1 : -1;
          case "Lowest":
            return a.amount > b.amount ? 1 : -1;
        }
      });

      if (!searchTerm) {
        return filteredAndSorted;
      }
      return filteredAndSorted.filter(
        (el) => el.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
    },
    [data, searchTerm]
  );

  useEffect(() => {
    const data = filteredData({ category: filter, sort: sort });
    setFilteredData(data);
  }, [filter, setFilteredData, filteredData, sort]);

  return (
    <div className="flex gap-6">
      <Select
        sort={setSort}
        name="Sort by"
        options={["Latest", "Oldest", "A to Z", "Z to A", "Highest", "Lowest"]}
      />
      <Select
        filter={setFilter}
        name="Category"
        options={[
          "All Transactions",
          "Entertainment",
          "Bills",
          "Dining Out",
          "Transportation",
          "Personal Care",
        ]}
      />
    </div>
  );
};
