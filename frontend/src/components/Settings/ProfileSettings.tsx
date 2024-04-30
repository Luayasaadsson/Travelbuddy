import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/store"
import { toggleFoodPreference } from "@/store/slices/userSlice"

function ProfileSettings() {
    const dispatch = useDispatch()
    const nationalFoodList = useSelector(
        (state: RootState) => state.user.preferences.nationalFood,
    )

    const handleToggleLike = (country: string) => {
        dispatch(toggleFoodPreference(country))
    }
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
                        <Label className="gap-2 text-secondary">Email *</Label>
                        <Input placeholder="Enter Your Email" />
                    </div>
                </div>
                <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">My food preferences</p>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Favorite cuisines
                            </AccordionTrigger>
                            <AccordionContent>
                                {nationalFoodList.map((item, index) => (
                                    <Checkbox
                                        key={index}
                                        color="neutral"
                                        checked={item.like}
                                        onChange={() =>
                                            handleToggleLike(item.country)
                                        }
                                    >
                                        {item.country}
                                    </Checkbox>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <Button className="flex w-full max-w-96 items-center justify-center gap-2 p-3">
                    Save changes
                </Button>
            </div>
        </main>
    )
}

export default ProfileSettings
