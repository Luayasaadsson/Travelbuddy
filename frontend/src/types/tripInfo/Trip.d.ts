import Destination from "./Destination"
import Traveller from "./Traveller"



type Trip = {
    destination: Destination[],
    travellers: Traveller[],
    fromDate?: Date | null,
    toDate?: Date | null,
}

export default Trip