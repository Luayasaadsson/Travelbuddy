import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
/* import { useSelector } from "react-redux"
import { useState } from "react"
import { RootState } from "@/store/store"
import { useDispatch } from "react-redux" */

type ProfileDetailsSectionProps = {
    handleFirstNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleLastNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleUserNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCityChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleCountryChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    firstName: string | undefined
    lastName: string | undefined
    userName: string | undefined
    city: string | undefined
    country: string | undefined
}

// Komponent för att visa användarinformation och profildetaljer
const ProfileDetailsSection: React.FC<ProfileDetailsSectionProps> = ({
    firstName,
    lastName,
    userName,
    city,
    country,
    handleFirstNameChange,
    handleLastNameChange,
    handleUserNameChange,
    handleCityChange,
    handleCountryChange,
}) => {
    return (
        <div className="flex w-full flex-col items-start gap-4 text-secondary">
            {/* <p className="text-xl text-primary">Username</p> */}
            <div className="flex w-full flex-col">
                <Label className="gap-2 text-secondary">First name *</Label>
                <Input
                    value={firstName}
                    onChange={(e) => handleFirstNameChange(e)}
                    placeholder="Enter your first name"
                />
            </div>
            <div className="flex w-full flex-col">
                <Label className="gap-2 text-secondary">Last name *</Label>
                <Input
                    value={lastName}
                    onChange={(e) => handleLastNameChange(e)}
                    placeholder="Enter your last name"
                />
            </div>
            <div className="flex w-full  flex-col">
                <Label className="gap-2 text-secondary">Username *</Label>
                <Input
                    disabled
                    value={userName}
                    onChange={(e) => handleUserNameChange(e)}
                    placeholder="Enter your username"
                />
            </div>
            <div className="flex w-full flex-col">
                <Label className="gap-2 text-secondary">City *</Label>
                <Input
                    value={city}
                    onChange={(e) => handleCityChange(e)}
                    placeholder="Enter the name of your city"
                />
            </div>
            <div className="flex w-full flex-col">
                <Label className="gap-2 text-secondary">Country *</Label>
                <Input
                    value={country}
                    onChange={(e) => handleCountryChange(e)}
                    placeholder="Enter the name of your country"
                />
            </div>
        </div>
    )
}

export default ProfileDetailsSection
