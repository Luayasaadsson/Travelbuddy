import { useState, ChangeEvent } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"
import { validateEmail, validatePassword } from "./validator"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"

function LogIn(): JSX.Element {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [emailError, setEmailError] = useState<string>("")
    const [passwordError, setPasswordError] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const navigate = useNavigate()

    async function handleLoginClick(): Promise<void> {
        let valid = true
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email address")
            valid = false
        }

        if (!validatePassword(password)) {
            setPasswordError(
                "Your password must be at least 6 characters long and include a capital letter, a number, and a special character",
            )
            valid = false
        }

        if (valid) {
            try {
                const response = await axios.post(
                    "https://localhost:7038/login?useCookies=true",
                    {
                        email: email,
                        password: password,
                    },
                )

                console.log("Logging in with email:", email)
                console.log("Logging in with password:", password)
                console.log("Login successful.", response)

                navigate("/profilestart")
            } catch (error) {
                console.error("Error logging in:", error)
            }
        }
    }

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

    return (
        <main className="h-screen">
            <div className="flex w-full flex-row-reverse items-end justify-end gap-10 px-4 pt-20 md:px-24 md:pt-28 lg:px-40 lg:pt-40">
                <img
                    className="hidden xl:flex xl:w-1/2 2xl:size-[660px]"
                    src="./images/unsplash-bg4.png"
                    alt="Background image"
                />

                <div className="flex w-full max-w-[800px] flex-col items-center justify-center gap-4">
                    <h1 className="text-center text-3xl text-secondary md:text-4xl lg:text-5xl">
                        Login <br /> Welcome back!
                    </h1>
                    <h2 className="text-secondary">
                        Fields marked with * are mandatory.
                    </h2>

                    <div className="flex w-full flex-col">
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
                    <div className="relative flex w-full flex-col">
                        <Label className="text-secondary">Password *</Label>
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
                            className="absolute inset-y-0 right-3 top-9 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                    <Link to="/forgotpassword" className="self-end">
                        <p className="cursor-pointer text-sm underline underline-offset-4">
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
                    <div className="flex items-center gap-2">
                        <span className="w-[139px] border border-primary"></span>
                        <div className="text-sm font-normal text-onBackground">
                            Or
                        </div>
                        <span className="w-[139px] border border-primary"></span>
                    </div>
                    <Button variant="facebook">
                        <img
                            src="./icons/facebook-logo.svg"
                            alt="Facebook Logo"
                        />
                        <span className="flex-grow">Login with Facebook</span>
                    </Button>
                    <Button variant="google">
                        <img src="./icons/google-logo.svg" alt="Google Logo" />
                        <span className="flex-grow">Login with Google</span>
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default LogIn
