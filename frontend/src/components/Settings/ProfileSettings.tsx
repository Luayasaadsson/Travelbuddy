import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function ProfileSettings() {
    return (
        <main className="flex h-screen items-start justify-center pt-28">
            <div className="flex w-11/12 max-w-96 flex-col items-center justify-center gap-6">
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold">Profile settings</h1>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <p className="text-xl">Profile information</p>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">Name *</Label>
                        <Input placeholder="Enter your name" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">
                            Last name *
                        </Label>
                        <Input placeholder="Enter your lastname" />
                    </div>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <p className="text-xl">Contact details</p>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">Email *</Label>
                        <Input placeholder="Enter your email" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">
                            Phone number *
                        </Label>
                        <Input placeholder="Enter your phone number" />
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
