export default function FooterMobile() {
    return (
        <footer className="flex flex-col justify-center items-center w-full gap-10 py-20">
            <div className="flex justify-center items-center gap-2">
                <img src="/logo.svg" alt="" className="w-14" />
                <h1 className="text-4xl text-primary font-light">
                    TravelBuddy
                </h1>
            </div>
            <div className="flex flex-col  justify-center gap-16 py-7 ">
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-primary font-bold text-2xl">
                        Guide trips
                    </h1>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <p className="text-primary text-xl">Try our AI-guide</p>
                        <p className="text-primary text-xl">Find Restaurants</p>
                        <p className="text-primary text-xl">
                            Find places to stay
                        </p>
                        <p className="text-primary text-xl">Find activities</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-primary font-bold text-2xl">About</h1>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <p className="text-primary text-xl">Om Travel Buddy </p>
                        <p className="text-primary text-xl">Explorer</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-primary font-bold text-2xl">
                        Feedback
                    </h1>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <p className="text-primary text-xl">Rate</p>
                        <p className="text-primary text-xl">Ge feedback </p>
                        <p className="text-primary text-xl">Blog</p>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-primary font-bold text-2xl">Support</h1>
                    <div className="flex flex-col justify-center items-start gap-2">
                        <p className="text-primary text-xl">Contact</p>
                        <p className="text-primary text-xl">FAQ</p>
                        <p className="text-primary text-xl">
                            Juridisk information
                        </p>
                        <p className="text-primary text-xl">
                            Integritetspolicy
                        </p>
                        <p className="text-primary text-xl">Terms</p>
                        <p className="text-primary text-xl">Privacy</p>
                        <p className="text-primary text-xl">Cookies </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-4">
                <img src="/icons/facebook.svg" alt="facebook icon" />
                <img src="/icons/instagram.svg" alt="instagram icon" />
            </div>
            <div className="flex items-center justify-center">
                <p className="text-primary text-xl">
                    C 2024- TravelBuddy. Stockholm Sweden
                </p>
            </div>
        </footer>
    );
}
