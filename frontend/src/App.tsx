import Header from "./components/Header";
import { Button } from "./components/ui/button";

function App() {
    return (
        <>
            <Header />
            <main className="h-[calc(100vh-112px)] flex items-center justify-center">
                <div className="flex flex-col justify-center items-center w-4/5 p-2">
                    <img src="/logo.svg" alt="" className="w-20" />
                    <h1 className="text-primary text-3xl text-center w-45">
                        Discover Your Perfect Journey
                    </h1>
                    <p className="text-secondary text-sm text-center">
                        Unleash the power of personalized travel. Let our
                        AI-assistant guide you effortlessly from inspiration to
                        exploration. Your dream trip starts here.
                    </p>
                    <Button>Get started</Button>
                </div>
            </main>
        </>
    );
}

export default App;
