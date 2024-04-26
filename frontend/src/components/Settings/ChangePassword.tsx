import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

function ChangePassword() {
    return (
        <main className="flex h-screen flex-col items-center justify-start pt-36">
            <div className="flex w-11/12 max-w-96 flex-col items-center justify-center gap-6">
                <div className="flex justify-center">
                    <h1 className="text-2xl font-bold">Change password</h1>
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">Email *</Label>
                        <Input placeholder="Enter Your Email" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col pt-6 ">
                        <Label className="gap-2 text-secondary">
                            Current password *
                        </Label>
                        <Input placeholder="Enter Your Password" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">
                            New password *
                        </Label>
                        <Input placeholder="Enter Your Password" />
                    </div>
                    <div className="flex w-full max-w-96 flex-col ">
                        <Label className="gap-2 text-secondary">
                            Confirm new password *
                        </Label>
                        <Input placeholder="Enter Your Password" />
                    </div>
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

export default ChangePassword
