import { useState, ChangeEvent } from "react"
import { useDispatch } from "react-redux"
import { showOverlay } from "@/store/slices/overlaySlice"
import Overlay from "./Overlay"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { validateEmail } from "@/components/validator"

function ForgotPassword() {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    // Funktion för att visa overlay för glömt lösenord.
    const handleShowForgotPasswordOverlay = () => {
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address")
            return
        }
        dispatch(showOverlay("email")) // Visar overlayn för glömt lösenord.
    }

    // Funktion för att hantera ändringar i e-postadressfältet.
    function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value)
        if (emailError && validateEmail(event.target.value)) {
            setEmailError("")
        }
    }

    return (
        <main className="flex h-screen flex-col items-center justify-start">
           {/*  <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            /> */}
            <div className="relative flex w-11/12 max-w-96 flex-col items-center gap-4">
                <div className="flex justify-center pt-64">
                    <h1 className="text-3xl text-secondary">Forgot password</h1>
                </div>
                <p className="text-xs text-secondary">
                    Enter your email account to reset your password
                </p>
                <div className="flex w-full flex-col items-start gap-2">
                    <Label className="text-secondary">Email *</Label>
                    <Input
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    {emailError && (
                        <div className="error-message">{emailError}</div>
                    )}
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
