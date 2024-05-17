import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Switch } from "@/components/ui/switch"
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
        <main className="h-screen">
            <div className="flex items-center justify-center px-4 pt-20 md:px-24 md:pt-28 lg:gap-10 lg:px-40 lg:pt-40">
                <img
                    className=" hidden xl:flex xl:w-1/2 2xl:w-[600px]"
                    src="./images/unsplash-bg7.png"
                    alt="Background image"
                />
                <div className="relative flex w-full max-w-[600px] flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-center text-3xl text-secondary md:text-4xl lg:text-5xl">
                            Let's make it personal
                        </h1>
                        <p className="text-center text-xs text-onBackground">
                            Fields marked with * are mandatory.
                        </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2">
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
                    </div>

                    <button className="cursor-pointer border-b-[1px] border-primary pb-[2px] text-center text-[14px] text-xs font-bold text-primary">
                        Upload profile picture
                    </button>

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
                    <div className="flex h-9 w-full items-center  justify-between text-secondary">
                        <p className="flex flex-row-reverse gap-3">
                            Appearance
                            <img src="./icons/sun.svg" alt="Sunicon" />
                        </p>
                        <Switch />
                    </div>
                    <Link className="w-full" to="/profilestart">
                        <Button>Add to your profile</Button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default MoreAbout
