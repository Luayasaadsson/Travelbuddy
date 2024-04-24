import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

function SignUp() {
    return (
        <main className="flex h-screen items-center justify-center pt-28">
            <div className="flex flex-row-reverse gap-6 p-6">
                <div>
                    <img
                        className="hidden h-full w-full sm:flex"
                        src="/images/unsplash-bg5.png"
                        alt="background"
                    />
                </div>
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-center text-3xl text-secondary">
                        Let's get you started
                    </h1>
                    <p className="text-center text-xs text-secondary">
                        Fields marked with * are mandatory.
                    </p>
                    <div className="flex w-full flex-col">
                        <Label className="text-secondary ">Email *</Label>
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
                        <div className="relative flex w-full flex-col items-start gap-2">
                            <Label className="pt-2 text-secondary">
                                Confirm password *
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
                    </div>
                    <Button className="flex w-full items-center justify-center gap-2 p-3">
                        Create profile
                    </Button>
                    <p className="my-2 text-center text-sm text-neutral-200 ">
                        Already have an account?
                        <span className="cursor-pointer pl-2 text-primary underline underline-offset-4">
                            Login here!
                        </span>
                    </p>
                    <div className="inline-flex items-center gap-[9px]">
                        <span className="w-[139px] border border-emerald-300"></span>
                        <p className="text-sm font-normal text-neutral-300">
                            Or
                        </p>
                        <span className="w-[139px] border border-emerald-300"></span>
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

                    <div className="inline-flex h-[50px] w-full cursor-pointer items-center justify-between rounded-md border border-neutral-200 p-3 shadow">
                        <div className="relative h-[26px] w-[26px]">
                            <img
                                className="absolute left-0 top-0 h-[26px] w-[26px]"
                                src="./icons/google-logo.svg"
                            />
                        </div>
                        <div className="shrink grow basis-0 text-center text-sm font-medium leading-tight tracking-tight text-neutral-200">
                            Login with Google
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp
