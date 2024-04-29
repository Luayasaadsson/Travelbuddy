import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function ProfileSettings() {
    return (
        <main className="flex h-screen items-start justify-center pt-28">
            <div className="flex w-11/12 max-w-96 flex-col items-center justify-center gap-6">
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold">Profile settings</h1>
                </div>
                <div className="flex w-full flex-col items-start gap-2 text-secondary">
                    <p className="text-xl">Username</p>
                    <div className="flex w-full max-w-96 flex-col">
                        <Label className="gap-2 text-secondary">Name *</Label>
                        <Input placeholder="Enter Your Public Name" />
                    </div>
                    
                </div>
                <div className="flex w-full flex-col items-start gap-4 text-secondary">
                    <p className="text-xl">Profile information</p>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">Name *</Label>
                        <Input placeholder="Enter Your Name" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">
                        Phone number *
                        </Label>
                        <Input placeholder="Enter Your Phone Number" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">
                        Email *
                        </Label>
                        <Input placeholder="Enter Your Email" />
                    </div>
                </div>
                <div className="flex w-full flex-col items-start gap-2 text-secondary">
                    <p className="text-xl">My food preferences</p>
                    <div className="flex w-full flex-col gap-6">
                  
                    <Select>
                        <SelectTrigger className="flex h-12 w-full border-outline placeholder:text-onBackground placeholder:opacity-50">
                            <SelectValue
                                placeholder="Favorite cuisines"
                            />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Pasta">Pasta</SelectItem>
                            <SelectItem value="Kebab">Kebab</SelectItem>
                            <SelectItem value="Pizza">Pizza</SelectItem>
                            <SelectItem value="Buffé">Buffé</SelectItem>
                            <SelectItem value="Barbecue">Barbecue</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select>
                        <SelectTrigger className="flex h-12 w-full border-outline placeholder:text-onBackground placeholder:opacity-50">
                            <SelectValue
                                placeholder="Allergie"
                            />
                        </SelectTrigger>
                    </Select>
                </div>
                </div>
                <Button className="flex w-full max-w-96 items-center justify-center gap-2 p-3">
                    Save changes
                </Button>
            </div>
        </main>
    )
}

export default ProfileSettings
