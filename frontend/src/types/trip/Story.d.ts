import Trip from "./Trip"
import StorySection from "./StorySection"
import Destination from "./Destination"
import Rating from "../common/Rating"
import User from "../user/User"


type Story = {
    trip: Trip,
    heading?: string | null,
    initialComment?: string | null,
    storySections?: StorySection[],
    finalComment?: string | null, 
    destination?: Destination,
    rating?: Rating,
    review?: string | null,
    recipients?: User[],
    likes?: number,
}

export default Story

