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
        email: "",
        mobilePhone: "",
        phone: "",
        address: {
            streetName: "",
            houseNumber: "",
            houseName: "",
            apartmentBlock: "",
            floor: "",
            apartmentNumber: "",
            postOfficeBoxNumber: "",
            city: "",
            postalCode: "",
            state: "",
            country: "",
        },
        facebook: "",
        instagram: "",
        x: "",
        linkedIn: "",
        ticToc: "",
    },
    settings: {
        emailForUserName: "",
        password: "",
        emailForAccountRecovery: "",
        emailForNotifications: "",
        publicName: "",
        publicAvatarUrl: "",
        language: "en",
        currency: "SEK",
        timezone: "GMT+1", // TODO: checka
        unitSystem: "metric",
        notificationsAreEnabled: false,
        subscriptionsAutoRenew: false,
        notificationsViaEmail: false,
        notificationViaAppMessage: false,
        mode: "dark",
        // twoFactorAuthentication: false,
        // accessibilityTextSize: number
        // subscriptionIds: string[]
    },
    personalInfo: {
        dateOfBirth: null,
        gender: null,
        partnerId: "",
        childrenIds: [],
        grandChildrenIds: [],
        parentIds: [],
        siblingIds: [],
        friendIds: [],
        colleagueIds: [],
    },
    preferences: {
        accomodation: {
            bedAndBreakfast: false,
            boatOrHouseboat: false,
            boutiqueHotel: false,
            cabinOrChalet: false,
            campground: false,
            ecoLodge: false,
            farmStay: false,
            glamping: false,
            guesthouse: false,
            homestay: false,
            hotel: false,
            hostel: false,
            luxuryHotel: false,
            motel: false,
            resort: false,
            safariLodge: false,
            servicedApartment: false,
            treehouseAccommodation: false,
            vacationRental: false,
            youthHostel: false,
        },
        budget: {
            maxAccommodationPricePerNight: null,
            maxFoodExpense: null,
            maxDrinkExpense: null,
            maxTransportationExpense: null,
            maxEntertainmentExpense: null,
            maxTotalBudget: null,
        },
        dietary: {
            vegetarian: false,
            lactoVegetarian: false,
            ovoVegetarian: false,
            lactoOvo: false,
            pescatarian: false,
            vegan: false,
            rawVegan: false,
            kosher: false,
            halal: false,
            jain: false,
            hindu: false,
            glutenFree: false,
            dairyFree: false,
            nutFree: false,
            soyFree: false,
            shellFree: false,
            eggFree: false,
            sugarFree: false,
            lowCarb: false,
            lowFat: false,
            lowSodium: false,
            paleo: false,
            ketogenic: false,
        },
        allergies: {
            peanutAllergy: false,
            treeNutAllergy: false,
            shellfishAllergy: false,
            dairyAllergy: false,
            eggAllergy: false,
            soyAllergy: false,
            wheatAllergy: false,
            glutenAllergy: false,
        },
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
        foodDishes: {
            hamburger: false,
            pasta: false,
            pizza: false,
            seaFood: false,
        },
        drinks: {
            beer: false,
            cocktails: false,
            coffee: false,
            energyDrinks: false,
            juice: false,
            milkshakes: false,
            mocktails: false,
            smoothies: false,
            soda: false,
            tea: false,
            water: false,
            whiskey: false,
            wine: false,
        },
        transportation: {
            airplane: false,
            bicycle: false,
            boat: false,
            bus: false,
            car: false,
            motorcycle: false,
            publicTransport: false,
            recreationalVehicle: false,
            rideshare: false,
            taxi: false,
            train: false,
            walking: false,
        },
        vacationType: {
            adventureTravel: false,
            backpackingAndBudgetTravel: false,
            beachVacations: false,
            cityBreaks: false,
            cruiseVacations: false,
            culturalExperiences: false,
            ecoTourism: false,
            familyFriendlyDestinations: false,
            festivalAndEventTourism: false,
            foodAndCulinaryTourism: false,
            historicalAndHeritageTourism: false,
            luxuryTravel: false,
            outdoorAndNatureExploration: false,
            photographyAndArtFocusedTravel: false,
            roadTrips: false,
            skiingAndSnowboardingTrips: false,
            soloTravel: false,
            volunteerAndCommunityBasedTourism: false,
            wellnessAndSpaRetreats: false,
            wildlifeAndSafariExperiences: false,
        },
    },
    disabilities: {
        noDisabilty: false,
        visualImpairment: false,
        hearingImpairment: false,
        speechImpairment: false,
        mobilityImpairment: false,
        cognitiveDisabilities: false,
        neurologicalDisorders: false,
        otherDisabilities: false,
        commentOnDisabilities: "",
    },
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
            state.personalInfo = action.payload.personalInfo
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
        updatePersonalInfo: (state, action: PayloadAction<User>) => {
            state.personalInfo = action.payload.personalInfo
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
