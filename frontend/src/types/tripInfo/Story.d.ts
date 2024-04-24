import Destination from "./Destination"
import StoryItem from "./StorySection"
import Rating from "../common/Rating"
import Recipient from "../common/Recipient"
import Trip from "./Trip"
import Destination from "./Destination"


type Story = {
    trip: Trip,
    heading?: string | null,
    initialComment?: string | null,
    storySections?: StorySection[],
    finalComment?: string | null, 
    destination?: Destination,
    rating?: Rating,
    review?: string | null,
    recipients?: Recipient[],
    likes?: number,
}

export default Story

