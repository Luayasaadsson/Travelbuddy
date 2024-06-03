import Language from "../common/Language"
import Gender from "../common/Gender"
import CurrencyCode from "../common/Currency"
import BudgetPreference from "./BudgetPreference"

type User = {
    id: string | null
    profile: Profile
    settings: Settings
    preferences: Preferences
    sessionInfo: SessionInfo
}

type Address = {
    city: string | undefined
    country: string | undefined
}

type AccommodationPreference = {
    id: number
    label: string
    selected: boolean
}

type AccommodationPreferences = AccommodationPreference[]

type BudgetPreferences = BudgetPreference[]

type ActivitiePreference = {
    id: number
    label: string
    selected: boolean
}

type ActivitiesPreferences = ActivitiePreference[]

type FoodPreference = {
    id: number
    selected: boolean
    label: string
}

type FoodPreferences = FoodPreference[]

type TransportationPreference = {
    id: number
    label: string
    selected: boolean
}

type TransportationPreferences = TransportationPreference[]

type VacationPreference = {
    id: number
    label: string
    selected: boolean
}

type VacationPreferences = VacationPreference[]

type Disabilities = Disability[]

type SessionInfo = {
    isLoggedIn: boolean
    isLoading: boolean
    messageToUser: string | null
    longitude: number | null
    latitude: number | null
    city: string | null
    country: string | null
}

type Profile = {
    firstName: string | undefined
    lastName: string | undefined
    userName: string | undefined
    phoneNumber?: string | undefined
    gender: Gender
    address: Address
    profileImage?: string
}

type Settings = {
    email: string | null
    password: string
    publicName: string
    publicAvatarUrl?: string | null
    language: "en"
    preferredCurrency: Currency | null
}

// TODO:  update gender type below
type PersonalInfo = {
    dateOfBirth?: Date | null
    gender?: Gender | null
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
    activities: ActivitiesPreferences
    food: FoodPreferences
    transportation: TransportationPreferences
    vacation: VacationPreferences
}

export default User
export default AccommodationPreferences
export default FoodPreferences
export default DietPreferences
export default AccommodationPreferences
