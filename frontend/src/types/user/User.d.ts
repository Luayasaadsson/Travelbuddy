/* import Country from "../common/Country"
import Gender from "../common/Gender"
import Language from "../common/Language" */

import Gender from "../common/Gender"

type User = {
    id: string | null
    profile: Profile
    settings: Settings
    preferences: Preferences
    disabilities: Disabilities
    sessionInfo: SessionInfo
}

type Address = {
    city?: string | null
    country?: string | null
}

type AccommodationPreferences = {
    [key: string]: boolean
}

type BudgetPreferences = {
    [key: string]: number | null
}

type DietaryPreferences = {
    [key: string]: boolean
}

type AllergyPreferences = {
    [key: string]: boolean
}

type FoodPreference = {
    like: boolean
    country: string
    dishes: string[]
}

type FoodPreferences = FoodPreference[]

type FoodDishesPreferences = {
    [key: string]: boolean | null
}

type DrinksPreferences = {
    [key: string]: boolean
}

type TransportationPreferences = {
    [key: string]: boolean
}

type VacationTypePreferences = {
    [key: string]: boolean
}

type Disabilities = {
    noDisabilty: boolean
    visualImpairment: boolean
    hearingImpairment: boolean
    speechImpairment: boolean
    mobilityImpairment: boolean
    cognitiveDisabilities: boolean
    neurologicalDisorders: boolean
    otherDisabilities: boolean
    commentOnDisabilities: string | null
}

type SessionInfo = {
    isLoggedIn: boolean
    isLoading: boolean
    messageToUser: string | null
}

type Profile = {
    firstName: string | null
    lastName?: string | null
    gender: Gender
    address?: Address
}

type Settings = {
    email: string |null
    password: string
    publicName: string
    publicAvatarUrl?: string | null
    language: "en"
    currency: "USD" | "EUR" | "SEK"
    mode: "light" | "dark"
}

type PersonalInfo = {
    dateOfBirth?: Date | null
    gender?: "Female" | "Male" | "Non-binary" | "Transgender" | null
    partnerId?: string | null
    childrenIds?: string[]
    grandChildrenIds?: string[]
    parentIds?: string[]
    siblingIds?: string[]
    friendIds?: string[]
    colleagueIds?: string[]
}

type Preferences = {
    accomodation: AccommodationPreferences
    budget: BudgetPreferences
    dietary: DietaryPreferences
    food: FoodPreferences
    transportation: TransportationPreferences
    vacationType: VacationTypePreferences
}

export default User
