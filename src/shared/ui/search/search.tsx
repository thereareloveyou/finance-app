import React from "react";

import SearchSvg from "../../../assets/Icons/Search.svg?react";

export const Search = () => {
  return (
    <div className="relative w-[320px]">
      <SearchSvg className="absolute w-4 h-4 right-5 top-4" />
      <input
        placeholder="Search transactions"
        className="w-full px-5 py-3 border-beige-500 border rounded-lg placeholder:text-sm leading-4 font-regular"
      />
    </div>
  );
};
