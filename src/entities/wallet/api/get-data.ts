import { apiClient } from "../../../shared/api/base";
import { WalletTypes } from "../types/wallet.types";

export const getDataWallet = async (value: string) => {
  const response = await apiClient.get<WalletTypes>(value);

  return response;
};
