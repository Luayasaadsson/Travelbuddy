// import axios from "axios"
import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
/* import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select" */
import { useDispatch, useSelector } from "react-redux"
import { RootState, AppDispatch } from "@/store/store"
import {
    addBasicUserProfileInfo,
    patchUserProfile,
    updateProfileImage,
} from "@/store/slices/userSlice"
import React, { useState, useRef } from "react"
/* import Gender from "@/types/common/Gender" */

// Assumption: The user will only forwarded to MoreAbout, if the user is totally new and has just registered as a user
// => no need to check whether there is any user data already

// Component Function

function MoreAbout() {
    const dispatch = useDispatch<AppDispatch>()
    const profileImage = useSelector(
        (state: RootState) => state.user.profile.profileImage,
    )
    const fileInputRef = useRef<HTMLInputElement>(null)

    // Local states
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")
    const [userName, setUserName] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [country, setCountry] = useState<string>("")

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (typeof reader.result === "string") {
                    dispatch(updateProfileImage(reader.result))
                }
            }
            reader.readAsDataURL(file)
        }
    }

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
    const handleAddBasicUserProfileInfo = () => {
        const userData = {
            firstName,
            lastName,
            userName,
            city,
            country,
            profileImage,
        }
        const preferenceData = {} // Assuming no preferences data to send initially
        dispatch(addBasicUserProfileInfo(userData))
        dispatch(patchUserProfile({ userData, preferenceData }))
    }

    return (
        <main className="h-screen">
            <div className="flex items-center justify-center px-4 pt-20 md:px-24 md:pt-28 lg:gap-10 lg:px-40 lg:pt-40">
                <img
                    className=" hidden xl:flex xl:w-1/2 2xl:w-[600px]"
                    src="./images/unsplash-bg7.png"
                    alt="Background image"
                />
                <div className="relative flex w-full max-w-[800px] flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-center text-3xl text-secondary md:text-4xl lg:text-5xl">
                            Let's make it personal
                        </h1>
                        <p className="text-center text-xs text-onBackground">
                            Fields marked with * are mandatory.
                        </p>
                    </div>

                    <Avatar
                        className="mt-4 h-20 w-20 border-4"
                        style={{ borderRadius: "50% 50% 0% 50%" }}
                    >
                        <AvatarImage
                            src={profileImage || "./images/default-avatar.png"}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                        ref={fileInputRef}
                    />
                    <button
                        onClick={() => fileInputRef.current?.click()}
                        className="text-primary"
                    >
                        Upload profile picture
                    </button>

                    <div className="flex w-full flex-col items-start gap-4 text-[13px] font-semibold text-onBackground">
                        <div className="flex w-full flex-col gap-1">
                            <Label>First name *</Label>
                            <Input
                                value={firstName}
                                onChange={handleFirstNameChange}
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-1 ">
                            <Label>Last name *</Label>
                            <Input
                                value={lastName}
                                onChange={handleLastNameChange}
                                placeholder="Enter your last name"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-1 ">
                            <Label>Username *</Label>
                            <Input
                                value={userName}
                                onChange={handleUserNameChange}
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="flex w-full flex-col gap-1">
                            <Label>City *</Label>
                            <Input
                                value={city}
                                onChange={handleCityChange}
                                placeholder="Enter the name of your city"
                            />
                        </div>
                        <div className="flex w-full flex-col gap-1">
                            <Label>Country *</Label>
                            <Input
                                value={country}
                                onChange={handleCountryChange}
                                placeholder="Enter the name of your country"
                            />
                        </div>

                        <div className="flex h-9 w-full items-center  justify-between text-secondary">
                            <p className="flex flex-row-reverse gap-3">
                                Appearance
                                <img src="./icons/sun.svg" alt="Sunicon" />
                            </p>
                            <Switch />
                        </div>
                        <Link className="w-full" to="/profilestart">
                            <Button onClick={handleAddBasicUserProfileInfo}>
                                Add to your profile
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MoreAbout
