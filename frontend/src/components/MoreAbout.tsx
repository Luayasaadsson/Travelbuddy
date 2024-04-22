import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  



function MoreAbout () {
    return (
        <main className="h-screen pt-28 flex flex-col gap-4 items-center justify-start">
            <h1 className="text-secondary font-semibold text-3xl text-center text-">
                Let's make it personal
            </h1>
            <p className="text-onBackground text-xs text-center">
                Fields marked with * are mandatory.
            </p>
         
            <Avatar
                 className="border-4 border-onBackground rounded-tl-full rounded-tr-full rounded-bl-full"
            >
                <AvatarImage src="./profile-picture.jpg" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            
             <p className="text-primary text-xs text-center font-bold text-[14px] pb-[2px] border-b-[1px] border-primary">
                Upload profile picture
            </p>

            <div className="flex max-w-96 w-11/12 flex-col items-start gap-4 text-onBackground font-700">
               <div className="flex flex-col gap-1 w-full">
                    <Label>First name *</Label>
                    <Input className="placeholder:text-opacity-50 border-outline" placeholder="Enter your first name" />
               </div>
               <div className="flex flex-col gap-1 w-full">
                    <Label>Last name *</Label>
                    <Input className="placeholder:text-opacity-50 border-outline" placeholder="Enter your first name" />
               </div>
               <div className="flex flex-col gap-1 w-full">
                    <Label>City *</Label>
                    <Input className="placeholder:text-opacity-50 border-outline" placeholder="Enter the name of your city" />
               </div>
               <div className="flex flex-col gap-1 w-full">
                    <Label>Gender</Label>
                    <Select>
                        <SelectTrigger className="flex h-12 w-full ">
                            <SelectValue 
                                className="border-outline placeholder:opacity-50"
                                placeholder="Select your gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Female">Female</SelectItem>
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Non-binary">Non-binary</SelectItem>
                        </SelectContent>
                    </Select>
               </div>

                <Button className="flex w-full mt-2 p-3 max-w-96 justify-center items-center gap-2">
                    Add to your profile
                </Button>
            </div>
        </main>
    );
}

export default MoreAbout;
