import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function MoreAbout() {
    return (
        <main className="flex h-screen flex-col items-center justify-start gap-4 pt-28">
            <h1 className="text- text-center text-3xl font-semibold text-secondary">
                Let's make it personal
            </h1>
            <p className="text-center text-xs text-onBackground">
                Fields marked with * are mandatory.
            </p>

            <Avatar
                //isAvatarImageUploaded && className="border-4 border-onBackground" TODO:
                className="border-4 border-onTertiaryContainer"
                style={{
                    borderRadius: "50% 50% 0% 50%",
                }}
            >
                <AvatarImage src="./images/profile-picture.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <p className="border-b-[1px] border-primary pb-[2px] text-center text-[14px] text-xs font-bold text-primary">
                Upload profile picture
            </p>

            <div className="flex w-11/12 max-w-96 flex-col items-start gap-4 text-[13px] font-semibold text-onBackground">
                <div className="flex w-full flex-col gap-1">
                    <Label>First name *</Label>
                    <Input
                        className="border-outline placeholder:text-onBackground placeholder:opacity-50"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="flex w-full flex-col gap-1 ">
                    <Label>Last name *</Label>
                    <Input
                        className="border-outline placeholder:text-onBackground placeholder:opacity-50"
                        placeholder="Enter your first name"
                    />
                </div>
                <div className="flex w-full flex-col gap-1">
                    <Label>City *</Label>
                    <Input
                        className="border-outline placeholder:text-onBackground placeholder:opacity-50"
                        placeholder="Enter the name of your city"
                    />
                </div>
                <div className="flex w-full flex-col gap-1">
                    <Label>Gender</Label>
                    <Select>
                        <SelectTrigger className="flex h-12 w-full border-outline placeholder:text-onBackground placeholder:opacity-50">
                            <SelectValue
                                /* className="placeholder:text-onBackground placeholder:opacity-50" */
                                placeholder="Select your gender"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Non-binary">
                                Non-binary
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Link className="w-full" to="/profilestart">
                    <Button>
                        Add to your profile
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default MoreAbout
