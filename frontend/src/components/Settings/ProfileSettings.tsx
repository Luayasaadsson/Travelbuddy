import { Link } from "react-router-dom"
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
import {
    toggleAccommodationPreference,
    toggleDietPreference,
    toggleFoodPreference,
    toggleTransportationPreference,
    toggleVacationPreference,
} from "@/store/slices/userSlice"

function ProfileSettings() {
    const dispatch = useDispatch()
    const accommodationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.accomodation,
    )
    const dietPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.diet,
    )
    const foodList = useSelector(
        (state: RootState) => state.user.preferences.food,
    )
    const transportationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.transportation,
    )

    const vacationPreferenceList = useSelector(
        (state: RootState) => state.user.preferences.vacation,
    )

    const handleToggleAccommodationPreference = (id: number) => {
        dispatch(toggleAccommodationPreference(id))
    }
    const handleToggleDietPreference = (id: number) => {
        dispatch(toggleDietPreference(id))
    }
    const handleToggleLike = (country: string) => {
        dispatch(toggleFoodPreference(country))
    }
    const handleToggleTransportationPreference = (id: number) => {
        dispatch(toggleTransportationPreference(id))
    }
    const handleToggleVacationPreference = (id: number) => {
        dispatch(toggleVacationPreference(id))
    }
    return (
        <main className="flex min-h-screen items-start justify-center">
            {/* <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            /> */}
            <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-6">
                <div className="flex justify-center pt-28">
                    <h1 className="text-2xl font-bold">Profile settings</h1>
                </div>
                <div className="flex w-full flex-col items-start gap-4 text-secondary">
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
                    <p className="text-xl">My accommodation preferences</p>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Favorite accommodation types
                            </AccordionTrigger>
                            <AccordionContent>
                                {accommodationPreferenceList.map((item) => (
                                    <Checkbox
                                        key={item.id}
                                        checked={item.selected}
                                        color="neutral"
                                        onCheckedChange={() =>
                                            handleToggleAccommodationPreference(
                                                item.id,
                                            )
                                        }
                                    >
                                        {item.label}
                                    </Checkbox>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">My dietary preferences</p>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Dietary requirements
                            </AccordionTrigger>
                            <AccordionContent>
                                {dietPreferenceList.map((item) => (
                                    <Checkbox
                                        key={item.id}
                                        checked={item.selected}
                                        color="neutral"
                                        onCheckedChange={() =>
                                            handleToggleDietPreference(item.id)
                                        }
                                    >
                                        {item.label}
                                    </Checkbox>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">My food preferences</p>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Favorite cuisines
                            </AccordionTrigger>
                            <AccordionContent>
                                {foodList.map((item, index) => (
                                    <Checkbox
                                        key={index}
                                        color="neutral"
                                        onCheckedChange={() =>
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

                <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">My transportation preferences</p>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Favorite transportation
                            </AccordionTrigger>
                            <AccordionContent>
                                {transportationPreferenceList.map((item) => (
                                    <Checkbox
                                        key={item.id}
                                        checked={item.selected}
                                        color="neutral"
                                        onCheckedChange={() =>
                                            handleToggleTransportationPreference(
                                                item.id,
                                            )
                                        }
                                    >
                                        {item.label}
                                    </Checkbox>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

                <div className="flex w-full flex-col text-secondary">
                    <p className="text-xl">My vacation preferences</p>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                Favorite vacation types
                            </AccordionTrigger>
                            <AccordionContent>
                                {vacationPreferenceList.map((item) => (
                                    <Checkbox
                                        key={item.id}
                                        checked={item.selected}
                                        color="neutral"
                                        onCheckedChange={() =>
                                            handleToggleVacationPreference(
                                                item.id,
                                            )
                                        }
                                    >
                                        {item.label}
                                    </Checkbox>
                                ))}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                <Link className="w-full" to="/profilestart">
                    <Button className="flex w-full max-w-96 items-center justify-center gap-2 p-3">
                        Save changes
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default ProfileSettings
