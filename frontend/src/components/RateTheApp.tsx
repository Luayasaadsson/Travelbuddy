import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function RateTheApp() {
  return (
    <main>
       <div>
          <h1 className="text-center text-3xl text-secondary sm:text-6xl">Rate the app</h1>

          <div>  
            <p>Rate by pressing a star</p>
              <div> </div>
          </div>
          
              <div>
                <p>Title</p>
                <input type="text" />
              </div>
      
              <div>
                <p>Review</p>
                <input type="text" />
              </div>

                <div>
                    <Button variant="outline" size="md">
                      <p className="text-neutral-200">CANCEL</p>
                        <img className="ml-2 h-6 w-6" src="" alt=""/>
                    </Button>

                    <img src="./icons/vector-icon.svg" alt="Vectoricon"/>
                
                    <Button variant="default">
                      <p>SEND</p>
                        <img className="ml-2 h-6 w-6" src="" alt=""/>
                    </Button>

              </div>
        </div>
    </main>
  )
}

export default RateTheApp


// EJ inlagd i app.tsx eller i path finder, återstår att göra 