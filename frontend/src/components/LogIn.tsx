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

                    <div className="inline-flex  w-full items-center justify-end gap-2.5">
                        <div className="text-sm leading-tight tracking-tight text-secondary">
                            Stay signed in?
                        </div>
                        <Checkbox />
                    </div>
                    <Link to="/moreabout">
                        <Button className=" w-full ">Login</Button>
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
                <div className="inline-flex items-center gap-[9px]">
                    <span className="w-[139px] border border-primary"></span>
                    <div className="text-sm font-normal text-onBackground">
                        Or
                    </div>
                    <span className="w-[139px] border border-primary"></span>
                </div>

                <div className="inline-flex w-full cursor-pointer items-center justify-between rounded-md bg-blue-600 p-3 shadow">
                    <div className="relative h-[26px] w-[26px]">
                        <img
                            className="absolute left-0 top-0 h-[26px] w-[26px]"
                            src="./icons/facebook-logo.svg"
                        />
                    </div>
                    <div className="shrink grow basis-0 text-center text-sm font-medium leading-tight tracking-tight text-white">
                        Login with Facebook
                    </div>
                </div>

                <div className="inline-flex w-full cursor-pointer items-center justify-between rounded-md border border-neutral-200 p-3 shadow">
                    <div className="relative h-[26px] w-[26px]">
                        <img
                            className="absolute left-0 top-0 h-[26px] w-[26px]"
                            src="./icons/google-logo.svg"
                        />
                    </div>
                    <div className=" grow text-center text-sm font-medium text-neutral-200">
                        Login with Google
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LogIn
