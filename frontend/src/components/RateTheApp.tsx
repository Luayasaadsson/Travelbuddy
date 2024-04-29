
import { Button } from "./ui/button"

function RateTheApp() {
  return (
        <main className="flex flex-col  h-screen items-center pt-32 pr-4 pl-4 pb-4">
          <div className="flex flex-col justify- items-center gap-4">
            <h1 className="text-3xl font-bold text-secondary">Rate The app</h1>
            <h1 className="text-xl md:text-2xl gap-4">Rate by pressing a star</h1>
          </div>

          <div className=" flex gap-1 py-4">
            <img src="./icons/ratingstar.svg" alt="" />
            <img src="./icons/ratingstar.svg" alt="" />
            <img src="./icons/ratingstar.svg" alt="" />
            <img src="./icons/ratingstar.svg" alt="" />
            <img src="./icons/ratingstar.svg" alt="" />
          </div>

          <div className=" flex flex-col gap-4">
            <p>Title</p>
            {/* <input className="" type="text" /> */}
            <img src="./icons/Vector2525.svg" alt="" />
          </div>

          <div className="flex flex-col justify-between items-start pt-2.5 h-32">
            <p>Review</p>
            {/* <input type="text" /> */}
            <img src="./icons/Vector2525.svg" alt="" />
          </div>

          <div className="flex justify-between items-center pt-2.5 w-80">
                    
           <Button variant="outline" size="md">
             <p className="text-neutral-200">CANSEL</p>
           </Button>
            
    
            <img src="./icons/vector-icon.svg" alt="Vectoricon" />

            <Button variant="default" size="md"  >
              <p>SEND</p>
            </Button>
          </div>

       </main>
  )
}

export default RateTheApp

// Behöver justera Knapparna så det blir enhetliga.. 
// SKAPA funktion så man kan rate 