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
                                <Checkbox color="neutral">Pasta</Checkbox>
                                <Checkbox color="neutral">Kebab</Checkbox>
                                <Checkbox color="neutral">Pizza</Checkbox>
                                <Checkbox color="neutral">Buffé</Checkbox>
                                <Checkbox color="neutral">Barbecue</Checkbox>
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
