import { useDispatch } from "react-redux"
import { showOverlay } from "@/store/slices/overlaySlice"
import Overlay from "./Overlay"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

function ResetPassword() {
    const dispatch = useDispatch()

    // Funktion för att visa overlay för återställning av lösenord.
    const handleShowResetPasswordOverlay = () => {
        dispatch(showOverlay("congratulations")) // Visar overlayn för återställning av lösenord.
    }

    return (
        <main className="flex h-screen items-center justify-center">
            <div className="flex w-11/12 max-w-96 flex-col items-center gap-4">
                <h1 className="text-3xl text-secondary">Reset Password</h1>
                <p className="text-xs text-secondary">
                    Enter your email account to reset your password
                </p>
                <div className="flex w-full flex-col items-start gap-2">
                    <Label className="text-secondary">Email *</Label>
                    <Input placeholder="Enter Your Email" />
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <Label className="text-secondary">Password *</Label>
                    <Input placeholder="Enter Your Password" />
                </div>
                <div className="flex w-full flex-col items-start gap-2">
                    <Label className="text-secondary">Confirm password *</Label>
                    <Input placeholder="Enter Your Password" />
                </div>
                <Button
                    onClick={handleShowResetPasswordOverlay}
                    className="w-full"
                >
                    Reset Password
                </Button>
                <Overlay />
            </div>
        </main>
    )
}

export default ResetPassword
