import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit" // För att typa action.payload i reducer-funktioner
import User from "../../types/user/User"
import Currency from "@/types/common/Currency"
import BudgetPreference from "@/types/user/BudgetPreference"
/* import Gender from "@/types/common/Gender" */
import axios from "axios"

// Initial state

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
        diet: [
            {
                id: 1,
                label: "Vegetarian",
                selected: false,
            },
            {
                id: 2,
                label: "Vegan",
                selected: false,
            },
            {
                id: 3,
                label: "Halal",
                selected: false,
            },
            {
                id: 4,
                label: "Gluten Fre",
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
        city: "",
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
        setUserLocation: (state, action: PayloadAction<{ city: string }>) => {
            state.sessionInfo.city = action.payload.city
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
        toggleDietPreference: (state, action: PayloadAction<number>) => {
            const id = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    diet: state.preferences.diet.map((item) =>
                        item.id === id
                            ? { ...item, selected: !item.selected }
                            : item,
                    ),
                },
            }
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

    //  extraReducers är en reducer som kan hantera actions från andra slices eller från createAsyncThunk
    // builder är ett objekt som innehåller metoder för att lägga till case reducers
    // med addCase kan vi fånga upp olika action från den asynkrona hämtningen (pending, fulfilled, rejected)
    // https://redux-toolkit.js.org/api/createAsyncThunk
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
            state.sessionInfo.isLoggedIn = true
            state.profile.firstName = action.payload.firstName
            state.profile.lastName = action.payload.lastName
            state.settings.email = action.payload.email
            state.profile.address.country = action.payload.country
            state.profile.address.city = action.payload.city
            state.profile.userName = action.payload.userName
            state.id = action.payload.id
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
        console.log("Profile data:", response.data)
        return response.data
    },
)
export const patchUserProfile = createAsyncThunk(
    "user/patchUserProfile",
    async (userData: {
        firstName: string
        lastName: string
        userName: string
        city: string
        country: string
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

// createAsyncThunk tar två argument, ett namn och en funktion som returnerar en promise
/* export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (urlEndpoint: string) => {
        const response: Response = await fetch(urlEndpoint)
        if (!response.ok) {
            throw new Error("Failed to fetch user")
        } else {
            const data = await response.json()
            console.log("data.hits TODO: in fetchUser function:", data.hits)
            const fetchedUser: User = data.hits // TODO: CHECKA 'hits'
            return fetchedUser
        }
    },
) */

// Exporterar alla actionfunktioner
export const {
    updateUser,
    updateUserId,
    updateIsLoggedIn,
    toggleAccommodationPreference,
    toggleDietPreference,
    toggleFoodPreference,
    toggleTransportationPreference,
    toggleVacationPreference,
    updatePreferredCurrency,
    updateBudgetPreference,
    updateSessionInfo,
    addBasicUserProfileInfo,
    updateIsLoading,
    updateMessageToUser,
    loginUser,
    logoutUser,
    signOutUser,
    resetToInitialState,
    setUserLocation,
} = userSlice.actions
// Exporterar reducern
export default userSlice.reducer
