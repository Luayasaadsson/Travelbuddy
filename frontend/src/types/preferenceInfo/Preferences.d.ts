import VacationPreference from "./VacationPreference"
import Destination from "../tripInfo/Destination"
import BudgetPreference from "./BudgetPreference"
import TransportationPreferences from "./TransportationPreference"
import AccomodationPreference from "./AccomodationPreference"
import FoodPreference from "./FoodPreference"
import DietaryPreferences from "./DietaryPreferences"
import DrinkPreferences from "./DrinkPreference"


type Preferences = {
    userId: string
    vacationPreference: VacationPreference
    destinationPreference: Destination[]
    budgetPreference: BudgetPreference
    transportationPreference: TransportationPreference
    accomodationPreference: AccomodationPreference
    foodPreference: FoodPreference
    dietaryPreferences: DietaryPreferences
    drinkPreference: DrinkPreference
}

export default Preferences