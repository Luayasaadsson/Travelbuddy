

type BudgetPreferences = {
    userId: string
    maxAccommodationPricePerNight?: number | null;
    maxFoodExpense?: number | null;
    maxDrinkExpense?: number | null;
    maxTransportationExpense?: number | null;
    maxEntertainmentExpense?: number | null;
    maxTotalBudget?: number | null;
  };

export default BudgetPreference