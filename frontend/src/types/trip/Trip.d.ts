import Destination from "./Destination"
import Traveller from "./Traveller"



type Trip = {
    id: string
    status?: TripStatus
    destinationIds: string[],
    travellerIds: string[],
    fromDate?: Date | null,
    toDate?: Date | null,
}

export default Trip