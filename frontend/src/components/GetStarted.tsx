import { Button } from "./ui/button"

function GetStarted() {
    return (
        <main className="flex h-screen items-center justify-center  ">
            <div className="flex flex-col items-center justify-center gap-5 p-2">
                <img
                    className="w-20 sm:w-2/12"
                    src="/images/logo.svg"
                    alt="logo"
                />
                <h1 className="text-center text-3xl text-secondary sm:text-6xl">
                    Discover Your Perfect Journey
                </h1>
                <p className="p-2 text-center text-sm text-secondary sm:text-3xl">
                    Unleash the power of personalized travel. Let our
                    AI-assistant guide you effortlessly from inspiration to
                    exploration. Your dream trip starts here.
                </p>
                <Button className="flex h-full w-full items-center justify-center gap-2 p-3 sm:text-2xl">
                    Get started
                </Button>
            </div>
        </main>
    )
}

export default GetStarted
