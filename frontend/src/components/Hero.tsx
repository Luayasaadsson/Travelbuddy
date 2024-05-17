import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function Hero() {
    return (
        <main className="flex h-screen items-center justify-center">
            <div className="flex max-h-screen w-full flex-col gap-4 px-4 md:px-10 lg:gap-8 lg:px-40 ">
                <div className="flex flex-col items-center justify-center text-center lg:min-w-[500px] lg:flex-row lg:gap-10">
                    <div className="flex flex-col items-center justify-center gap-4">
                        <img
                            src="/images/logo.svg"
                            alt="Logo"
                            className="hidden lg:inline lg:w-10 xl:w-16"
                        />
                        <h1 className="text-3xl text-primary lg:text-4xl lg:text-secondary xl:text-6xl">
                            <span className="lg:hidden">First step</span>
                            <span className="hidden lg:inline">
                                Discover Your <br /> Perfect Journey
                            </span>
                        </h1>
                        <h2 className="text-3xl text-secondary lg:text-xl">
                            <span className="lg:hidden">
                                Tailor your travel <br /> experience to <br />
                                perfection
                            </span>
                            <span
                                className="hidden lg:inline
                             "
                            >
                                Unleash the power of personalized travel. Let
                                our AI-assistant guide you effortlessly from
                                inspiration to exploration. Your dream trip
                                starts here.
                            </span>
                        </h2>
                    </div>
                    <img
                        className="hidden rounded-md bg-gradient-to-b from-black to-black lg:flex lg:w-[383px] xl:w-[480px]"
                        src="/images/unsplash-bg2.png"
                        alt="image"
                    />
                </div>
                <div className="flex flex-col items-center justify-center text-center lg:flex-row lg:justify-between lg:gap-10">
                    <img
                        className="hidden rounded-md bg-gradient-to-b from-black to-black lg:flex lg:w-[383px] xl:w-[480px]"
                        src="/images/unsplash-bg3.png"
                        alt="image"
                    />
                    <div className="flex w-2/3 flex-col items-center lg:gap-4 justify-center">
                        <h1 className="text-3xl text-primary lg:text-4xl lg:text-secondary xl:text-6xl">
                            <span className="hidden lg:inline">
                                Tailor your travel <br /> experience to <br />
                                perfection
                            </span>
                        </h1>
                        <p className="text-sm text-secondary lg:text-xl pb-4">
                            <span className="flex break-words text-center">
                                Share your preferences and interests to unlock
                                personalized recommendations and seamless
                                adventures. Let's craft your journey together.
                            </span>
                        </p>
                        <div className="flex justify-center gap-3">
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
                                    <p>Sign up</p>
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
