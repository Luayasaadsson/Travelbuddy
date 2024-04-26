import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { Checkbox } from "./ui/checkbox"

function LogIn() {
    return (
        <main className="flex h-screen w-full items-center justify-center pt-20">
            <div className="flex w-11/12 max-w-96 flex-col items-center gap-6">
                <h1 className="text-center text-3xl text-secondary">
                    Login <br /> Welcome back!
                </h1>
                <div className="flex w-full flex-col gap-4">
                    <Label className="text-secondary">Email *</Label>
                    <Input placeholder="Enter Your Email" />
                    <div className="relative flex w-full flex-col items-start gap-2">
                        <Label className="pt-2 text-secondary">
                            Password *
                        </Label>
                        <Input
                            placeholder="Enter Your Password"
                            className="pr-10"
                        />
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-12"
                        />
                    </div>
                    <Link to="/forgotpassword">
                        <p className="flex w-full cursor-pointer justify-end pt-2 text-sm underline underline-offset-4">
                            Forgot password?
                        </p>
                    </Link>

                    <div className="flex  w-full items-center justify-end gap-2.5">
                        <p className="text-sm leading-tight tracking-tight text-secondary">
                            Stay signed in?
                        </p>
                        <Checkbox />
                    </div>
                    <Link to="/moreabout">
                        <Button>Login</Button>
                    </Link>
                    <p className=" text-center text-sm text-onBackground">
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
                    <img src="./icons/facebook-logo.svg" alt="facebook Logo" />
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
