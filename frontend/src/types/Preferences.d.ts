import TravelPreference from './TravelPreference'
import RestaurantPreference from './FoodPreference'
import Destination from './Destination'
import DietaryPreference from './DietaryPreferences'
import BudgetPreference from './BudgetPreference'
import AccomodationPreference from './AccomodationPreference'
import TransportationPreferences from './TransportationPreference'
import FoodPreference from './FoodPreference'
import DrinkPreferences from './DrinkPreference'


type Preferences = {
    travelPreference: TravelPreference
    destinationPreference: Destination[]
    budgetPreference: BudgetPreference
    transportationPreference: TransportationPreference
    accomodationPreference: AccomodationPreference
    foodPreference: FoodPreference
    dietaryPreferences: DietaryPreferences
    drinkPreference: DrinkPreference
}

export default Preferences