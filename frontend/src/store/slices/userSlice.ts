import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit" // För att typa action.payload i reducer-funktioner
import User from "../../types/user/User"

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

// Initial state

const initialState: User = {
    id: null,
    profile: {
        firstName: "",
        lastName: "",
        gender: null,
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
        currency: "SEK",
        mode: "dark",
    },
    preferences: {
        accomodation: [
            {   
                id: 1,
                label: "Bed & Breakfast",
                selected: false
            },
            {   
                id: 2,
                label: "Boat or Houseboat",
                selected: false
            },  
            {
                id: 3,
                label: "Boutique Hotel",
                selected: false
            },
            {
                id: 4,
                label: "Cabin or Chalet",
                selected: false
            },
            {
                id: 5,
                label: "Campground",
                selected: false
            },
            {
                id: 6,
                label: "Eco Lodge",
                selected: false
            },
            {
                id: 7,
                label: "Farm Stay",
                selected: false
            },
            {
                id: 8,
                label: "Glamping",
                selected: false
            },
            {
                id: 9,
                label: "Guesthouse",
                selected: false
            },
            {
                id: 10,
                label: "Homestay",
                selected: false
            },
            {
                id: 11,
                label: "Hotel",
                selected: false
            },
            {
                id: 12,
                label: "Hostel",
                selected: false
            },
            {
                id: 13,
                label: "Luxury Hotel",
                selected: false
            },
            {
                id: 14,
                label: "Motel",
                selected: false
            },
            {
                id: 15,
                label: "Resort",
                selected: false
            },
            {
                id: 16,
                label: "Safari Lodge",
                selected: false
            },
            {
                id: 17,
                label: "Serviced Apartment",
                selected: false
            },
            {
                id: 18,
                label: "Treehouse Accommodation",
                selected: false
            },
            {
                id: 19,
                label: "Vacation Rental",
                selected: false
            },
            {
                id: 20,
                label: "Youth Hostel",
                selected: false
            }
        ],  
        budget: [
            {
                id: 1,
                label: "Max Accommodation Budget per Night per Person",
                currency: "EUR",
                value: 100,
            },
            {
                id: 2,
                label: "Max Food Budget per Day",
                currency: null,
                value: null,
            },
            {
                id: 3,
                label: "Max Drink Budget per Day",
                currency: null,
                value: null,
            },
            {
                id: 4,
                label: "Max Transportation Budget per Person",
                currency: null,
                value: null,
            },
            {
                id: 5,
                label: "Max Entertainment Budget per Day per Person",
                currency: null,
                value: null,
            },
            {
                id: 6,
                label: "Max Vacation Budget per Day per Person",
                currency: null,
                value: null,
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
                label: "Lacto Vegetarian",
                selected: false,
            },
            {
                id: 3,
                label: "Ovo Vegetarian",
                selected: false,
            },
            {
                id: 4,
                label: "Lacto Ovo",
                selected: false,
            },
            {
                id: 5,
                label: "Pescatarian",
                selected: false,
            },
            {
                id: 6,
                label: "Vegan",
                selected: false,
            },
            {
                id: 7,
                label: "Raw Vegan",
                selected: false,
            },
            {
                id: 8,
                label: "Kosher",
                selected: false,
            },
            {
                id: 9,
                label: "Halal",
                selected: false,
            },
            {
                id: 10,
                label: "Jain",
                selected: false,
            },
            {
                id: 11,
                label: "Hindu",
                selected: false,
            },
            {
                id: 12,
                label: "Gluten Free",
                selected: false,
            },
            {
                id: 13,
                label: "Dairy Free",
                selected: false,
            },
            {
                id: 14,
                label: "Nut Free",
                selected: false,
            },
            {
                id: 15,
                label: "Soy Free",
                selected: false,
            },
            {
                id: 16,
                label: "Shell Free",
                selected: false,
            },
            {
                id: 17,
                label: "Egg Free",
                selected: false,
            },
            {
                id: 18,
                label: "Sugar Free",
                selected: false,
            },
            {
                id: 19,
                label: "Low Carb",
                selected: false,
            },
            {
                id: 20,
                label: "Low Fat",
                selected: false,
            },
            {
                id: 21,
                label: "Low Sodium",
                selected: false,
            },
            {
                id: 22,
                label: "Paleo",
                selected: false,
            },
            {
                id: 23,
                label: "Ketogenic",
                selected: false,
            },
        ],
        food: [
            {
                like: false,
                country: "American",
                dishes: [
                    "Hamburgare",
                    "Hotdogs",
                    "BBQ ribs",
                    "Macaroni and cheese",
                    "Chicken and waffles",
                ],
            },
            {
                like: false,
                country: "Australian",
                dishes: [
                    "Anzac biscuits",
                    "Meat pie",
                    "Pavlova",
                    "Vegemite on toast",
                    "Lamington",
                ],
            },
            {
                like: false,
                country: "Brazilian",
                dishes: [
                    "Feijoada",
                    "Pão de queijo",
                    "Churrasco",
                    "Coxinha",
                    "Moqueca",
                ],
            },
            {
                like: false,
                country: "British",
                dishes: [
                    "Fish and chips",
                    "Roast beef with Yorkshire pudding",
                    "Full English breakfast",
                    "Shepherd's pie",
                    "Bangers and mash",
                ],
            },
            {
                like: false,
                country: "Cajun Creole",
                dishes: [
                    "Gumbo",
                    "Jambalaya",
                    "Crawfish étouffée",
                    "Red beans and rice",
                    "Shrimp and grits",
                ],
            },
            {
                like: false,
                country: "Caribbean",
                dishes: [
                    "Ackee and saltfish",
                    "Jerk chicken",
                    "Curried goat",
                    "Roti",
                    "Plantains",
                ],
            },
            {
                like: false,
                country: "Chinese",
                dishes: [
                    "Kung Pao chicken",
                    "Peking duck",
                    "Dim sum",
                    "Sweet and sour pork",
                    "Mapo tofu",
                ],
            },
            {
                like: false,
                country: "Ethiopian",
                dishes: [
                    "Injera with wat",
                    "Doro wat",
                    "Kitfo",
                    "Tibs",
                    "Shiro",
                ],
            },
            {
                like: false,
                country: "French",
                dishes: [
                    "Coq au vin",
                    "Croissants",
                    "Bouillabaisse",
                    "Ratatouille",
                    "Quiche Lorraine",
                ],
            },
            {
                like: false,
                country: "German",
                dishes: [
                    "Bratwurst with sauerkraut",
                    "Schnitzel",
                    "Pretzels",
                    "Sauerbraten",
                    "Black Forest cake",
                ],
            },
            {
                like: false,
                country: "Greek",
                dishes: [
                    "Moussaka",
                    "Souvlaki",
                    "Tzatziki",
                    "Dolmades",
                    "Spanakopita",
                ],
            },
            {
                like: false,
                country: "Indian",
                dishes: [
                    "Butter chicken",
                    "Tandoori chicken",
                    "Naan bread",
                    "Samosas",
                    "Palak paneer",
                ],
            },
            {
                like: false,
                country: "Italian",
                dishes: [
                    "Pizza Margherita",
                    "Spaghetti carbonara",
                    "Risotto",
                    "Lasagna",
                    "Tiramisu",
                ],
            },
            {
                like: false,
                country: "Japanese",
                dishes: [
                    "Sushi",
                    "Ramen",
                    "Tempura",
                    "Udon noodles",
                    "Tonkatsu",
                ],
            },
            {
                like: false,
                country: "Korean",
                dishes: [
                    "Kimchi",
                    "Bulgogi",
                    "Bibimbap",
                    "Kimchi jjigae",
                    "Japchae",
                ],
            },
            {
                like: false,
                country: "Mexican",
                dishes: [
                    "Tacos",
                    "Enchiladas",
                    "Chiles rellenos",
                    "Guacamole",
                    "Mole",
                ],
            },
            {
                like: false,
                country: "Middle Eastern",
                dishes: [
                    "Hummus",
                    "Falafel",
                    "Shawarma",
                    "Tabbouleh",
                    "Baklava",
                ],
            },
            {
                like: false,
                country: "Spanish",
                dishes: [
                    "Paella",
                    "Tortilla española",
                    "Gazpacho",
                    "Patatas bravas",
                    "Churros",
                ],
            },
            {
                like: false,
                country: "Thai",
                dishes: [
                    "Pad Thai",
                    "Tom yum soup",
                    "Green curry",
                    "Phad thai",
                    "Massaman curry",
                ],
            },
            {
                like: false,
                country: "Vietnamese",
                dishes: ["Pho", "Banh mi", "Goi cuon", "Bun cha", "Com tam"],
            },
            {
                like: false,
                country: "Mediterranean",
                dishes: [
                    "Greek salad",
                    "Hummus with pita",
                    "Moussaka",
                    "Falafel",
                    "Baba ganoush",
                ],
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
                label: "Bicycle",
                selected: false
            },
            {
                id: 3,
                label: "Boat",
                selected: false
            },
            {
                id: 4,
                label: "Bus",
                selected: false
            },
            {
                id: 5,
                label: "Car",
                selected: false
            },
            {
                id: 6,
                label: "Motorcycle",
                selected: false
            },
            {
                id: 7,
                label: "Public Transport",
                selected: false
            },
            {
                id: 8,
                label: "Recreational Vehicle",
                selected: false
            },
            {
                id: 9,
                label: "Rideshare",
                selected: false
            },
            {
                id: 10,
                label: "Taxi",
                selected: false
            },
            {
                id: 11,
                label: "Train",
                selected: false
            },
            {
                id: 12,
                label: "Walking",
                selected: false
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
                label: "Backpacking and Budget Travel",
                selected: false,
            },
            {
                id: 3,
                label: "Beach Vacations",
                selected: false,
            },
            {
                id: 4,
                label: "City Breaks",
                selected: false,
            },
            {
                id: 5,
                label: "Cruise Vacations",
                selected: false,
            },
            {
                id: 6,
                label: "Cultural Experiences",
                selected: false,
            },
            {
                id: 7,
                label: "Eco-Tourism",
                selected: false,
            },
            {
                id: 8,
                label: "Family-Friendly Destinations",
                selected: false,
            },
            {
                id: 9,
                label: "Festival and Event Tourism",
                selected: false,
            },
            {
                id: 10,
                label: "Food and Culinary Tourism",
                selected: false,
            },
            {
                id: 11,
                label: "Historical and Heritage Tourism",
                selected: false,
            },
            {
                id: 12,
                label: "Luxury Travel",
                selected: false,
            },
            {
                id: 13,
                label: "Outdoor and Nature Exploration",
                selected: false,
            },
            {
                id: 14,
                label: "Photography and Art-Focused Travel",
                selected: false,
            },
            {
                id: 15,
                label: "Road Trips",
                selected: false,
            },
            {
                id: 16,
                label: "Skiing and Snowboarding Trips",
                selected: false,
            },
            {
                id: 17,
                label: "Solo Travel",
                selected: false,
            },
            {
                id: 18,
                label: "Volunteer and Community-Based Tourism",
                selected: false,
            },
            {
                id: 19,
                label: "Wellness and Spa Retreats",
                selected: false,
            },
            {
                id: 20,
                label: "Wildlife and Safari Experiences",
                selected: false,
            },
        ],
    },
    disabilities: [
        {
            id: 1,
            label: "No Disability",
            selected: false,
        },
        {
            id: 2,
            label: "Visual Impairment",
            selected: false,
        },
        {
            id: 3,
            label: "Hearing Impairment",
            selected: false,
        },
        {
            id: 4,
            label: "Speech Impairment",
            selected: false,
        },
        {
            id: 5,
            label: "Mobility Impairment",
            selected: false,
        },
        {
            id: 6,
            label: "Cognitive Disabilities",
            selected: false,
        },
        {
            id: 7,
            label: "Neurological Disorders",
            selected: false,
        },
        {
            id: 8,
            label: "Other Disabilities",
            selected: false,
        },
    ],
    sessionInfo: {
        isLoggedIn: false,
        isLoading: false,
        messageToUser: "",
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
            state.disabilities = action.payload.disabilities
            state.settings = action.payload.settings
            state.sessionInfo = action.payload.sessionInfo
        },
        updateId: (state, action: PayloadAction<User>) => {
            state.id = action.payload.id
        },
        updateIsLoggedIns: (state, action: PayloadAction<User>) => {
            state.sessionInfo.isLoggedIn = action.payload.sessionInfo.isLoggedIn
        },
        toggleFoodPreference: (state, action: PayloadAction<string>) => {
            const country = action.payload
            return {
                ...state,
                preferences: {
                    ...state.preferences,
                    food: state.preferences.food.map((item) =>
                        item.country === country
                            ? { ...item, like: !item.like }
                            : item,
                    ),
                },
            }
        },
        // TODO:
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
            },
        )
        builder.addCase(fetchUser.rejected, (state) => {
            state.sessionInfo.isLoading = false
            state.sessionInfo.messageToUser =
                "The user profile cannot be loaded. Please try again later."
            console.error("Error fetching user data")
        })
    },
})

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
export const { updateUser, toggleFoodPreference } = userSlice.actions // TODO:
// Exporterar reducern
export default userSlice.reducer

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
