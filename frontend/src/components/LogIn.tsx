import { useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { validateEmail, validatePassword } from "./validator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"

function LogIn(): JSX.Element {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const navigate = useNavigate()

    function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
        setEmail(event.target.value)
        if (emailError && validateEmail(event.target.value)) {
            setEmailError("")
        }
    }

    function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
        setPassword(event.target.value)
        if (passwordError && validatePassword(event.target.value)) {
            setPasswordError("")
        }
    }

    function togglePasswordVisibility(): void {
        setShowPassword(!showPassword)
    }

    function handleLoginClick(): void {
        let valid = true
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address")
            valid = false
        }

        if (!validatePassword(password)) {
            setPasswordError("Your password must contain 6 characters or more")
            valid = false
        }

        if (valid) {
            navigate("/moreabout")
        }
    }

    return (
        <main className="flex h-screen w-full flex-col items-center justify-start">
            {/* <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            /> */}
            <div className="relative flex w-11/12 max-w-96 flex-col items-center justify-center gap-6 pt-28">
                <h1 className="text-center text-3xl text-secondary">
                    Login <br /> Welcome back!
                </h1>
                <div className="flex w-full flex-col gap-4">
                    <div className="flex w-full max-w-96 flex-col gap-2">
                        <Label className="text-secondary">Email *</Label>
                        <Input
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {emailError}
                            </div>
                        )}
                    </div>
                    <div className="relative flex w-full max-w-96 flex-col gap-2">
                        <Label className="gap-2 text-secondary">
                            Password *
                        </Label>
                        <Input
                            placeholder="Enter Your Password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {passwordError && (
                            <div className="error-message">
                                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                                {passwordError}
                            </div>
                        )}
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-10 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <Link to="/forgotpassword">
                        <p className="flex w-full cursor-pointer justify-end pt-2 text-sm underline underline-offset-4">
                            Forgot password?
                        </p>
                    </Link>
                    <div className="flex w-full items-center justify-end gap-2.5">
                        <p className="text-sm leading-tight tracking-tight text-secondary">
                            Stay signed in?
                        </p>
                        <Checkbox shape="square" />
                    </div>
                    <Button onClick={handleLoginClick}>Login</Button>
                    <p className="text-center text-sm text-onBackground">
                        Don't have an account?
                        <Link to="/signup">
                            <span className="cursor-pointer pl-2 text-primary underline underline-offset-4">
                                Signup here!
                            </span>
                        </Link>
                    </p>
                </div>
                <div className="flex items-center gap-[9px]">
                    <span className="w-[139px] border border-primary"></span>
                    <div className="text-sm font-normal text-onBackground">
                        Or
                    </div>
                    <span className="w-[139px] border border-primary"></span>
                </div>
                <Button variant="facebook">
                    <img src="./icons/facebook-logo.svg" alt="Facebook Logo" />
                    <span className="flex-grow">Login with Facebook</span>
                </Button>
                <Button variant="google">
                    <img src="./icons/google-logo.svg" alt="Google Logo" />
                    <span className="flex-grow">Login with Google</span>
                </Button>
            </div>
        </main>
    )
}

export default LogIn
