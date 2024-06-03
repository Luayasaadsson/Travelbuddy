import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit" // För att typa action.payload i reducer-funktioner
import User from "../../types/user/User"
import Currency from "@/types/common/Currency"
import BudgetPreference from "@/types/user/BudgetPreference"
/* import Gender from "@/types/common/Gender" */
import axios from "axios"

// Initial state

const initialProfileImage = localStorage.getItem("profileImage") || ""

const initialState: User = {
    id: null,
    profile: {
        firstName: "",
        lastName: "",
        userName: "",
        gender: {
            label: "",
        },
        address: {
            city: "",
            country: "",
        },
        profileImage: initialProfileImage,
    },
    settings: {
        email: "",
        password: "",
        publicName: "",
        publicAvatarUrl: "",
        language: "en",

        preferredCurrency: {
            id: 1,
            label: "US-Dollar",
            code: "USD",
            currencyPerUsd: 1.0,
        },
    },
    preferences: {
        accomodation: [
            {
                id: 1,
                label: "Hotel",
                selected: false,
            },
            {
                id: 2,
                label: "Hostel",
                selected: false,
            },
            {
                id: 3,
                label: "Airbnb",
                selected: false,
            },
            {
                id: 4,
                label: "Campground",
                selected: false,
            },
            {
                id: 5,
                label: "Motel",
                selected: false,
            },
            {
                id: 6,
                label: "Resort",
                selected: false,
            },
        ],
        budget: [
            {
                id: 1,
                label: "Total Vacation Budget per person",
                amount: 1000,
            },
            {
                id: 2,
                label: "Transporation Budget per person",
                amount: 300,
            },
            {
                id: 3,
                label: "Accommodation Budget per person",
                amount: null,
            },
            {
                id: 4,
                label: "Food & Drink Budget per person",
                amount: null,
            },
            {
                id: 5,
                label: "Entertainment Budget per person",
                amount: null,
            },
            {
                id: 6,
                label: "Other Budget per person",
                amount: null,
            },
            {
                id: 7,
                label: "Restaurant Price per meal",
                amount: null,
            },
        ],
        activities: [
            {
                id: 1,
                label: "City tours",
                selected: false,
            },
            {
                id: 2,
                label: "Historical sites",
                selected: false,
            },
            {
                id: 3,
                label: "Food and drink tastings",
                selected: false,
            },
            {
                id: 4,
                label: "Museums",
                selected: false,
            },
            {
                id: 5,
                label: "Beach activities",
                selected: false,
            },
            {
                id: 6,
                label: "Scenic spots",
                selected: false,
            },
            {
                id: 7,
                label: "Markets and shopping",
                selected: false,
            },
            {
                id: 8,
                label: "Nightlife",
                selected: false,
            },
            {
                id: 9,
                label: "Cultural events",
                selected: false,
            },
            {
                id: 10,
                label: "Day trips",
                selected: false,
            },
        ],
        food: [
            {
                id: 1,
                selected: false,
                label: "American",
            },
            {
                id: 2,
                selected: false,
                label: "Chinese",
            },
            {
                id: 3,
                selected: false,
                label: "French",
            },
            {
                id: 4,
                selected: false,
                label: "Indian",
            },
            {
                id: 5,
                selected: false,
                label: "Italian",
            },
            {
                id: 6,
                selected: false,
                label: "Japanese",
            },
            {
                id: 7,
                selected: false,
                label: "Mexican",
            },
            {
                id: 8,
                selected: false,
                label: "Middle East",
            },
        ],
        transportation: [
            {
                id: 1,
                label: "Airplane",
                selected: false,
            },
            {
                id: 2,
                label: "Bus",
                selected: false,
            },
            {
                id: 3,
                label: "Car",
                selected: false,
            },
            {
                id: 4,
                label: "Train",
                selected: false,
            },
            {
                id: 5,
                label: "Taxi",
                selected: false,
            },
        ],
        vacation: [
            {
                id: 1,
                label: "Adventure Travel",
                selected: false,
            },
            {
                id: 2,
                label: "Backpacking",
                selected: false,
            },
            {
                id: 3,
                label: "Beach Vacations",
                selected: false,
            },
            {
                id: 4,
                label: "Cultural Experiences",
                selected: false,
            },
            {
                id: 5,
                label: "Festival and Event Tourism",
                selected: false,
            },
            {
                id: 6,
                label: "Road Trips",
                selected: false,
            },
            {
                id: 7,
                label: "Skiing and Snowboarding Trips",
                selected: false,
            },
            {
                id: 8,
                label: "Wellness and Spa Retreats",
                selected: false,
            },
        ],
    },
    sessionInfo: {
        isLoggedIn: false,
        isLoading: false,
        messageToUser: "",
        longitude: null,
        latitude: null,
        city: null,
        country: null,
    },
}

// X-Slice med reducer-funktioner
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action: PayloadAction<User>) => {
            console.log(
                "action.payload in updateUser in slice: ",
                action.payload,
            )
            state.profile = action.payload.profile
            state.preferences = action.payload.preferences
            state.settings = action.payload.settings
            state.sessionInfo = action.payload.sessionInfo
        },
        setUserLocation: (
            state,
            action: PayloadAction<{
                longitude: number
                latitude: number
                city: string
                country: string
            }>,
        ) => {
            state.sessionInfo.longitude = action.payload.longitude
            state.sessionInfo.latitude = action.payload.latitude
            state.sessionInfo.city = action.payload.city
            state.sessionInfo.country = action.payload.country
        },
        updateProfileImage: (state, action: PayloadAction<string>) => {
            state.profile.profileImage = action.payload
            localStorage.setItem("profileImage", action.payload)
        },
        loginUser: (state) => {
            state.sessionInfo.isLoggedIn = true
            sessionStorage.setItem("isLoggedIn", "true")
        },
        logoutUser: (state) => {
            state.sessionInfo.isLoggedIn = false
            sessionStorage.removeItem("isLoggedIn")
        },
        signOutUser: (state) => {
            state.sessionInfo.isLoggedIn = false
            sessionStorage.removeItem("isLoggedIn")
        },
        updateUserId: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
        },
        updateSessionInfo: (
            state,
            action: PayloadAction<User["sessionInfo"]>,
        ) => {
            state.sessionInfo = action.payload
        },
        updateIsLoading: (state, action: PayloadAction<boolean>) => {
            state.sessionInfo.isLoading = action.payload
        },
        updateMessageToUser: (state, action: PayloadAction<string>) => {
            state.sessionInfo.messageToUser = action.payload
        },
        updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.sessionInfo.isLoggedIn = action.payload
        },
        toggleFoodPreference: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    food: state.preferences.food.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        toggleAccommodationPreference: (
            state,
            action: PayloadAction<number>,
        ) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    accomodation: state.preferences.accomodation.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        toggleActivityPreference: (state, action: PayloadAction<number>) => {
            state.preferences.activities = state.preferences.activities.map(
                (item) =>
                    item.id === action.payload
                        ? { ...item, selected: !item.selected }
                        : item,
            )
        },
        toggleTransportationPreference: (
            state,
            action: PayloadAction<number>,
        ) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    transportation: state.preferences.transportation.map(
                        (item) =>
                            item.id === id
                                ? { ...item, selected: !item.selected }
                                : item,
                    ),
                },
            }
        },
        toggleVacationPreference: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    vacation: state.preferences.vacation.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
        },
        updateBudgetPreference: (
            state,
            action: PayloadAction<BudgetPreference>,
        ) => {
            const budgetPreference = action.payload
            console.log("budgetPreference:", budgetPreference)
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    budget: state.preferences.budget.map((item) =>
                        item.id === budgetPreference.id
                            ? { ...item, amount: budgetPreference.amount }
                            : item,
                    ),
                },
            }
        },
        updatePreferredCurrency: (state, action: PayloadAction<Currency>) => {
            state.settings.preferredCurrency = action.payload
        },
        addBasicUserProfileInfo: (
            state,
            action: PayloadAction<{
                firstName: string
                lastName: string
                userName: string
                city: string
                country: string
            }>,
        ) => {
            state.profile.firstName = action.payload.firstName
            state.profile.lastName = action.payload.lastName
            state.profile.userName = action.payload.userName
            state.profile.address.city = action.payload.city
            state.profile.address.country = action.payload.country
        },
        resetToInitialState: () => {
            return initialState
        },
    },

    extraReducers: (builder) => {
        builder.addCase(patchUserProfile.pending, (state) => {
            state.sessionInfo.isLoading = true
        })
        builder.addCase(patchUserProfile.fulfilled, (state) => {
            state.sessionInfo.isLoading = false
            state.sessionInfo.messageToUser = "Profile updated successfully"
        })
        builder.addCase(patchUserProfile.rejected, (state) => {
            state.sessionInfo.isLoading = false
            state.sessionInfo.messageToUser = "Failed to update profile"
        })
        builder.addCase(fetchUserProfile.pending, (state) => {
            state.sessionInfo.isLoading = true
        })

        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            const {
                firstName,
                lastName,
                email,
                country,
                city,
                userName,
                id,
                accommodations,
                gender,
                budgets,
                diets,
                foods,
                transportations,
                vacations,
            } = action.payload

            state.sessionInfo.isLoggedIn = true
            state.id = id

            state.profile = {
                ...state.profile,
                firstName: firstName,
                lastName: lastName,
                userName: userName,
                gender: gender,
                address: {
                    city: city,
                    country: country,
                },
            }
            state.preferences = {
                ...state.preferences,
                accomodation:
                    accommodations && accommodations.length > 0
                        ? accommodations
                        : state.preferences.accomodation,
                budget:
                    budgets && budgets.length > 0
                        ? budgets
                        : state.preferences.budget,
                activities:
                    diets && diets.length > 0
                        ? diets
                        : state.preferences.activities,
                food:
                    foods && foods.length > 0 ? foods : state.preferences.food,
                transportation:
                    transportations && transportations.length > 0
                        ? transportations
                        : state.preferences.transportation,
                vacation:
                    vacations && vacations.length > 0
                        ? vacations
                        : state.preferences.vacation,
            }
            state.settings = {
                ...state.settings,
                email: email,
            }

            state.sessionInfo.isLoading = false
        })
        builder.addCase(fetchUserProfile.rejected, (state) => {
            sessionStorage.removeItem("isLoggedIn")
            state.sessionInfo.isLoggedIn = false
            state.sessionInfo.isLoading = false
            state.sessionInfo.messageToUser = "Failed to update profile"
        })
    },
})

// Async thunk för att hämta användarens profil
export const fetchUserProfile = createAsyncThunk(
    "user/fetchUserProfile",
    async () => {
        const response = await axios.get(
            "https://localhost:7038/api/Auth/user",
            {
                withCredentials: true,
            },
        )
        console.log("Fetch profile data:", response.data)
        return response.data
    },
)
export const patchUserProfile = createAsyncThunk(
    "user/patchUserProfile",
    async ({
        userData,
        preferenceData,
    }: {
        userData: {
            firstName: string
            lastName: string
            userName: string
            city: string
            country: string
        }
        preferenceData: {
            accommodations?: { id: number; label: string; selected: boolean }[]
            foods?: { id: number; label: string; selected: boolean }[]
            diets?: { id: number; label: string; selected: boolean }[]
            transportations?: { id: number; label: string; selected: boolean }[]
            vacations?: { id: number; label: string; selected: boolean }[]
        }
    }) => {
        try {
            const response = await axios.patch(
                "https://localhost:7038/api/Auth/user",
                {
                    firstname: userData.firstName,
                    lastname: userData.lastName,
                    userName: userData.userName,
                    city: userData.city,
                    country: userData.country,
                    foods: preferenceData.foods,
                    accommodations: preferenceData.accommodations,
                    diets: preferenceData.diets,
                    transportations: preferenceData.transportations,
                    vacations: preferenceData.vacations,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                },
            )
            return response.data
        } catch (error) {
            throw error
        }
    },
)
// Exporterar alla actionfunktioner
export const {
    updateUser,
    updateUserId,
    updateIsLoggedIn,
    toggleAccommodationPreference,
    toggleActivityPreference,
    toggleFoodPreference,
    toggleTransportationPreference,
    toggleVacationPreference,
    updatePreferredCurrency,
    updateBudgetPreference,
    updateSessionInfo,
    addBasicUserProfileInfo,
    updateIsLoading,
    updateMessageToUser,
    updateProfileImage,
    loginUser,
    logoutUser,
    signOutUser,
    resetToInitialState,
    setUserLocation,
} = userSlice.actions
// Exporterar reducern
export default userSlice.reducer
