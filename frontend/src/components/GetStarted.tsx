import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function GetStarted() {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="relative flex flex-col items-center justify-center gap-5 px-2">
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
                <Link className="flex w-full justify-center" to="/hero">
                    <Button className="z-10 h-full w-full items-center p-3 sm:text-2xl">
                        Get started
                    </Button>
                </Link>
            </div>
        </main>
    )
}

export default GetStarted
