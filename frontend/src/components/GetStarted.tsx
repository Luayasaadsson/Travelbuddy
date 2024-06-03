import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function GetStarted() {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="flex w-full flex-col items-center justify-center gap-5 px-4 md:px-32">
                <img className="w-48" src="/images/logo.svg" alt="logo" />
                <h1 className=" text-center text-4xl text-secondary">
                    Discover Your Perfect Journey
                </h1>
                <p className="p-2 text-center text-secondary">
                    Unleash the power of personalized travel. Let our
                    AI-assistant guide you effortlessly from inspiration to
                    exploration. Your dream trip starts here.
                </p>
                <Link className="w-full" to="/hero">
                    <Button>Get started</Button>
                </Link>
            </div>
        </main>
    )
}

export default GetStarted
