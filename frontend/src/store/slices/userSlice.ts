import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit" // För att typa action.payload i reducer-funktioner
import User from "../../types/user/User"
import Currency from "@/types/common/Currency"
import BudgetPreference from "@/types/user/BudgetPreference"
import Gender from "@/types/common/Gender"
import axios from "axios"

// Initial state

const initialState: User = {
    id: null,
    profile: {
        firstName: "",
        lastName: "",
        userName: "",
        phoneNumber: "",
        gender: {
            id: 0,
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
            state.sessionInfo.city = action.payload
        },
        loginUser: (state) => {
            state.sessionInfo.isLoggedIn = true
        },
        logoutUser: (state) => {
            state.sessionInfo.isLoggedIn = false
        },
        signOutUser: (state) => {
            state.sessionInfo.isLoggedIn = false
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
                phoneNumber: string
                city: string
                country: string
                gender: Gender
            }>,
        ) => {
            // update state
            state.profile.firstName = action.payload.firstName
            state.profile.lastName = action.payload.lastName
            state.profile.userName = action.payload.userName
            state.profile.phoneNumber = action.payload.phoneNumber
            state.profile.address.city = action.payload.city
            state.profile.address.country = action.payload.country
            state.profile.gender = action.payload.gender
        },
    },

    //  extraReducers är en reducer som kan hantera actions från andra slices eller från createAsyncThunk
    // builder är ett objekt som innehåller metoder för att lägga till case reducers
    // med addCase kan vi fånga upp olika action från den asynkrona hämtningen (pending, fulfilled, rejected)
    // https://redux-toolkit.js.org/api/createAsyncThunk
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state = initialState
            state.sessionInfo.isLoading = true
            state.sessionInfo.messageToUser = "Loading user profile data..."
        })
        builder.addCase(
            fetchUser.fulfilled,
            (state, action: PayloadAction<User>) => {
                //console.log("action.payload in fetchJobs.fulfilled:", action.payload);
                //console.log("state.allJobs in fetchJobs.fulfilled ex ante... ",state.allJobs);
                // TODO:
                state = action.payload
                state.sessionInfo.isLoading = false
            },
        )
        builder.addCase(fetchUser.rejected, (state) => {
            state.sessionInfo.isLoading = false
            state.sessionInfo.messageToUser =
                "The user profile cannot be loaded. Please try again later."
            console.error("Error fetching user data")
        })
        builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
            const {
                firstName,
                lastName,
                userName,
                phoneNumber,
                city,
                country,
                gender,
            } = action.payload
            state.profile = {
                ...state.profile,
                firstName,
                lastName,
                userName,
                phoneNumber,
                address: {
                    ...state.profile.address,
                    city,
                    country,
                },
                gender,
            }
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

// createAsyncThunk tar två argument, ett namn och en funktion som returnerar en promise
export const fetchUser = createAsyncThunk(
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
)

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
    setUserLocation,
} = userSlice.actions
// Exporterar reducern
export default userSlice.reducer

/* if (!localStorage.getItem("favouriteJobs")) {
  localStorage.setItem("favouriteJobs", JSON.stringify([]));
}
if (!localStorage.getItem("currentSkillsOperand")) {
  localStorage.setItem("currentSkillsOperand", JSON.stringify("OCH"));
}
if (!localStorage.getItem("currentWorkingHoursTypeLabel")) {
  localStorage.setItem("currentWorkingHoursTypeLabel", JSON.stringify("Heltid"));
}
if (!localStorage.getItem("currentSkillsFilters")) {
  localStorage.setItem("currentSkillsFilters", JSON.stringify([]));
}
if (!localStorage.getItem("currentLocationFilters")) {
  localStorage.setItem("currentLocationFilters", JSON.stringify([]));
}
if (!localStorage.getItem("maxSearchResultsChosen")) {
  localStorage.setItem("maxSearchResultsChosen", JSON.stringify(10));
} */

/* const favouriteJobsFromLocalStorage = JSON.parse(localStorage.getItem("favouriteJobs")!);
const currentSkillsOperand = JSON.parse(localStorage.getItem("currentSkillsOperand")!);
const currentWorkingHoursTypeLabel = JSON.parse(localStorage.getItem("currentWorkingHoursTypeLabel")!);

const currentSkillsFilters = JSON.parse(localStorage.getItem("currentSkillsFilters")!);
const currentLocationFilters = JSON.parse(localStorage.getItem("currentLocationFilters")!);
const maxSearchResultsChosen = Number(JSON.parse(localStorage.getItem("maxSearchResultsChosen")!))
 */

/*     updatePersonalInfo: (state, action: PayloadAction<Job[]>) =>{
      state.favouriteJobs = action.payload
      localStorage.setItem("favouriteJobs", JSON.stringify(action.payload))
    },
    updateCurrentLocationFilters: (state, action: PayloadAction<string[]>) => {
      state.currentLocationFilters = action.payload
      localStorage.setItem("currentLocationFilters", JSON.stringify(action.payload))
      console.log("currentLocationFilters action.payload in searchJobsSlice reducer:", action.payload);
      console.log("currentLocationFilters in searchJobsSlice reducer:", state.currentLocationFilters);
    },
    updateCurrentSkillsFilters: (state, action: PayloadAction<string[]>) => {
      console.log("state.currentSkillsFilters in reducer before updating", state.currentSkillsFilters);
      state.currentSkillsFilters = action.payload
      localStorage.setItem("currentSkillsFilters", JSON.stringify(action.payload))
      console.log("currentSkillsFilters action.payload in searchJobsSlice reducer:", action.payload);
      console.log("currentSkillsFilters in searchJobsSlice reducer:", state.currentSkillsFilters);
    },
    updateCurrentSkillsOperand: (state, action: PayloadAction<SearchJobsState['currentSkillsOperand']>)  => {
      state.currentSkillsOperand = action.payload
      localStorage.setItem("currentSkillsOperand", JSON.stringify(action.payload))
      console.log("action.payload in updateCurrentSkillsOperand in searchJobsSlice:", action.payload);
      console.log("currentSkillsOperand in updateCurrentSkillsOperand in searchJobsSlice:", state.currentSkillsOperand);
    },
    updateCurrentWorkingHoursTypeLabel: (state, action: PayloadAction<string>)  => {
      state.currentWorkingHoursTypeLabel= action.payload
      localStorage.setItem("currentWorkingHoursTypeLabel", JSON.stringify(action.payload))
      console.log("action.payload in updateCurrentWorkingHoursTypeLabel in searchJobsSlice:", action.payload);
      console.log("currentWorkingHoursTypeLabel in updateCurrentWorkingHoursTypeLabel in searchJobsSlice:", state.currentWorkingHoursTypeLabel);
    },
    updateMessageToUser: (state, action: PayloadAction<string>) => {
      state.messageToUser = action.payload
    },
    clearAllCurrentFilters: (state) => {
      state.currentLocationFilters = []
      state.currentSkillsFilters = []
      state.currentSkillsOperand = "ELLER"
    },
    updateMaxSearchResultsChosen: (state, action: PayloadAction<number>) => {
      state.maxSearchResultsChosen = action.payload
    }, */

/* if(state.allJobs.length === 0){
        state.messageToUser = "Sorry, there are no such jobs available."
      } else {
        state.messageToUser = ""
      }
      console.log("state.allJobs after update:", state.allJobs); 
       */
// If all filters are empty, set currentJobs to allJobs
/* const stateCurrentSkillsFilters = [...state.currentSkillsFilters]  
      const stateCurrentLocationFilters = [...state.currentLocationFilters] 
      const stateCurrentSkillsOperand = state.currentSkillsOperand  // no shallow copy needed 
      console.log("stateCurrentSkillsFilters in fetchJobs reducer:",stateCurrentSkillsFilters);
      console.log("stateCurrentLocationFilters in fetchJobs reducer:",stateCurrentLocationFilters)
      console.log("stateCurrentSkillsOperand in fetchJobs-reducer: ",stateCurrentSkillsOperand);
       */
/*  if((!stateCurrentSkillsFilters && !stateCurrentLocationFilters) || (stateCurrentSkillsOperand === "ELLER")){
        state.currentJobs = state.allJobs
        state.numberOfHits = state.allJobs.length
      } else if (stateCurrentSkillsOperand === "OCH"){

          console.log("state.currentSkillsFilters in OCH:",stateCurrentSkillsFilters);
          const newCurrentJobs: Job[] = state.allJobs.filter((job: Job) => {
            return stateCurrentSkillsFilters.every(filterValue => job.description.text?.toLowerCase()!.includes(filterValue.toLowerCase())); 
          });
          state.currentJobs = newCurrentJobs 
          state.numberOfHits = newCurrentJobs.length
      } else {
          console.log("Error: CurrentSkillsOperand is not working");
          throw new Error
      } 
      console.log("state.currentJobs after update:", state.currentJobs);
      */
