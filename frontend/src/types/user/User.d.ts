/* import Country from "../common/Country"
import Gender from "../common/Gender"
import Language from "../common/Language" */

type User = {
    id: string | null
    profile: Profile
    settings: Settings
    personalInfo: PersonalInfo
    preferences: Preferences
    disabilities: Disabilities
    sessionInfo: SessionInfo
}

type Address = {
    streetName?: string | null
    houseNumber?: string | null
    houseName?: string | null
    apartmentBlock?: string | null
    floor?: string | null
    apartmentNumber?: string | null
    postOfficeBoxNumber?: string | null
    city?: string | null
    postalCode?: string | null
    state?: string | null
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

type NationalFoodPreference = {
    like: boolean
    country: string
    dishes: string[]
}

type NationalFoodPreferences = NationalFoodPreference[]

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
    email?: string | null
    mobilePhone?: string | null
    phone?: string | null
    address?: Address
    facebook?: string | null
    instagram?: string | null
    x?: string | null
    linkedIn?: string | null
    ticToc?: string | null
}

type Settings = {
    emailForUserName: string
    password: string
    emailForAccountRecovery: string
    emailForNotifications: string | null
    publicName: string
    publicAvatarUrl?: string | null
    language: "en"
    currency: "USD" | "EUR" | "SEK"
    timezone: string | null
    unitSystem: "metric"
    notificationsAreEnabled: boolean
    subscriptionsAutoRenew: boolean
    notificationsViaEmail: boolean
    notificationViaAppMessage: boolean
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
    allergies: AllergyPreferences
    nationalFood: NationalFoodPreferences
    foodDishes: FoodDishesPreferences
    drinks: DrinksPreferences
    transportation: TransportationPreferences
    vacationType: VacationTypePreferences
}

export default User
