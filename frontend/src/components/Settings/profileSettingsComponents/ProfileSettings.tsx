import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "@/store/store"
import {
    toggleAccommodationPreference,
    toggleActivityPreference,
    toggleFoodPreference,
    /* toggleTransportationPreference, */
    toggleVacationPreference,
    // updatePreferredCurrency,
    // updateBudgetPreference,
} from "@/store/slices/userSlice"
// import Currency from "@/types/common/Currency"
// import BudgetPreference from "@/types/user/BudgetPreference"
// import BudgetPreferencesSection from "./BudgetPreferencesSection"
import ProfileDetailsSection from "./ProfileDetailsSection"
import PreferencesSection from "./PreferencesSection"
import { patchUserProfile, fetchUserProfile } from "@/store/slices/userSlice"

const ProfileSettings: React.FC = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()
    const accommodationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.accomodation,
    )
    const activityPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.activities,
    )
    const foodPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const transportationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.transportation,
    )
    const vacationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.vacation,
    )
    /*    const budgetPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.budget,
    )
    const preferredCurrency = useSelector(
        (state: RootState) => state.user.settings.preferredCurrency,
    )
    const currencyList = useSelector(
        (state: RootState) => state.common.currencies,
    ) */

    const handleToggleAccommodationPreference = (id: number) => {
        dispatch(toggleAccommodationPreference(id))
    }
    const handleToggleActivityPreference = (id: number) => {
        dispatch(toggleActivityPreference(id))
    }
    const handleToggleFoodPreference = (id: number) => {
        dispatch(toggleFoodPreference(id))
    }
    /* const handleToggleTransportationPreference = (id: number) => {
        dispatch(toggleTransportationPreference(id))
    } */
    const handleToggleVacationPreference = (id: number) => {
        dispatch(toggleVacationPreference(id))
    }
    /*   const handlePreferredCurrencySelected = (currency: Currency) => {
        dispatch(updatePreferredCurrency(currency))
    }
    const handleBudgetPreferenceUpdated = (
        budgetPreference: BudgetPreference,
    ) => {
        dispatch(updateBudgetPreference(budgetPreference))
    } */

    // Local states
    const [firstName, setFirstName] = useState<string | undefined>(
        useSelector((state: RootState) => state.user.profile.firstName),
    )
    const [lastName, setLastName] = useState<string | undefined>(
        useSelector((state: RootState) => state.user.profile.lastName),
    )
    const [userName, setUserName] = useState<string | undefined>(
        useSelector((state: RootState) => state.user.profile.userName),
    )
    const [city, setCity] = useState<string | undefined>(
        useSelector((state: RootState) => state.user.profile.address.city),
    )
    const [country, setCountry] = useState<string | undefined>(
        useSelector((state: RootState) => state.user.profile.address.country),
    )

    // Handle-functions
    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setLastName(e.target.value)
    }
    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserName(e.target.value)
    }
    const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCity(e.target.value)
    }
    const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setCountry(e.target.value)
    }

    const updateUserInfo = async () => {
        const userData = {
            firstName: firstName || "",
            lastName: lastName || "",
            userName: userName || "",
            city: city || "",
            country: country || "",
        }
        const preferenceData = {
            foods: foodPreferenceList,
            accommodations: accommodationPreferenceList,
            diets: activityPreferenceList,
            transportations: transportationPreferenceList,
            vacations: vacationPreferenceList,
        }
        console.log(userData)

        await dispatch(patchUserProfile({ userData, preferenceData }))
        await dispatch(fetchUserProfile())
        navigate("/profilestart")
    }

    return (
        <main className="mb-10 flex min-h-screen items-start justify-center">
            <div className="flex w-full items-center justify-center px-4 pt-20 md:px-24 md:pt-28 lg:gap-10 lg:px-40 lg:pt-40">
                <img
                    className=" hidden xl:flex xl:w-1/2 2xl:w-[600px]"
                    src="./images/unsplash-bg7.png"
                    alt="Background image"
                />
                <div className="relative flex w-full max-w-[600px] flex-col items-center justify-center gap-6">
                    <div className="flex justify-center">
                        <h1 className="text-2xl font-bold">Profile settings</h1>
                    </div>

                    {/* Username and Profile Information */}
                    <ProfileDetailsSection
                        handleFirstNameChange={handleFirstNameChange}
                        handleLastNameChange={handleLastNameChange}
                        handleUserNameChange={handleUserNameChange}
                        handleCityChange={handleCityChange}
                        handleCountryChange={handleCountryChange}
                        firstName={firstName}
                        lastName={lastName}
                        userName={userName}
                        city={city}
                        country={country}
                    />
                    <p className="self-start text-xl">Preferences</p>
                    {/* Preferences Sections */}
                    <PreferencesSection
                        title="Accommodation"
                        items={accommodationPreferenceList}
                        handleToggle={handleToggleAccommodationPreference}
                        accordionKey="accommodation"
                    />

                    <PreferencesSection
                        title="Activities"
                        items={activityPreferenceList}
                        handleToggle={handleToggleActivityPreference}
                        accordionKey="activities"
                    />

                    <PreferencesSection
                        title="Food"
                        items={foodPreferenceList}
                        handleToggle={handleToggleFoodPreference}
                        accordionKey="food"
                    />

                    {/* <PreferencesSection
                    title="Transportation"
                    items={transportationPreferenceList}
                    handleToggle={handleToggleTransportationPreference}
                    accordionKey="transportation"
                /> */}

                    <PreferencesSection
                        title="Vacation"
                        items={vacationPreferenceList}
                        handleToggle={handleToggleVacationPreference}
                        accordionKey="vacation"
                    />

                    {/* Budget Preferences */}
                    {/* <BudgetPreferencesSection
                    budgetPreferenceList={budgetPreferenceList}
                    handleBudgetPreferenceUpdated={
                        handleBudgetPreferenceUpdated
                    }
                /> */}

                    {/* Select Currency */}
                    {/* <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">Preferred Currency</p>
                    <Select
                        value={preferredCurrency!.code!}
                        
                    >
                        <SelectTrigger className="flex h-12 w-full border-outline placeholder:text-onBackground placeholder:opacity-50">
                            <SelectValue placeholder="Select your preferred currency" />
                        </SelectTrigger>
                        <SelectContent>
                            {currencyList.map((currency) => (
                                <SelectItem
                                    key={currency.id}
                                    value={currency.code!}
                                    onChange={() =>
                                        handlePreferredCurrencySelected(
                                            currency,
                                        )
                                    }
                                    
                                >
                                    {currency.code} ({currency.label})
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div> */}

                    {/* Save Changes Button */}
                    <Button
                        onClick={updateUserInfo}
                        className="flex w-full items-center justify-center gap-2 p-3"
                    >
                        Save changes
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default ProfileSettings
