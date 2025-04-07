import { apiClient } from "./../../../shared/api/base";
import { TransactionTypes } from "../types/transaction.types";

export const getTransaction = async (value: string) => {
  const response = await apiClient.get<TransactionTypes[]>(value);

  return response;
};

export interface TransactionsCatagoryParams {
  filter: string;
  sort: string;
}

export const getTransactionsCategory = async (
  id: string,
  category: string,
  sort: string
) => {
  const responce = await apiClient.getWithParams<
    TransactionTypes[],
    TransactionsCatagoryParams
  >(id, { sort: sort, filter: category });

  return responce;
};
