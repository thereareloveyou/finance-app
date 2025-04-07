import { apiClient } from "../../../shared/api/base"
import { BudgetTypes } from "../types/budgets.types"


export const getBudgets = async(id: string) => {

    const response = await apiClient.get<BudgetTypes[]>(id)

    return response
}