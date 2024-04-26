import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function Hero() {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="flex flex-col gap-5 p-6">
                <div className="hidden flex-row items-center text-center sm:flex ">
                    <div className="flex flex-col items-center gap-6">
                        <img
                            className="h-14 w-14"
                            src="/images/logo.svg"
                            alt="logo"
                        />
                        <h1 className="text-4xl text-secondary sm:text-5xl md:text-6xl">
                            Discover Your Perfect Journey
                        </h1>
                        <p className="text-sm text-secondary">
                            Unleash the power of personalized travel. Let our
                            AI-assistant guide you effortlessly from inspiration
                            to exploration. Your dream trip starts here.
                        </p>
                    </div>
                    <img
                        className="h-80 w-96 rounded-md bg-gradient-to-b from-black to-black"
                        src="/images/unsplash-bg2.png"
                        alt="background"
                    />
                </div>
                <h1 className="w-45 text-center text-3xl sm:hidden">
                    First step
                </h1>
                <div className="flex flex-row items-center justify-center gap-6">
                    <img
                        className="hidden h-72 w-96 rounded-md bg-gradient-to-b from-black to-black sm:flex"
                        src="/images/unsplash-bg3.png"
                        alt="background"
                    />
                    <div>
                        <h2 className="text-center text-3xl text-secondary mb-2">
                            Tailor your travel experience to perfection
                        </h2>
                        <p className="text-center text-sm text-secondary ">
                            Share your preferences and interests to unlock
                            personalized recommendations and seamless
                            adventures. Let's craft your journey together.
                        </p>
                        <div className="mt-4 flex justify-center gap-3">
                            <Link to="/login">
                                <Button variant="outline" size="md">
                                    <p className="text-neutral-200">
                                        Login now
                                    </p>
                                    <img
                                        className="ml-2 h-6 w-6"
                                        src="/images/account.svg"
                                        alt="Profileicon"
                                    />
                                </Button>
                            </Link>
                            <img
                                src="./icons/vector-icon.svg"
                                alt="Vectoricon"
                            />
                            <Link to="/signup">
                                <Button variant="default">
                                    <p>Create profile</p>
                                    <img
                                        className="ml-2 h-6 w-6"
                                        src="/images/account2.svg"
                                        alt="Profileicon"
                                    />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Hero
