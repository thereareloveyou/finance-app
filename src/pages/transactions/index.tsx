import { FC } from "react";
import { Headline } from "../../shared/ui/headline";
import { Search } from "../../shared/ui/search";
import { Select } from "../../shared/ui/select/select";

export const Transactions: FC = () => {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col px-10 pt-8 w-full">
        <Headline headline="Transactions" />
        <div className="bg-white flex justify-between px-10 pt-8 rounded-lg">
          <Search></Search>
          <div className="flex gap-6">
            <Select
              name="Sort by"
              options={[
                "Latest",
                "Oldest",
                "A to Z",
                "Z to A",
                "Highest",
                "Lowest",
              ]}
            />
            <Select
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
        </div>
      </div>
    </div>
  );
};
