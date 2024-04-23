
type DietaryPreferences = {
    vegetarianDietaryPreference?: "Vegetarian" | "Lacto-vegetarian" | "Ovo-vegetarian" | "Lacto-ovo" | "Pescatarian" | "Vegan" | "Raw Vegan"
    religiousDietaryPreference?: "Kosher" | "Halal" | "Jain" | "Hindu"
    specialDietaryPreference: SpecialDietaryPreference
    allergies: Allergies
}

export default DietaryPreferences