
import { Button } from "./ui/button"

function RateTheApp() {
  return (
        <main>
            <div className="flex justify-center h-screen flex-col items-center gap-7">
              <h1 className="text-2xl text-primary md:text-4xl">Rate the app</h1>
            
                <h2 className="text-xl md:text-xl">Rate by pressing a star</h2>

                  <div className="flex justify-start">
                  <p>Title</p> 
                  </div>


                  <img src="./icons/Vector2525.svg" alt="" />
                  <div>
                    <p>Review</p>
                  </div>

                    <div className="flex justify-between gap-5">
                        <Button className= "border border-input text-primary border-primary bg-background w-40">CANCEL</Button>
                        <img src="./icons/vector-icon.svg" alt="Vectoricon"/>
                        <Button className=" flex w-40" >SEND</Button>
                  </div>
            </div>
       </main>
  )
}

export default RateTheApp


// Stjärnan ej lagt till heter icon-ratingstar.svg