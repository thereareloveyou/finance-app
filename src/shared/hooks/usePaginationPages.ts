import { useMemo } from "react";

export type Pagination = {
  currentPage: number;
  length: number;
  pageSize: number;
};

export const usePaginationPages = ({
  length,
  pageSize,
  currentPage,
}: Pagination) => {
  const totalPages = useMemo(() => {
    return Math.ceil(length / pageSize);
  }, [length, pageSize]);

  const pages = useMemo(() => {
    const start = Math.floor(currentPage / 5) * 5;
    const end = start + 5 > totalPages ? totalPages : start + 5;
    return Array.from({ length: end - start }, (_, i) => start + i + 1);
  }, [currentPage, totalPages]);

  return { pages };
};
