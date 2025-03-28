import { apiClient } from "../../../shared/api/base";
import { WalletTypes } from "../../wallet/types/wallet.types";
import { PotTypes } from "../types/pots.types";

export const getDataPots = async () => {
  const response = await apiClient.get<WalletTypes>();

  return response;
};
