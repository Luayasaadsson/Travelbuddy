import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

function SignUp() {
    return (
        <main className="mb-10 flex h-screen w-full items-center justify-center">
            <img
                className="absolute h-screen w-full"
                src="./icons/Vector.svg"
                alt="icon"
            />
            <div className="relative flex w-11/12 max-w-96 flex-col items-center gap-6 pt-24">
                <h1 className="text-center text-3xl text-secondary">
                    Let's get you started
                </h1>
                <p className="text-center text-xs text-secondary">
                    Fields marked with * are mandatory.
                </p>
                <div className="flex w-full flex-col gap-4">
                    <Label className="text-secondary ">Email *</Label>
                    <Input placeholder="Enter Your Email" />
                    <div className="relative flex w-full flex-col items-start gap-2">
                        <Label className="pt-2 text-secondary">
                            Password *
                        </Label>
                        <Input placeholder="Enter Your Password" />
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-12"
                        />
                    </div>
                    <div className="relative flex w-full flex-col items-start gap-2">
                        <Label className="pt-2 text-secondary">
                            Confirm password *
                        </Label>
                        <Input placeholder="Enter Your Password" />
                        <img
                            src="./icons/visibility.svg"
                            alt="Show password"
                            className="absolute inset-y-0 right-3 top-12"
                        />
                    </div>

                    <Link to="/moreabout">
                        <Button>Create profile</Button>
                    </Link>
                    <p className="my-2 text-center text-sm text-neutral-200 ">
                        Already have an account?
                        <Link to="/login">
                            <span className="cursor-pointer pl-2 text-primary underline underline-offset-4">
                                Login here!
                            </span>
                        </Link>
                    </p>
                </div>
                <div className="inline-flex items-center gap-[9px]">
                    <span className="w-[139px] border border-primary"></span>
                    <p className="text-sm font-normal text-onBackground">Or</p>
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

export default SignUp
