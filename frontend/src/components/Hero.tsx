import { Button } from "./ui/button"
function Hero (){
  return (
    <main className="flex h-screen items-center justify-center ">
    <div className="flex w-4/5 flex-col items-center justify-center p-2 gap-5 w-80">
        
        <h1 className="w-45 text-center text-3xl">
            First step
        </h1>
        <h1 className="text-center text-3xl text-secondary">
            Tailor your travel experience to perfection
        </h1>
        <p className="text-center text-sm text-secondary ">
        Share your preferences and interests to unlock personalized recommendations and seamless adventures. Let's craft your journey together.
        </p>
        <div className="flex justify-center">
        <Button>Login Now <img className="" src="./images/account_circle.svg" alt="" /></Button>
        <Button>Create profile <img src="./images/account_circle.svg" alt="" />
        </Button>
        </div>
    </div>
</main>
  )

}

export default Hero