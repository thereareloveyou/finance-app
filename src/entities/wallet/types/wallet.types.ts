import { BillTypes } from "../../bill/types/bill.types";
import { BudgetTypes } from "../../budgets/types/budgets.types";
import { PotTypes } from "../../pots/types/pots.types";
import { TransactionTypes } from "../../transaction/types/transaction.types";

export interface WalletTypes {
  current: number;
  income: number;
  expenses: number;
  transactions: TransactionTypes[];
  budgets: BudgetTypes[];
  pots: PotTypes[];
  bills: BillTypes[]
}
