import { Link } from "react-router-dom"
import { Button } from "./ui/button"

function RateTheApp() {
  return (
    <main>
    <div>
      <h1 className="text-center text-3xl text-secondary sm:text-6xl">Rate the app</h1>
      <p>Rate by pressing a star</p>

      <img src="" alt="" />

      <div>
        <p>Title</p>
        <input type="text" />
      </div>
    <div>
      <p>Review</p>
      <input type="text" />
    </div>

      <div>
        <Button>CANSEL</Button>
        <Button>SEND</Button>
      </div>
    </div>
    </main>
  )
}

export default RateTheApp


// EJ inlagd i app.tsx eller i path finder, återstår att göra 