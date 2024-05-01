import { Button } from "./ui/button";
import StarRating from "./StarRating"; 
import { Link } from "react-router-dom"

function RateTheApp() {
  return (
    <main className="flex h-screen flex-col items-center pb-4 pl-4 pr-4 pt-32">
      <div className="justify- flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-primary">Rate The app</h1>
        <h1 className="text-xl text-secondary md:text-2xl">
          Rate by pressing a star
        </h1>

        <StarRating onChange={(rating) => console.log("Rating:", rating)} />

        <div className="grid gap-4">
          <p>Title</p>
          <input
            className="border-none bg-transparent text-secondary outline-none"
            type="text"
            placeholder="Enter your title here"
          />
          <img src="./icons/Vector2525.svg" alt="icon" />
        </div>

        <div className="grid gap-4">
          <p>Review</p>
          <textarea
            className="border-none bg-transparent text-secondary outline-none resize-none h-24"
            placeholder="Enter your review here"
          />
          <img src="./icons/Vector2525.svg" alt="icon" />
        </div>

        <div className="mt-4 w-full flex justify-center gap-3">
            <Link to="/settings">
          <Button variant="outline" size="lg">
            <p className="uppercase text-secondary">cancel</p>
          </Button>
          </Link>
          <img src="./icons/vector-icon.svg" alt="Vectoricon" />

          <Button variant="default">
            <p className="uppercase">send</p>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default RateTheApp;