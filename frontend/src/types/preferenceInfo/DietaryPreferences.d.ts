
import SpecialDietaryPreference from "./SpecialDietaryPreference"
import AllergyPreferences from "./AllergyPreferences"

type DietaryPreferences = {
    userId: string
    vegetarianDietaryPreference?: "Vegetarian" | "Lacto-vegetarian" | "Ovo-vegetarian" | "Lacto-ovo" | "Pescatarian" | "Vegan" | "Raw Vegan"
    religiousDietaryPreference?: "Kosher" | "Halal" | "Jain" | "Hindu"
    specialDietaryPreference: SpecialDietaryPreference
    allergyPreferences: AllergyPreferences
}

export default DietaryPreferences