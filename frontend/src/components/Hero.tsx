import { Button } from "./ui/button"
function Hero() {
    return (
        <main className="flex h-screen items-center justify-center ">
            <div className="flex w-4/5 flex-col items-center justify-center gap-5 p-2">
                <h1 className="w-45 text-center text-3xl">First step</h1>
                <h1 className="text-center text-3xl text-secondary">
                    Tailor your travel experience to perfection
                </h1>
                <p className="text-center text-sm text-secondary ">
                    Share your preferences and interests to unlock personalized
                    recommendations and seamless adventures. Let's craft your
                    journey together.
                </p>
                <div className="mt-4 flex  gap-3">
                    <Button variant="outline" size="md">
                        <p className="text-neutral-200">Login now</p>
                        <img
                            className="ml-2 h-6 w-6"
                            src="/images/account.svg"
                            alt="Profileicon"
                        />
                    </Button>
                    <img src="./icons/vector-icon.svg" alt="Vectoricon" />
                    <Button variant="default">
                        <p>Create profile</p>
                        <img
                            className="ml-2 h-6 w-6"
                            src="/images/account2.svg"
                            alt="Profileicon"
                        />
                    </Button>
                </div>
            </div>
        </main>
    )
}

export default Hero
