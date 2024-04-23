import { Button } from "./ui/button"
function Hero (){
  return (
    <main className="flex h-screen items-center justify-center ">
    <div className="flex w-4/5 flex-col items-center justify-center p-2 gap-5 w-80">
        <img src="/logo.svg" alt="" className="w-20" />
        <h1 className="w-45 text-center text-3xl">
            Discover Your Perfect Journey
        </h1>
        <p className="text-center text-sm text-secondary ">
            Unleash the power of personalized travel. Let our
            AI-assistant guide you effortlessly from inspiration to
            exploration. Your dream trip starts here.
        </p>
        {/* Skapa en gap mellan p och button med avstånd 32 */}
        <Button>Get started</Button>
        <Button>Get started</Button>
    </div>
</main>
  )

}

// Justeringer krävs på hela följ figman från start

export default Hero