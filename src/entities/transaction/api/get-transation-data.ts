import { apiClient } from "../../../shared/api/base";
import { TransactionTypes } from "../types/transaction.types";

export const getTransaction = async (value: string) => {
  const response = await apiClient.get<TransactionTypes[]>(value);

  return response;
};

