import { useDispatch } from "react-redux"
import { showOverlay } from "@/store/slices/overlaySlice"
import Overlay from "./Overlay"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

function ForgotPassword() {
    const dispatch = useDispatch()

    // Funktion för att visa overlay för glömt lösenord.
    const handleShowForgotPasswordOverlay = () => {
        dispatch(showOverlay("email")) // Visar overlayn för glömt lösenord.
    }

    return (
        <main className="flex h-screen items-center justify-center">
            <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            />
            <div className="relative flex w-11/12 max-w-96 flex-col items-center gap-4 ">
                <h1 className="text-3xl text-secondary">Forgot Password</h1>
                <p className="text-xs text-secondary">
                    Enter your email account to reset your password
                </p>
                <div className="flex w-full flex-col items-start gap-2">
                    <Label className="text-secondary">Email *</Label>
                    <Input placeholder="Enter Your Email" />
                </div>
                <Button
                    onClick={handleShowForgotPasswordOverlay}
                    className="w-full"
                >
                    Reset Password
                </Button>
            </div>
            <Overlay />
        </main>
    )
}

export default ForgotPassword
