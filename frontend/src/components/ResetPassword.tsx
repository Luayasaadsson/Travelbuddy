import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { RootState, AppDispatch } from "@/store/store"
import { showOverlay, hideOverlay } from "@/store/slices/overlaySlice"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

function ResetPassword() {
    // Hämtar dispatch funktionen från Redux store.
    const dispatch = useDispatch<AppDispatch>()

    // Hämtar overlayns visningsstatus från Redux store.
    const overlayVisible = useSelector(
        (state: RootState) => state.overlay.isVisible,
    )

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
                    onClick={() => dispatch(showOverlay())}
                    className="w-full"
                >
                    Reset Password
                </Button>
            </div>

            {/* Renderar overlay om overlayVisible är true. */}
            {overlayVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-background/70">
                    <div className="flex h-56 w-80 flex-col items-center justify-center gap-5 rounded-xl border border-primary bg-background ">
                        <img
                            className="rounded-full bg-primary p-2"
                            src="./icons/Confetti.svg"
                            alt="Email icon"
                        />
                        <div className="flex flex-col items-center ">
                            <p className="text-center text-base font-bold text-secondary">
                                Congratulations!
                            </p>
                            <p className="font-small p-2 text-center text-xs leading-normal tracking-wide text-secondary">
                                Your password was reset
                            </p>
                            <Link to="/login">
                                <Button
                                    onClick={() => dispatch(hideOverlay())}
                                    className="mt-2 p-2"
                                >
                                    Login now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ResetPassword
