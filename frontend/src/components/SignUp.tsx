import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

function SignUp() {
    return (
        <main className="flex h-screen flex-col items-center justify-center gap-4 pt-8">
            <h1 className="text-center text-3xl text-secondary">
                Let's get you started
            </h1>
            <p className="text-center text-xs text-secondary">
                Fields marked with * are mandatory.
            </p>
            <div className="flex w-11/12 max-w-96 flex-col items-start gap-2">
                <Label className="text-secondary ">Email *</Label>
                <Input placeholder="Enter Your Email" />
                <div className="relative flex w-full flex-col items-start gap-2">
                    <Label className="pt-2 text-secondary">Password *</Label>
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
            <Button className="flex w-11/12 max-w-96 items-center justify-center gap-2 p-3">
                Create profile
            </Button>
            <p className="my-2 text-center text-sm text-neutral-200 ">
                Already have an account?
                <span className="cursor-pointer pl-2 text-primary underline underline-offset-4">
                    Login here!
                </span>
            </p>
            <div className="inline-flex h-[21px] w-10/12 max-w-[313px] items-center justify-start gap-[9px]">
                <div className="h-[0px] w-[139px] border border-emerald-300"></div>
                <div className="text-sm font-normal text-neutral-300">Or</div>
                <div className="h-[0px] w-[139px] border border-emerald-300"></div>
            </div>

            <div className="inline-flex h-[50px] w-11/12 max-w-[361px] cursor-pointer items-center justify-between rounded-md bg-blue-600 p-3 shadow">
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

            <div className="inline-flex h-[50px] w-11/12 max-w-[361px] cursor-pointer items-center justify-between rounded-md border border-neutral-200 p-3 shadow">
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
        </main>
    )
}

export default SignUp
